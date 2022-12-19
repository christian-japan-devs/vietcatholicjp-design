import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import {AuthenticatedUser} from "../../../types/nextUser";
import {signInWithGoogleAccount} from "../../../lib/apiEnpoint";
const API_BASE = process.env.NEXT_PUBLIC_DJANGO_API_ENDPOINT;

const settings = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            type: 'credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "username" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              //console.log(API_BASE)
              const res = await fetch(`${API_BASE}/api/auth/login/`, {
                method: 'POST',
                //agent: new Agent({
                //    rejectUnauthorized: false,
                //}),
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const result = await res.json()
              // If no error and we have user data, return it
              if (res.ok && result) {
                let user = result['user']
                user.access_token = result['access_token']
                user.refresh_token = result['refresh_token']
                return user
              }
              // Return null if user data could not be retrieved
              return null
            }
        })
    ],
    secret: process.env.NEXT_SECRET,
    callbacks:{
        async signIn({user, account, profile }){
            if(account.provider === "google"){
                const {access_token, id_token} = account;
                let accessToken = access_token
                let idToken = id_token
                try {
                    const response = await fetch(
                        signInWithGoogleAccount,
                        {
                            method: 'POST',
                            //agent: new Agent({
                            //    rejectUnauthorized: false,
                            //}),
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                            "access_token": accessToken,
                            "id_token": idToken
                            }),
                        },
                    );
                    const json = await response.json()
                    account.access_token = json['access_token'];
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            if(account.provider === 'credentials'){
                account.access_token = user['access_token'];
                return true;
            }
            return false;
        },

        async jwt({user,token, account, profile}){
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },

        async session({token,session}) {
            session.accessToken = token.accessToken
            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (url.includes("callbackUrl=")){
                let callUrl = decodeURIComponent(url.split("callbackUrl=")[1])
                //console.log('callUrl: '+callUrl)
                return callUrl
            }
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
    },
    session: {
        maxAge: 8 * 24 * 60 * 60, // 8 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    pages: {
        signIn: '/account/signin',
    }
};

export default (req, res) => NextAuth(req, res, settings)
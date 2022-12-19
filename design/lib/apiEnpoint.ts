export const apiDomain = process.env.NEXT_PUBLIC_DJANGO_API_ENDPOINT;
const apiURL = '/api'; //custom-api
export const endpoint = `${apiDomain}${apiURL}`;
const authURL = '/rest-auth'; //rest-framework
export const authEndPoint = `${apiDomain}${authURL}`;

//Authentication endpoint Api
export const loginEndPoint = `${authEndPoint}/login/`;
export const signUpEndPoint = `${endpoint}/account/create`;
export const requestPassword = `${endpoint}/account/request-password`;
export const resetPassword = `${endpoint}/account/reset-password`;
export const confirmEndPoint = `${endpoint}/account/confirm`;
//Signin with google account
export const signInWithGoogleAccount = `${endpoint}/social/login/google/`;
//Mass Register endpoint
export const massRegister = `${apiDomain}/api/massregister`;
export const massRegisterGetList = `${apiDomain}/api/massregister/getmass`;
export const massRegisterRegister = `${apiDomain}/api/massregister/register`;
export const massRegisterWaitingRegister = `${apiDomain}/api/massregister/waitingregister`;
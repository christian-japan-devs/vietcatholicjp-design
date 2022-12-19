import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={session}
      // Re-fetch session every 5 minutes
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

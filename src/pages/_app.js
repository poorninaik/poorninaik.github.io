import '@/styles/globals.css'
import { ApolloProvider } from "@apollo/client"
import client from "../../apollo-client"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (<ApolloProvider client={client}>
  <Script
    strategy="afterInteractive"
    src="https://www.googletagmanager.com/gtag/js?id=G-1QFKS0MT0C"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1QFKS0MT0C');
    `}
  </Script>

  <Component {...pageProps} />
</ApolloProvider>)
}




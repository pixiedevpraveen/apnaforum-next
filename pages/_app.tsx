import 'styles/mili.globals.css'
import 'styles/globals.css'
import 'styles/topics.globals.css'
import 'styles/TopicView.globals.css'
import type { AppProps } from 'next/app'
import Layout from "components/layout"
import "helpers/mixinGlobals"

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp

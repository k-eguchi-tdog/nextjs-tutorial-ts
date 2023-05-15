import Link from 'next/link'
import Head from 'next/head'  //追記
import Script from 'next/script'  //追記
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    /* Layout Component */
    <Layout>
      {/* Metadata */}
      <Head>
        <title>First Post</title>
      </Head>
      {/* Third-Party JavaScript */}
      {/*
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      */}
      {/* Navigate Between Pages */}
      <h1>First Post</h1>
      {/* Link Component */}
      <h2>
        <Link href="/">
          {/* aタグは入れない（入れるとエラーになる） */}
          Back to home
        </Link>
      </h2>
    </Layout>
  )
}
import Title from 'components/Title'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='page'>
      <Title>About</Title>
      <Head>
        <meta name="description" content="A forum site for leaners who is curious to connect technologies together to build amazing websites and software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>About Page</h2>

    </div>
  )
}

export default Home

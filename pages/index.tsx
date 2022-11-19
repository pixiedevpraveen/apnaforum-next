import type { NextPage } from 'next'
import Link from 'next/link'
import TopicCardList from '../components/TopicCardList'
import Title from '../components/Title'
import { TopicShort } from "../models/Topic";
import Forum from "../models/Forum";


type PropType = { topicData: { topics: TopicShort[] }, forumData: { forums: Forum[] } }

const Home: NextPage<PropType> = ({ topicData, forumData }) => {

  return (
    <div className='page'>
      <Title> Home </Title>

      <section className="container">
        <h2>{process.env.NEXT_PUBLIC_APP_NAME}</h2>
        <Link href='/about/'>
          <a>About</a>
        </Link>
        <br />
        <Link href='/topics/'>
          <a>Topics</a>
        </Link>
        <TopicCardList topics={topicData.topics} />

        <ul>
          {forumData.forums.map((forum: Forum) => (
            <li key={forum.name}>{forum.name} </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

export async function getStaticProps() {
  const topicRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/topics/?res_type=api`)
  const topicData = await topicRes.json()

  const forumRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/forums/?res_type=api`)
  const forumData = await forumRes.json()

  // Pass data data to the page via props
  return { props: { topicData, forumData }, revalidate: 10 }
}

export default Home

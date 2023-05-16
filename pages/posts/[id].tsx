import Head from 'next/head' // Polishing the Post Page

import Layout from '../../components/layout'
import Date from '../../components/date' // Polishing the Post Page
import utilStyles from '../../styles/utils.module.css' // Polishing the Post Page
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id) // add await on Render Markdown
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

{/* Render Markdown */}
export default function Post({ postData }: any) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {/* Polishing the Post Page */}
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
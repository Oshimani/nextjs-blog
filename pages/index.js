import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

// fetch data @ BUILD TIME
// use this function to load data for pre rendered pages
// only allowed in a page!
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// fetch data @ REQUEST TIME
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      {/* HTML head */}
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="font-semibold text-gray-600">
        <p>Hello human, I am Oshimani. I am a developer and like to ride my 🚲.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Blog  */}
      <section className="">
        <h2 className="text-2xl font-light w-full border-b-2 border-teal-500 my-4">Blog</h2>
        <ul className="">
          {/* repeater for blog posts */}
          {allPostsData.map(({ id, date, title }) => (
            <Link href="/posts/[id]" as={`/posts/${id}`}  key={id}>
              <li className="shadow hover:shadow-xl mb-4 rounded transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-teal-500 text-white rounded-t px-4 pt-2 pb-1">
                  {title} <span className="float-right">🔗</span>
                </div>

                {/* Meta info */}
                <div className="text-gray-500 font-semibold px-4 pb-8">
                  <div className="float-left">
                    <Date dateString={date} />
                  </div>
                  <div className="float-right">
                    {id}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout >
  )
}

import Head from 'next/head'

import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

// generate paths
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// fetch content
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <div className="shadow-lg">

            {/* Heading */}
            <div className="text-2xl font-light rounded-t px-4 py-1 text-center text-white bg-teal-500">
                {postData.title}
            </div>

            {/* Body */}
            <div className="px-6 pb-4">
                {/* Meta info */}
                <div className="text-gray-500 font-semibold pb-8">
                    <div className="float-left">
                        <Date dateString={postData.date} />
                    </div>
                    <div className="float-right">
                        {postData.id}
                    </div>
                </div>

                {/* Content */}
                <div className="">
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </div>
        </div>
    </Layout>
}

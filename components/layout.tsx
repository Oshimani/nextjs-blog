import Head from 'next/head'
import Link from 'next/link'

const name = 'Oshimani'
export const siteTitle = `Oshimani's Next.js Sample Website`

import React from 'react'

// Layout component
export default (props: { children, home?: boolean }) => {
  return (
    <div className="container max-w-xl px-0 py-4 mx-auto mt-12 mb-24">

      {/* HTML head */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={"flex flex-col items-center"}>

        {/* Is home page?  */}
        {props.home ? (
          <>
            <img
              src="/images/profile.png"
              className={`w-32 h-32 rounded shadow-lg mb-4`}
              alt={name}
            />
            <h1 className={`shadow-lg rounded text-white bg-teal-500 px-4 py-2 mb-4 font-bold text-4xl`}>{name}</h1>
          </>

          // Is not home page
        ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.png"
                    className={`w-32 h-32 rounded shadow-lg mb-4`}
                    alt={name}
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <h1 className={`shadow-lg rounded text-white bg-teal-500 px-4 py-2 mb-4 font-bold text-4xl`}>{name}</h1>
                </a>
              </Link>
            </>
          )}
      </header>

      {/* Pages will be injected here */}
      <main>{props.children}</main>

      {/* Footer adds back button if not on home page */}
      {!props.home && (
        <div className="mt-12">
          <Link href="/">
            <a>🏠 ← 🏃</a>
          </Link>
        </div>
      )}
    </div>
  )
}

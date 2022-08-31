import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '../components/layout/Carousel'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Deliverable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Deliverable</h1>
        <p className="mt-3 text-2xl">Roadmap-based accountability for StartUps and Investors</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/builders">
            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">for Builders &rarr;</h3>
              <p className="mt-4 text-xl">
                Create a profile and roadmap for your project and get connected to investors.
              </p>
            </div>
          </Link>

          <Link href="investors">
            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">for Investors &rarr;</h3>
              <p className="mt-4 text-xl">
                Create your Investor's Dashboard and add exciting new projects to your portfolio.
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">browse Projects &rarr;</h3>
              <p className="mt-4 text-xl">
                Explore the full collection of projects being powered by Deliverable.
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Carousel />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

import type {NextPage} from 'next';
import dynamic from 'next/dynamic'
import {Suspense} from 'react'

const DynamicHeader = dynamic(() => import('../components/Header'), {
  suspense: true,
})

const Home: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicHeader/>
    </Suspense>
  )
}

export default Home

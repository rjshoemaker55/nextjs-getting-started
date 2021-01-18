import Link from 'next/Link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Index = () => {
  const [dynamicPath, setDynamicPath] = useState('')
  const router = useRouter()

  const gotoPath = () => {
    router.push(`/posts/${dynamicPath}`)
  }
  return (
    <>
      <Link href='/blogprops'>
        <a>Blog - using getStaticProps</a>
      </Link>
      <p>Dynamic Path Sample</p>
      <input
        placeholder='Message (path)'
        onChange={(e) => setDynamicPath(e.target.value)}
      />
      <button type='submit' onClick={gotoPath}>
        Go
      </button>
      <Link href='/serverside'>
        <a>BTC Price - server side rendering</a>
      </Link>
    </>
  )
}

export default Index

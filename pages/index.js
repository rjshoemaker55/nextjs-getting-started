import Link from 'next/Link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
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
      <input
        placeholder='Message (path)'
        onChange={(e) => setDynamicPath(e.target.value)}
      />
      <button type='submit' onClick={gotoPath}>
        Go
      </button>
    </>
  )
}

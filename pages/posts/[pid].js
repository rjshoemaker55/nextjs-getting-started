import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <h1>Message: {pid}</h1>
}

export default Post

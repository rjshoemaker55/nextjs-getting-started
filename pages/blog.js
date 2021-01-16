const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;

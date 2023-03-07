import BlogCards from "../components/BlogCards/index";


// async function getPosts() {
//   const response = await fetch("https://api.agify.io?name=bella");
//   return response.json();
// }
export default async function Home() {
  // const { posts } = await getPosts();
  return (
    <div>
      {/* {posts.map((post) => { */}
        <BlogCards/>
      {/* })} */}
    </div>
  );
}

import Form from "@/components/layout/Form";
import Header from "@/components/layout/Header";
import PostFeed from "@/components/post/PostFeed";


export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  )
}
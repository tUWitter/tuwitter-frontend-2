import Form from "@/components/layout/Form";
import Header from "@/components/layout/Header";
import CommentFeed from "@/components/post/CommentFeed";
import PostItem from "@/components/post/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostView = () => {
    const router = useRouter();
    const { postId } = router.query;
    const {data : fetchedPost, isLoading } = usePost(postId as string);

    if (isLoading || !fetchedPost) {
        return (
            <div className="
            flex
            justify-center
            items-center
            h-full
            ">
                <ClipLoader color="lightBlue" size={80}/>
            </div>
        );
    }
    return (
        <>
        <Header label="Post" showBackArrow/>
        <PostItem data = {fetchedPost}/>
        <Form
            postId={postId as string}
            isComment
            placeholder="Write a comment..."
        />
        <CommentFeed comments={fetchedPost?.comments}/>
        </>
    );
};

export default PostView;
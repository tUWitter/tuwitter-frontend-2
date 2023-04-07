import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import usePostModal from "@/hooks/usePostModal";
import useLoading from "@/hooks/useLoading";
import Form from "../Form";

const PostModal = () => {
    const loginModal = useLoginModal();
    const postModal = usePostModal();
    const {isLoading} = useLoading();
    

    return (
        <Modal
        disabled={isLoading}
        isOpen={postModal.isOpen}
        title="Post"
        body={<Form placeholder="What's happening?"/>}
        onClose={postModal.onClose}
        />
    );


}

export default PostModal;
import { useRouter } from "next/router";
import { BiUserVoice } from "react-icons/bi";

const SidebarLogo = () =>{
    const router = useRouter();
    return (
        <div onClick={() => router.push("/")}
        className="
        rounded-full
        h-14
        2-14
        p-4
        flex
        items-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
        " >
            <BiUserVoice size={28} color="white" />

        </div>

        
    );
}

export default SidebarLogo;
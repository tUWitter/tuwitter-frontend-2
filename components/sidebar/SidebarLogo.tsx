import { useRouter } from "next/router";
import Image from "next/image";


const SidebarLogo = () =>{
    const router = useRouter();
    return (
        <div onClick={() => router.push("/")}
        className="
        rounded-full
        h-14
        w-14
        p-1
        flex
        items-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
        " >
            <Image 
            src='/images/logo_deep_blue_bg_round.png'
            width={50}
            onClick={() => router.push("/")}
            height={50}
            alt="logo" />

        </div>

        
    );
}

export default SidebarLogo;
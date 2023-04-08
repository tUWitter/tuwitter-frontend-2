import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
    isAnonymous?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder , isAnonymous}) => {
    const router = useRouter();

    const { data: fetchedUser } = useUser(userId);

    const onClick = useCallback((event: any) => {
        if (isAnonymous) {
            return;
        }
        event.stopPropagation();
        const url = `/users/${userId}`;

        router.push(url);
    }, [isAnonymous, router, userId]);

    let avatarImageUrl;
    if (isAnonymous) {
        avatarImageUrl = '/images/anonymous-avatar.png';
    } else{
        avatarImageUrl = fetchedUser?.profileImage || '/images/default-avatar.jpeg';
    }

    return (
        <div
            className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        ${isLarge ? 'h-32' : 'h-12'}
        ${isLarge ? 'w-32' : 'w-12'}
        rounded-full 
        hover:opacity-90 
        transition 
        cursor-pointer
        relative
      `}
        >
            <Image
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%'
                }}
                alt="Avatar"
                onClick={onClick}
                src={avatarImageUrl}
            />
        </div>
    );
}

export default Avatar;
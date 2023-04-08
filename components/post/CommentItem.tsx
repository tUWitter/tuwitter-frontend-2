import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';

import Avatar from '../user/Avatar';

interface CommentItemProps {
  data: Record<string, any>;
}

const CommentItem: React.FC<CommentItemProps> = ({ data = {} }) => {
  const router = useRouter();

  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();
    if (data.isAnonymous) {
      return;
    }

    router.push(`/users/${data.user.id}`)
  }, [data.isAnonymous, data.user.id, router]);

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])

  return (
    <div 
    className="
    border-b-[1px] 
    border-neutral-800
    p-5 
    cursor-pointer 
    hover:bg-neutral-900 
    transition
    ">
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} isAnonymous={data.isAnonymous}/>
        <div>
          <div className="flex flex-row items-center gap-2">
            <p 
              onClick={goToUser} 
              className={`${
                data.isAnonymous ? null : "cursor-pointer hover:underline"
              } text-white 
                            font-semibold `}>
               {data.isAnonymous? data.user.codename : data.user.name}
            </p>
            <span 
              onClick={goToUser} 
              className={`
                            ${data.isAnonymous
                              ? null
                              : "text-neutral-500 cursor-pointer hover:underline"
                            }
                            hidden
                            md:block
                            `}>
              {data.isAnonymous ? null : `@${data.user.username}`}
            </span>
            <span className="text-neutral-500 text-sm">
              {createdAt}
            </span>
            {data.isAnonymous && (<span className="hidden md:block text-neutral-500 text-sm">Anonymous Comment</span>)}
          </div>
          <div className="text-white mt-1">
            {data.body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem;
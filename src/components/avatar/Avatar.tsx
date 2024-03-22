import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'

export function AvatarProfile() {
    const { data } = useSession()
    return (
        <Avatar>
            <AvatarImage src={data?.user?.image!} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

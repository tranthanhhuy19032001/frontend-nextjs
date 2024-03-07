import Link from 'next/link'
import {
    InstagramIcon,
    LinkedinIcon,
    DiscordIcon,
    YoutubeIcon,
} from '@/components/icons/index'

export default function AsideFooter(params: any) {
    return (
        <div className="p-5 border border-solid w-full mt-6 mb-6 rounded-2xl dark:border-slate-800">
            <div className="grid grid-cols-2 gap-y-2 text-sm">
                <h3 className="col-span-2 font-medium text-base text-slate-700 dark:text-slate-200">
                    External links
                </h3>
                <Link href={'/feature-request'}>Feature requests</Link>
                <Link href={'/changealog'}>Changealog</Link>
                <Link href={'/techblog-apis'}>TechBlog APIS</Link>
                <Link href={'/podcast'}>Podcast</Link>
                <h3 className="col-span-2 mt-4 font-medium text-base text-slate-700 dark:text-slate-200">
                    Company
                </h3>
                <Link href={'/about'}>About</Link>
                <Link href={'/official-blog'}>Official Bog</Link>
                <Link href={'/career'}>Carrers</Link>
                <Link href={'/support'}>Support</Link>
                <h3 className="col-span-2 mt-4 font-medium text-base text-slate-700 dark:text-slate-200">
                    Connect with us
                </h3>
                <div className="col-span-2 flex gap-5">
                    <Link
                        target="_blank"
                        href={'/linkedin'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <InstagramIcon className="text-pink-500" />
                    </Link>
                    <Link
                        target="_blank"
                        href={'/instagram'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <LinkedinIcon className="text-blue-500" />
                    </Link>
                    <Link
                        target="_blank"
                        href={'https://www.youtube.com/'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <DiscordIcon className="text-purple-500" />
                    </Link>
                    <Link
                        target="_blank"
                        href={'https://www.youtube.com/'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <YoutubeIcon className="text-red-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

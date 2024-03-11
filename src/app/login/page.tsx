'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Link from 'next/link'

import Image from 'next/image'
import Logo from '../../../public/svg/logo.svg'
import { InstagramIcon, LinkedinIcon } from '@/components/icons/index'

import Button from '@/components/button/Button'

export default function LoginPage() {
    const { status } = useSession()

    const router = useRouter()

    if (status === 'loading') {
        return <div className="">Loading...</div>
    }

    if (status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <Head>
                <title>Login - TechBlog</title>
                <meta name="description" content="Login to TechBlog" />
            </Head>

            <div className="p-7 text-center w-1/4 border-2 rounded-xl">
                <Link
                    href="/"
                    className="font-bold text-3xl flex justify-center"
                >
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={30}
                        height={30}
                        className="w-9 h-auto"
                    />
                    <div className="max-[640px]:hidden md:block">
                        Tech<span className="text-blue-600">Blog</span>
                    </div>
                </Link>

                <p className="mt-20 text-gray-600 font-bold text-2xl">
                    Log in or sign up
                </p>

                <Button
                    className="mt-4 bg-blue-500 w-full text-white px-4 py-2 rounded-full"
                    onClick={() => signIn('google')}
                >
                    Continue with Google
                </Button>
                <div className="flex justify-center mt-4 gap-3">
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
                        href={'/instagram'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <LinkedinIcon className="text-blue-500" />
                    </Link>
                    <Link
                        target="_blank"
                        href={'/instagram'}
                        className="border border-slate-200 rounded-full p-3 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <LinkedinIcon className="text-blue-500" />
                    </Link>
                </div>

                <Button className="mt-4 bg-gray-800 text-white px-4 py-2 w-full rounded-full">
                    Sign up with email
                </Button>

                <p className="mt-4 text-sm text-gray-500">
                    By logging in or signing up using the options above, you
                    agree toTerms & Conditions and Privacy Policy
                </p>
            </div>
        </div>
    )
}

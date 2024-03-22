'use client'

import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { GoogleIcon, GithubIcon } from '@/components/icons/index'
import Logo from '../../../public/svg/logo.svg'
import Button from '@/components/button/Button'

export default function LoginPage() {
    const { status } = useSession()

    console.log('status:', status)

    const router = useRouter()

    // if (status === 'loading') {
    //     return <div className="">Loading...</div>
    // }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/')
        }
    }, [status, router])

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <Head>
                <title>Login - TechBlog</title>
                <meta name="description" content="Login to TechBlog" />
            </Head>

            <div className="p-7 text-center w-3/12 border-2 rounded-xl">
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
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Email"
                        className="border border-solid border-gray-300 px-4 py-2 rounded-xl w-full bg-gray-100 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mt-5">
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-solid border-gray-300 px-4 py-2 rounded-xl w-full bg-gray-100 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <Button className="mt-5 bg-blue-500 w-full text-white px-4 py-2 rounded-full font-semibold">
                    Sign in to your account
                </Button>
                <div className="flex items-center mt-5 opacity-60">
                    <div className="bg-gray-300 w-full h-0.5"></div>
                    <div className="mx-3">or</div>
                    <div className="bg-gray-300 w-full h-0.5"></div>
                </div>
                <div className="flex justify-between mt-5 gap-3">
                    <Button
                        onClick={() => signIn('google')}
                        leftIcon={<GoogleIcon />}
                        className="border border-solid p-3 rounded-xl font-semibold flex items-center hover:bg-gray-100"
                    >
                        Log in with Google
                    </Button>
                    <Button
                        leftIcon={<GithubIcon />}
                        className="border border-solid p-3 rounded-xl font-semibold flex items-center hover:bg-gray-100"
                    >
                        Log in with Github
                    </Button>
                </div>

                <div className="flex justify-start mt-5 text-sm">
                    <p>Don’t have an account yet? </p>
                    <Link
                        href={'/register'}
                        className="ml-1 text-blue-700 hover:underline"
                    >
                        Sign up here
                    </Link>
                </div>

                <p className="mt-5 text-sm text-gray-500">
                    By logging in or signing up using the options above, you
                    agree toTerms & Conditions and Privacy Policy
                </p>
            </div>
        </div>
    )
}

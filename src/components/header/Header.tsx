"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import {
    faCompass,
    faCircleQuestion as faCircleQuestionRegular,
} from '@fortawesome/free-regular-svg-icons'

import Search from '../search/Search'
import Logo from '../../../public/svg/logo.svg'
import Write from '../write/Write'
import ButtonNotification from '../notification/ButtonNotification'
import Menu from '../popper/menu/Menu'

import Button from '../button/Button'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const MORE_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCompass} />,
        title: 'Explore',
        to: '/explore',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestionRegular} />,
        title: 'Suppport',
        to: '/support',
    },
]
export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-16 py-2  bg-gray-100 dark:border-slate-200 dark:bg-slate-900">
            <Link href="/" className="font-bold text-3xl flex">
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
            <nav className="flex space-x-5 max-[640px]:hidden max-[800px]:hidden lg:block max-[1120px]:space-x-0">
                <Button
                    href="my-feed"
                    className="text-blue-600 font-semibold border-2 border-transparent py-2 px-4 rounded-3xl transition-all duration-300 hover:border-blue-600 max-[1200px]:px-1"
                >
                    My Feed
                </Button>
                <Button
                    href="/discussion"
                    className="text-blue-600 font-semibold border-2 border-transparent py-2 px-4 rounded-3xl transition-all duration-300 hover:border-blue-600 max-[1200px]:px-1"
                >
                    Disscussion
                </Button>

                <Menu
                    items={MORE_ITEMS}
                    onChange={() => {}}
                    className="z-60 mt-2 w-40"
                >
                    <span>
                        <Button
                            rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                            className="text-blue-600 font-semibold border-2 border-transparent py-2 px-4 rounded-3xl transition-all duration-300 hover:border-blue-600 max-[1200px]:px-1"
                        >
                            More
                        </Button>
                    </span>
                </Menu>
            </nav>

            <div className="flex gap-2 items-center">
                <Search />
                <Write>Write</Write>
                <ThemeToggle />
                <ButtonNotification countNofications="3" />
                <AuthLinks />
            </div>
        </header>
    )
}

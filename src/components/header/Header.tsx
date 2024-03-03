"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faCircleQuestion,
    faEarthAsia,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons'

import ThemeToggle from "../themeToggle/ThemeToggle";
import Search from "../search/Search";
import Logo from "../../../public/svg/logo.svg";
import Write from "../write/Write";
import ButtonNotification from "../notification/ButtonNotification";
import Menu from "../popper/menu/Menu";
import { AvatarProfile } from '../avatar/Avatar'
import Button from '../button/Button'

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]
export default function Header() {
    const currentUser = true

    // Handle logic
    const handleMenuChange = (menuItem: any) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <AvatarProfile />,
            title: 'Thanh Huy',
            to: '/@thanh-huy',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return (
        <header className="relative flex justify-between items-center px-16 py-2 border-y">
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
            <nav className="flex gap-3 max-[640px]:hidden max-[768px]:hidden lg:block">
                <Link href={`/my-feed`}>My Feed</Link>
                <Link href={`/my-feed`}>Discussion</Link>
                <Link href={`/my-feed`}>More</Link>
            </nav>
            <div className="flex gap-2 items-center">
                <Search />
                <Write>Write</Write>
                <ThemeToggle />
                <ButtonNotification countNofications="3" />
                <div>
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <div>
                                <Button className="flex items-center">
                                    <AvatarProfile />
                                </Button>
                            </div>
                        ) : (
                            <button className="more-btn">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

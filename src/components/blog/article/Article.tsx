'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { AvatarProfile } from '@/components/avatar/Avatar'
import Button from '@/components/button/Button'

export default function Article({ children }: any) {
    return (
        <article className="p-5 border border-solid w-full mt-6 rounded-2xl">
            <header>
                <Button
                    className="flex items-center text-start"
                    leftIcon={<AvatarProfile />}
                >
                    <div>
                        <p>Tran Thanh Huy</p>
                        <p>thanh.thanh.dev.blog</p>
                    </div>
                </Button>
            </header>
            <div className="flex flex-row">
                <div className="basis-2/3">
                    <h3 className="font-bold h-20 overflow-hidden overflow-ellipsis line-clamp-2">
                        Create Instagram-like Long Press and Draggable Carousel
                        Indicators in Jetpack Compose.
                    </h3>
                    <p className="h-12 overflow-hidden overflow-ellipsis line-clamp-2">
                        We must have used this UX in the Instagram mobile app,
                        where we can long press the carousel indicators section
                        and
                    </p>
                </div>
                <div className="basis-1/3">
                    <Image
                        src="/images/pic1.jpg"
                        alt=""
                        width={100}
                        height={1000}
                        className="w-auto h-full"
                    />
                </div>
            </div>
            <footer className="flex text-sm mt-3 justify-between">
                <div className="flex gap-3 ">
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faComment} />}
                        className=" hover:nderline"
                    >
                        Discuss
                    </Button>
                    <span>·</span>
                    <div>14 likes</div>
                    <div>206 reads</div>
                </div>
                <div>
                    <Tippy
                        content="Save for later!"
                        theme="dark"
                        className="mr-2"
                    >
                        <div>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={faBookmark} />}
                            ></Button>
                        </div>
                    </Tippy>
                </div>
            </footer>
        </article>
    )
}

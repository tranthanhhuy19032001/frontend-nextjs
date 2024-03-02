'use client'

import Tippy from '@tippyjs/react/headless'
import { useState } from 'react'
import PopperWrapper from '../PopperWrapper'
import MenuItem from './MenuItem'
import Header from './Header'

const defaultFn = () => {}

export default function Menu({
    children,
    items = [],
    onChange = defaultFn,
}: any) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item: any, index: any) => {
            const isParent = !!item.children

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    return (
        <Tippy
            arrow={true}
            interactive
            visible={true}
            delay={[0, 600]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div
                    className="border-2 rounded mt-3 shadow-md z-10"
                    tabIndex={-1}
                    {...attrs}
                >
                    <PopperWrapper className="">
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    )
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

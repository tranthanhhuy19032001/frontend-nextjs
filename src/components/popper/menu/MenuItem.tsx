import Button from '@/components/button/Button'
import React from 'react'

interface MenuItemProps {
    data: any
    className: string
    onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ data, className, onClick }) => {
    return (
        <Button
            href={data.to}
            className={`${className} block p-2 hover:bg-slate-700 hover:text-red-400 w-full text-left`}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    )
}

export default MenuItem

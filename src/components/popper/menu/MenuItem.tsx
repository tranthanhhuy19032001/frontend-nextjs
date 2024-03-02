import Button from '@/components/button/Button'
import React from 'react'

interface MenuItemProps {
    data: {
        icon: React.ReactNode // Assuming your icon is a React Node
        to: string
        title: string
        separate?: boolean
    }
    onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ data, onClick }) => {
    return (
        <Button
            href={data.to}
            className="block p-2 hover:bg-gray-200"
            leftIcon={data.icon}
        >
            {data.title}
        </Button>
    )
}

export default MenuItem

import { SVGProps } from 'react'

interface IconProps {
    width?: string
    height?: string
    className?: string
}

export const InstagramIcon = ({
    width = '20',
    height = '20',
    className,
}: IconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
        >
            <path
                fill="currentColor"
                d="M7.625 10a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0Z"
            ></path>
            <path
                fill="currentColor"
                d="M9.139 1.875h1.722c1.143 0 2.04 0 2.76.059.733.06 1.34.184 1.888.463a4.792 4.792 0 0 1 2.094 2.094c.28.549.403 1.155.463 1.888.059.72.059 1.617.059 2.76v1.722c0 1.143 0 2.04-.059 2.76-.06.733-.184 1.34-.463 1.888a4.792 4.792 0 0 1-2.094 2.094c-.549.28-1.155.403-1.888.463-.72.059-1.617.059-2.76.059H9.14c-1.143 0-2.04 0-2.76-.059-.733-.06-1.34-.184-1.888-.463a4.792 4.792 0 0 1-2.094-2.094c-.28-.549-.403-1.155-.463-1.888-.059-.72-.059-1.617-.059-2.76V9.14c0-1.143 0-2.04.059-2.76.06-.733.184-1.34.463-1.888a4.792 4.792 0 0 1 2.094-2.094c.549-.28 1.155-.403 1.888-.463.72-.059 1.617-.059 2.76-.059ZM14.125 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM10 6.375a3.625 3.625 0 1 0 0 7.25 3.625 3.625 0 0 0 0-7.25Z"
                fillRule="evenodd"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export const LinkedinIcon = ({
    width = '20',
    height = '20',
    className,
}: IconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
        >
            <path
                fill="currentColor"
                d="M1.875 5c0-1.726 1.4-3.125 3.125-3.125h10c1.726 0 3.125 1.4 3.125 3.125v10c0 1.726-1.4 3.125-3.125 3.125H5A3.125 3.125 0 0 1 1.875 15V5Zm4.792.625a.958.958 0 1 0 0 1.917.958.958 0 0 0 0-1.917Zm.625 3.542a.625.625 0 0 0-1.25 0v4.166a.625.625 0 1 0 1.25 0V9.167Zm3.333 4.166v-2.5a1.042 1.042 0 0 1 2.083 0v2.5a.625.625 0 1 0 1.25 0v-2.5a2.292 2.292 0 0 0-3.425-1.992.625.625 0 0 0-1.158.326v4.166a.625.625 0 1 0 1.25 0Z"
                fillRule="evenodd"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export const DiscordIcon = ({
    width = '20',
    height = '20',
    className,
}: IconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
        >
            <path
                fill="currentColor"
                d="M7.556 2.819a.52.52 0 0 1 .544.277l.293.57c.091-.01.196-.02.309-.03.382-.037.877-.074 1.295-.074.42 0 .916.037 1.299.073l.31.032.294-.571a.52.52 0 0 1 .544-.277c1.2.188 2.524.605 3.576 1.11a.52.52 0 0 1 .2.17 14.658 14.658 0 0 1 2.558 9.872.52.52 0 0 1-.205.363 14.155 14.155 0 0 1-4.404 2.207.521.521 0 0 1-.578-.234l-.577-.957a.34.34 0 0 1 .211-.503c.51-.13 1.014-.281 1.51-.445a.52.52 0 1 0-.354-.98c-1.409.466-2.89.825-4.381.825s-2.973-.36-4.382-.825a.52.52 0 1 0-.354.98c.497.164 1.001.316 1.512.445a.34.34 0 0 1 .21.504l-.577.956a.52.52 0 0 1-.578.235 14.157 14.157 0 0 1-4.404-2.207.52.52 0 0 1-.205-.364c-.394-3.87.786-7.35 2.557-9.872a.52.52 0 0 1 .201-.17 13.562 13.562 0 0 1 3.576-1.11ZM5.734 10c0 .926.676 1.68 1.498 1.68.835 0 1.498-.754 1.498-1.68.014-.92-.657-1.68-1.498-1.68-.835 0-1.498.754-1.498 1.68Zm7.038 1.68c-.822 0-1.498-.754-1.498-1.68 0-.926.663-1.68 1.498-1.68.841 0 1.511.76 1.498 1.68 0 .926-.657 1.68-1.498 1.68Z"
                fillRule="evenodd"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export const YoutubeIcon = ({
    width = '20',
    height = '20',
    className,
}: IconProps) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
        >
            <path
                fill="currentColor"
                d="M1.875 7.292a3.958 3.958 0 0 1 3.958-3.959h8.334a3.958 3.958 0 0 1 3.958 3.959v5.416a3.958 3.958 0 0 1-3.958 3.959H5.833a3.958 3.958 0 0 1-3.958-3.959V7.292Zm7.09.17a.417.417 0 0 0-.632.357v4.362c0 .324.354.524.631.357l3.635-2.18a.417.417 0 0 0 0-.715L8.964 7.462Z"
                fillRule="evenodd"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

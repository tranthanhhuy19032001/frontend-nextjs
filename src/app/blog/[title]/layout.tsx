import Header from '@/components/header/Header'

export default function BlogDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="mb-20">
                <Header />
            </div>
            <div className="container flex justify-center max-w-5xl bg-red-300">
                {children}
            </div>
        </section>
    )
}

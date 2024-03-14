import TrendingArticle from '@/components/blog/trendingArticle/TrendingArticle'

export default function Aside() {
    return (
        <aside className="w-2/5 ">
            <TrendingArticle />
            <Bookmark />
            <AsideFooter />
        </aside>
    )
}

import Article from '../blog/article/Article'
import Aside from './aside/Aside'
import MainBody from './mainBody/MainBody'

export default function Body() {
    return (
        <main className="container max-w-5xl flex justify-between gap-4 mt-14">
            <MainBody>
                <Article />
                <Article />
                <Article />
            </MainBody>
            <Aside />
        </main>
    )
}

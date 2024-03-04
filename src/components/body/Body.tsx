import Article from '../blog/article/Article'
import Aside from './aside/Aside'
import MainBody from './mainBody/MainBody'

export default function Body() {
    return (
        <div className="container max-w-5xl flex justify-between">
            <MainBody>
                <Article />
                <Article />
                <Article />
            </MainBody>
            <Aside>
                <div>Trending articles</div>
                <div>Bookmars</div>
                <div>External Link (footer)</div>
            </Aside>
        </div>
    )
}

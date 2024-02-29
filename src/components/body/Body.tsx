import Aside from "./aside/Aside";
import MainBody from "./mainBody/MainBody";

export default function Body() {
  return (
    <div className="container max-w-5xl flex justify-between">
      <MainBody>
        <div>Category</div>
        <div>Blog</div>
        <div>Blog</div>
        <div>Recommend Blogs for you</div>
        <div>Blog</div>
        <div>Blog</div>
        <div>Recommend Tags for you</div>
      </MainBody>
      <Aside>
        <div>Trending articles</div>
        <div>Bookmars</div>
        <div>External Link (footer)</div>
      </Aside>
    </div>
  );
}

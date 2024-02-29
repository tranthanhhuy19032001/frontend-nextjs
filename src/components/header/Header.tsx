import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Search from "../search/Search";

export default function Header() {
  return (
    <header className="w-full relative flex justify-between items-center px-8 py-5 border-y">
      <Link href="/" className="font-bold text-3xl">
        Tech<span className="text-blue-600">Blog</span>
      </Link>
      <nav className="flex gap-2">
        <Link href={`/my-feed`}>My Feed</Link>
        <Link href={`/about`}>About</Link>
      </nav>
      <div className="flex gap-2 items-center">
        <Search />
        <div>Write</div>
        <ThemeToggle />
        <div>Notification</div>
        <div>Account</div>
      </div>
    </header>
  );
}

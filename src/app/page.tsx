import Body from "@/components/body/Body";

export default function Home() {
  const isUserPage: boolean = true;
  return (
    <div>
      <main className="flex justify-center">{isUserPage ? <Body /> : ""}</main>
    </div>
  );
}

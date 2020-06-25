import Link from "next/link";
export default function About(): JSX.Element {
  return (
    <>
      Welcome to the about page. Go to the{" "}
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      page.
    </>
  );
}

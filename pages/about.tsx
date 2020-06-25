import Link from 'next/link';
export default function About() {
  return (
    <>
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </>
  );
}

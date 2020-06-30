import { useRouter } from "next/router";
import Link from "next/link";
import { Container } from "semantic-ui-react";

const Header = (): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <header>
      <Container className="ui secondary menu">
        <Link href="/">
          <a className={pathname === "/" ? "item active" : "item"}>Home</a>
        </Link>
        <Link href="/about">
          <a className={pathname === "/about" ? "item active" : "item"}>
            About
          </a>
        </Link>
        <div className="right menu">
          <a
            className="item"
            href="https://twitter.com/new_primeAnime"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/images/amazon_new_anime.jpg" />
          </a>
        </div>
      </Container>

      <style jsx>{`
        img {
          border-radius: 50%;
        }
      `}</style>
    </header>
  );
};

export default Header;

import { Container } from "semantic-ui-react";

export default function About(): JSX.Element {
  return (
    <Container text>
      <p>
        <a
          href="https://twitter.com/new_primeAnime"
          target="_blank"
          rel="noreferrer noopener"
        >
          こちら
        </a>
        で行っているデータを纏めたサイトです。
        更新時間は間違っていることが多々あるので、目安程度に閲覧ください。
      </p>
    </Container>
  );
}

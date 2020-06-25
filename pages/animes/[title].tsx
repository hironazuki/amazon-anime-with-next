import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimeData from '../../components/AnimeData';

const Title = () => {
  const router = useRouter();
  const { title } = router.query;
  if (typeof title === 'string') {
    return (
      <>
        <AnimeData title={title} />
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        page.
      </>
    );
  }
  return null;
};

export default Title;

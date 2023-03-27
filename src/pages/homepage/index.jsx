import { PageLayout } from '../../layouts/PageLayout';
import { WelcomeMessage } from './WelcomeMessage';
import { Searchbar } from './Searchbar';

const Homepage = () => {
  return (
    <PageLayout>
      <WelcomeMessage />
      <Searchbar />
    </PageLayout>
  );
};

export default Homepage;

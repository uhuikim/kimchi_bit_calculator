import Layout from 'common/Layout';
import { Global } from '@emotion/react';
import globalStyles from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <Layout />
      </QueryClientProvider>
    </>
  );
};

export default App;

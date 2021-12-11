import Layout from 'common/Layout';
import { Global } from '@emotion/react';
import globalStyles from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createStore } from 'redux';
import rootReducer from 'ducks';
import { Provider } from 'react-redux';

const App = () => {
  const queryClient = new QueryClient();
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <Layout />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

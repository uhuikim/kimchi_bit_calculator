import Layout from 'common/Layout';
import { Global } from '@emotion/react';
import globalStyles from './styles/global';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Layout />
  </>
);

export default App;

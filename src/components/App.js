import React from 'react';

import Layout from '../containers/Layout';
import Routing from '../containers/Routing';
import AlertCounter from './AlertCounter';

const App = () => (
  <Layout>
    <Routing />
    <AlertCounter />
  </Layout>
);

export default App;

import React from 'react';
import './App.css';
import { Layout } from './components/layout/layout';
import { Main } from './views/main/main';

function App() {
  return (
      <Layout>
        <Main />
      </Layout>
  );
}

export default App;

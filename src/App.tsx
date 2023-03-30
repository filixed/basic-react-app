import React from 'react';
import './App.css';
import { Layout } from './components/layout/layout';
import { Main } from './views/main/main';

function App() {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;

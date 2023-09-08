import { useEffect } from 'react';
import Router from './routes';
import { Theme } from './styles/global';
import { data } from './utils/data';

function App() {
  useEffect(() => {
    document.title = data.name;
  }, []);

  return (
    <>
      <Router />
      <Theme />
    </>
  );
}

export default App;

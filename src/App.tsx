import React from 'react';
import { ContextHOC } from './context'
import List from './components/List/List'
import Filter from './components/Filter/Filter'
import './App.css';

type Prop = {
  getData: () => void
}

function App(props: Prop) {

  React.useEffect(() => {
    props.getData();
  }, [])

  return (
    <div className="App">
      <header>Demo App</header>
      <div className="body-container">
        {ContextHOC(Filter)}
        {ContextHOC(List)}
      </div>
    </div>
  );
}

export default App;

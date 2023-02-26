import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './Data';

const App = () => {

  const cards = Data.map(item => {
    return(
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
};

export default App;

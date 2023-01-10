import React from 'react';
import FoldableCard from './FoldableCard';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <div className='cards'>
        <FoldableCard title={"Titre 1"} children={"Contenu 1"}/>
        <FoldableCard title={"Titre 2"} children={"Contenu 2"}/>
        <FoldableCard title={"Titre 3"} children={"Contenu 3"}/>
        <FoldableCard title={"Titre 4"} children={"Contenu 4"}/>
      </div>
    </div>
  );
}

export default App;
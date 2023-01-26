import React from 'react';
import FoldableCard from './FoldableCard';
import Card from './Card'
import Cards from './Cards';

function App() {
  const clickHandler = () => {
    console.log("Carte cliquée !");
    }
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <Cards/>
        <Card title={"Titre 1"} children={"Contenu 1"}/>
        <Card title={"Titre 2"} children={"Contenu 2"}/>
        <Card title={"Titre 3"} children={"Contenu 3"} onClick={clickHandler}/>
        <FoldableCard title={"Titre 4"} children={"Contenu 4"}/>
    </div>
  );
}

export default App;
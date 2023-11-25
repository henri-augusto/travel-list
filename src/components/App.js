import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
// import FlashCards from './flashCards';
// import Accordion from './challenge/accordion';
// import TipCalculator from './challenge/tipCalculator';

function App() {
  // WE LIFT UP THIS STATE, BECAUSE THIS STATE WAS PLACED IN A CHILD COMPONENT
  // OF THIS 'APP' COMPONENT (PARENT), BUT WE NEED TO RENDER THIS IN ANOTHER COMPONENTS OF THIS APP
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // WE DO THIS IN THAT WAY BECAUSE REACT NOT ALLOW US TO MUTATE THE ARRAY
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onDeleteAll={handleDeleteAll}
        />
        <Stats items={items} />
        {/* <FlashCards /> */}
        {/* <Accordion /> */}
        {/* <TipCalculator /> */}
      </div>
    </>
  );
}

export default App;

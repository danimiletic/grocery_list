import React, { Component, } from 'react';
import ItemList from './Components/Items/ItemList';
import ItemForm from './Components/Items/ItemForm';


class App extends Component {
  state = {
    items: [
      { id: 1, name: "Oranges", price: 1.50, purchased: false, },
      { id: 2, name: "Oat Milk", price: 3.50, purchased: false, },
      { id: 3, name: "Bread", price: 2.00, purchased: true, },
    ]
  };

  render() {
    const { items } = this.state
    return (
      <>
        <h1>Grocery List</h1>
        <ItemForm /> 
        <ItemList items={items} listName="To buy" />
      </>
    )
  }
}

export default App;
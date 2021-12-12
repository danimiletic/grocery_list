import React, { Component, } from 'react';
import ItemList from './Components/Items/ItemList';
import ItemForm from './Components/Items/ItemForm';

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Oranges", price: 1.50, purchased: true, },
      { id: 2, name: "Oat Milk", price: 3.50, purchased: false,  },
      { id: 3, name: "Bread", price: 2.00, purchased: false, },
    ]
  };

    getUniqId = () => {

      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
  
  addItem = (incomingItem) => {
    const { items } = this.state
    const newItem = { id: this.getUniqId(), ...incomingItem } 
    this.setState({ items: [...items, newItem]})
  }

  handleClick = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            purchased: !item.purchased
          }
        }
        return item
      })
    })
  }


 render() {
  const { items } = this.state
  return (
  <>
   <h1>Grocery List</h1>
   <ItemForm addItem={this.addItem}/>
   <ItemList items={items} listName="To Buy" itemClick={this.handleClick} /> 
   </>
  )
 }
}

export default App;
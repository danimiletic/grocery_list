import { Component } from 'react';

class Item extends Component {
  render() {
    const { id, name, price, purchased, itemClick } = this.props
    return (
      <li 
      style={ purchased ? {...styles.item, ...styles.purchased} : styles.item } 
      onClick={ () => itemClick(id) }>
        <h3>{name}</h3>
        <h3>${price}</h3>
      </li>
    )
  }
}

const styles = {
  item: { cursor: 'pointer' },
  purchased: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Item;
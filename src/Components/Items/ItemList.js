import Item from './Item';
const ItemList = ({ items, listName, itemClick }) => {
return (
  <>
  <h2>{listName} List</h2>

  <ul>
    <li>
  {
    items.map ( item =>
      <Item key={item.id} {...item} itemClick={itemClick} />
      )
  }
  </li>
  </ul>
</>
)
}


export default ItemList;
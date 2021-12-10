import Item from './Item';

const ItemList = ({ items, listName }) => {
  return (
    <>
    <h1>{listName} List</h1>
  
    <ul>
    {
      items.map ( items =>
        <Item {...items}/>
        )
    }
    </ul>
  </>
  )
  }
  
  
  export default ItemList;
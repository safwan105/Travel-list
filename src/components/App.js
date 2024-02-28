import {useState} from 'react'
import Header from './header';
import { Form } from './Form';
import { PackList } from './PackList';
import { Footer } from './Footer';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description:"Charger", quantity:1, packed: true},
  { id: 4, description:"Camera", quantity:1, packed: false},
  { id: 5, description:"Soap", quantity:5, packed: true}
];

export default function App() {

  const [items,setItems] =useState([])

  function handleAddItems(item){
    setItems((items)=>[...items,item])
    
  }

  function handleDeleteItems(id){
    setItems((items)=>items.filter((item)=>item.id !==id))
  }

  function handleToggleItem(id){
    
    setItems((items) =>
      items.map((item) => 
         item.id === id ? { ...item, packed: !item.packed }
         : item
      )
    )
  }

  function handleClearList(){
    const confirmed = window.confirm("Are you sute you want to clear the list ?")
    if(confirmed) setItems([])
  }

  return(
    <div className="app">
      <Header/>
      <Form onAddItems={handleAddItems}/>
      <PackList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Footer items={items} />
    </div>
  )
}






import Cart from "./components/cart.jsx";
import Navi from "./components/navbar.jsx";
import {useState} from 'react';
import "./index.css"
const items = [
  {PhoneURL : "data:image/webp;base64,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",
  mobile_name : "Mobile_1",
  rate : "$500",
  insael : true,
  id : 1},

  {PhoneURL : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwRONciMuIFQ3BLSm_g8-gaMOWZJs8xetMlM76kQ5Q7fRoiksouV65LJE19migP01KxMwpuY3hjM2fq1nBaL-cdmDwe4TIVmGogGLQJ1RZDYaIX8lny50-rw",
  mobile_name : "Mobile_2",
  rate : "$900",
  insael : true,
  id : 2},

  {PhoneURL : "https://www.91-img.com/pictures/156675-v3-vivo-v29e-mobile-phone-large-1.jpg?w=0&h=901&q=80&c=1",
  mobile_name : "Mobile_3",
  rate : "$400",
  insael : false,
  id : 3},

  {PhoneURL : "https://www.91-img.com/pictures/156675-v3-vivo-v29e-mobile-phone-large-1.jpg?w=0&h=901&q=80&c=1",
  mobile_name : "Mobile_4",
  rate : "$1200",
  insael : true,
  id : 4}, 

  {PhoneURL : "https://www.91-img.com/pictures/156675-v3-vivo-v29e-mobile-phone-large-1.jpg?w=0&h=901&q=80&c=1",
  mobile_name : "Mobile_4",
  rate : "$8000",
  insael : true,
  id : 5},

  {PhoneURL : "https://www.91-img.com/pictures/156675-v3-vivo-v29e-mobile-phone-large-1.jpg?w=0&h=901&q=80&c=1",
  mobile_name : "Mobile_4",
  rate : "$1200",
  insael : true,
  id : 6}
]
// const items_selected = 0
function App() {
  // eslint-disable-next-line no-undef
  const [items_selected, setItemsSelected] = useState(0);

  const handleAddToCart = () => {
    setItemsSelected(items_selected + 1);
    console.log(items_selected)
  };

  const handleRemoveFromCart = () => {
    if (items_selected > 0) {
      setItemsSelected(items_selected - 1);
    }
  };

  return (
    <>
    <Navi
    items = {items_selected}/>
    <br />
    <div className='container'>
    {
      items.map((first_val)=>
        <Cart
    imgURL={first_val.PhoneURL}
    product_name={first_val.mobile_name}
    price = {first_val.rate}
    insale = {first_val.insael}
    key = {first_val.id}
    onAddToCart  = {handleAddToCart}
    onRemoveFromCart = {handleRemoveFromCart}
    />
      
      )

  }
   </div>
   </>
  )
}

export default App

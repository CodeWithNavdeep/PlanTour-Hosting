
import React , {useState} from 'react';
import './App.css';
import Product from './components/Product';
import Agra from './assets/Agra.jpeg'
import Jaipur from './assets/Jaipur.jpeg'
import Goa from './assets/Goa.jpeg'
import Varanasi from './assets/Varanasi.jpeg'
import Jaisalmer from './assets/Jaisalmer.jpeg'
import Darjeeling from './assets/Darjeeling.jpeg'
function App() {
  const values = [
    {
      img :`${Agra}`,
      price: "35,758",
      place : "Agra",
      desc : "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri."
    },
    {
      img :`${Jaipur}`,
      price: "82,560",
      place : "Jaipur",
      desc : `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`
    },
    {
      img :`${Goa}`,
      price: "29,695",
      place : "Goa",
      desc : `Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.`
    },
    {
      img :`${Varanasi}`,
      price: "31,095",
      place : "Varanasi",
      desc : `Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.`
    },
    {
      img :`${Darjeeling}`,
      price: "78,595",
      place : "Darjeeling",
      desc : "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!"
    },
    {
      img : `${Jaisalmer}`,
      price: "68,595",
      place : "Jaisalmer",
      desc : "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts."
    }
  ]
  const [show,setShow] = useState("hidden");
  const [items,setItems] =  useState(values);
  function deleteCard(val){
    const newArray = [...items]; 
    newArray.splice(val, 1); 
    setItems(newArray); 
    console.log(newArray);
    if(newArray.length===0){
    setShow("visible");
    }
  }
  function refreshValueHandler(){
    setShow("hidden");
    setItems(values);
  }
  return (
    <div className="App">
      <div className="App-heading-div">
      <h2 className="App-heading">Plan tour with Navdeep</h2>
      </div>
      <div className='App-product'>
      <Product items = {items} deleteCard = {deleteCard}></Product>
      <div className={`App-empty ${show}`}>
        <div className='App-empty-desc'>Items are empty</div>
        <button className='App-empty-btn' onClick = {refreshValueHandler}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;


import { Suspense } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import Cards from './Component/Card/Cards';
import Navber from './Component/Navber/Navber'
import Text from './Component/Banner/Text'
import Title from './Component/Banner/Title';

const feacthCard = async() =>{
    const res = await fetch ("/Data.json");
    return res.json()
}


function App() {

const  cardPromice = feacthCard()
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Text></Text>
      <Title></Title>
       <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <Cards cardPromice ={cardPromice} ></Cards>
       </Suspense>
    </div>
      
      

      
      
    
  )
}

export default App

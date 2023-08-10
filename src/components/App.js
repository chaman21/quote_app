
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [quote, setQuote]=useState(null)
  const getData= async()=>{
    const res=await fetch("https://api.quotable.io/random")
    const data=await res.json()
    setQuote(data)
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <Card quote={quote} getData={getData} />
    </>

  );
}

export default App;

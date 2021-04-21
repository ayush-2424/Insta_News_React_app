import './App.css';
import {useEffect, useState} from "react";
import Navinsshorts from './components/navinshorts.js';
import Newscontent from './components/Newscontent/Newscontent';
import axios from 'axios';
import apikey from './data/config';
import category from './data/category';
import categories from './data/category';
import Footer from "./components/Footer/Footer.js";

function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults]=useState();
  const [loadmore, setloadmore]=useState(20);
  
  //console.log(process.env);

  const newsApi= async() =>{
    try{
        
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const proxyurl="https://cors-anywhere.herokuapp.com/";
        const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
        //console.log(news.data);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }
    
   
    catch (error){
      console.log(error);
    }
  }

  console.log(newsArray);

  useEffect(() =>{
  newsApi();
   // eslint-disable-next-line
  },[newsResults,category,loadmore]);

  return (
    <div className="App">
     <Navinsshorts setCategory={setCategory}/>
     
     <Newscontent 
       setloadmore={setloadmore}
       loadmore={loadmore}
     newsArray={newsArray} newsResults={newsResults}>
       
     </Newscontent>
     <Footer/>
    </div>
  );
}

export default App;

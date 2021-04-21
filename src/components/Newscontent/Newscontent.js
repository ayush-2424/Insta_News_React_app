import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './Newscontent.css'

/**
* @author
* @function Newscontent
**/


const Newscontent = ({newsArray,newsResults, loadmore, setloadmore}) => {
  return(
   <Container>
   <div className="content">
   <div className="downloadMessage">
   <span>For the best experience use inshorts app on your smartphone (Comming Soon)</span>
   </div>

   {newsArray.map((newsItem) => (
    
    <NewsCard newsItem={newsItem} key={newsItem.title} />
    ))}
  
    
    
    {loadmore<=newsResults && (
      <>
      <center> <button className="loadmore" onClick={()=> setloadmore(loadmore+20)}>Loadmore...</button></center>
      </>
    )}

    <hr></hr>
    
   </div>

   </Container>
   )

 }

export default Newscontent;
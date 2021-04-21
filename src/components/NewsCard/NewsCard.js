import { HourglassEmpty } from '@material-ui/icons';
import React from 'react'
import './NewsCard.css';


/**
* @author
* @function NewsCard
**/

const NewsCard = ({newsItem}) => {
    //console.log(newsItem);


const fulldate=new Date(newsItem.publishedAt);
var date=fulldate.toString().split(" ");
const hour=parseInt(date[4].substring(0,2));

const time= hour>12?true:false;

  return(
    
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://dummyimage.com/300.png/09f/fff"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
        <span className="title">{newsItem.title}</span>
        </div>
        <span className="author">
          <a href={newsItem.url} target="_blank">
            <b>short </b>
            </a>
            <span className="muted">  
            {" "}
            by {newsItem.author?newsItem.author:"unknown source   "}
            {"   "} 
            {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          
        </span>

        <div className='lowerNewsTest'>
          <div className="description">{newsItem.description}
          {"  "}
          <span className="readmore">
            read more at (click here..) {" "}
            <a href={newsItem.url} target="_blank">
              <b className="p1">{newsItem.source.name}</b>
            </a> 
          </span>
          </div>
        </div>
      </div>
    </div>
   );

 }

export default NewsCard
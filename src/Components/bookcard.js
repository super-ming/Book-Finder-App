import React, { useContext, useEffect } from 'react';
import { Context } from './context';

import './bookcard.scss';

const BookCard = ({books}) => {
  const { data, isLoading } = useContext(Context);
  console.log(data);

  return (
    <div className='book-cards'>
    { isLoading ? (<div>Loading ...</div>) : (
      <ul>
        {Object.keys(books).length > 0 && 
          books.items.map((item) => (
            <li key={item.id}>
              <div className='book-card'>
                <img src={`${item.volumeInfo.imageLinks.smallThumbnail}`} alt={`${item.volumeInfo.title}`}/>
                <div>{`Title: ${item.volumeInfo.title}`}</div>
                <div>{`Author: ${item.volumeInfo.authors                                                                                                                                                                                                                }`}</div>
                <div>{ `Publisher: ${item.volumeInfo.publisher}`}</div>
                <a href={`${item.volumeInfo.publisher}`}>More Info</a>
              </div>
            </li>
          ))
          }
        </ul>                
      )}
    </div>
)};

export default BookCard;
                            

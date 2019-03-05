import { createContext } from 'react';

export const Context = createContext({
    key: 'AIzaSyCxeE_F8Evvzj21h51vdXtYPZvcIsTvAn0',
    url: 'https://www.googleapis.com/books/v1/volumes',
    startIndex: 0,
    maxResults: 10,
    query: '',
    isLoading: false
});
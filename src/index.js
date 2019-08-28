import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData =[
    {message: 'hi how are u?', id : 0, likesCount: 12},
    {message: 'hi, i cool, are u?', id : 1, likesCount: 7},
    {message: 'me 2', id : 2, likesCount: 25}
]

let DialogsData =[
    {name: 'Kostya' , id : 0},
    {name: 'Dima', id : 1},
    {name: 'Igor', id : 2},
    {name: 'Sergey', id : 3},
    {name: 'Pasha', id : 4},
    {name: 'Jenya', id : 5}
]

let MessagesData =[
    {message: 'hi how are u?', id : 0},
    {message: 'i good, are u?', id : 1},
    {message: 'me 2', id : 2},
    {message: 'me 2', id : 3},
    {message: 'me 2', id : 4}
]

ReactDOM.render(<App postData={postData} DialogsData={DialogsData} MessagesData={MessagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

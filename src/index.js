import React from 'react'
import  ReactDOM  from 'react-dom'
const date= new Date();
let day= date.getDate()
let month=date.getMonth()+1
let year= date.getFullYear()
let hours= date.getHours()
let mintues=date.getMinutes()
let seconds=date.getSeconds()

ReactDOM.render(
        <>
           <h1>My name is azeem </h1> 
           <p>{`Today date is ${day}-${month}-${year}`}</p>    
           <p>{`Now time is ${hours}:${mintues}:${seconds} `}</p>    
        </>,
        document.getElementById('root')
)
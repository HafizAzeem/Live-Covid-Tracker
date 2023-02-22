import React from "react";
import ReactDOM from "react-dom";

let currentDate= new Date(2022,2,22,15);

  currentDate= currentDate.getHours();
  let greetings=''
  const cssStyle= {

  }
  if(currentDate>= 1 && currentDate< 12){
        greetings= 'Good Morning'
        cssStyle.color='green'
  }else if(currentDate>=12 && currentDate<16){
        greetings= 'Good After Noon'
        cssStyle.color='orange'
  }else{
        greetings= "Good Night"
        cssStyle.color='black'
  }
ReactDOM.render(
        <>
           <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
        </>,
        document.getElementById('root')
);
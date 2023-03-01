import React from "react";
import ReactDOM  from "react-dom";
import {sum,sub, mult, dev} from "./components/Sum";
ReactDOM.render(
        <>
           <ul>
               <li>Some Of tow Number is :{sum(2,20)} </li>
               <li>Sub Of tow Number is : {sub(100,30)} </li>
               <li>Divi Of tow Number is : {mult(50,30)}</li>
               <li>Multi Of tow Number is :{dev(90,7)} </li>
           </ul>
        </>,
        document.getElementById('root')
);
import React from "react";
import ReactDOM from "react-dom"
import './index.css'
const heading= {
         fontSize:'25px',
         color:'blue',
}
ReactDOM.render(
        <>
                <h1 style={heading}>Azeem</h1>
                <h1 style={{ textTransform:"uppercase" }}> Azeem 2</h1>
                <img src="https://picsum.photos/200/300" alt="Rnadom Image" />
        </>,
        document.getElementById('root')
)
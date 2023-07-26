import React from "react";
import {Link} from "react-router-dom";
import BanerImagine from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home(){
    return(
        <div className="home" style={{ backgroundImage:`url(${BanerImagine})` }}>
            <div className="headerContainer">
                <h1>Maks`s Pizzeria</h1>
                <p>TEASTY PIZZA FOR EVERYONE</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
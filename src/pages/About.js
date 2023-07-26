import React from "react";
import BanerImagine from "../assets/pizza.jpeg";
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About(){
    return(
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage:`url(${MultiplePizzas })` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Welcome to Maks's Pizzeria, where imagination meets mouthwatering flavors! Step into a world of pizza magic like no other. Maks's Pizzeria is not your ordinary pizza joint; it's an extraordinary culinary experience that combines creativity, passion, and the finest ingredients to delight your taste buds.

                    As you approach the pizzeria, you'll be captivated by its whimsical exterior. The building facade features colorful murals of animated pizza slices, dancing toppings, and joyful chefs. The entrance is adorned with a large wooden door, resembling a giant pizza oven with intricately carved details. As you push it open, you're greeted with the inviting aroma of freshly baked pizza crusts and a symphony of laughter and chatter from happy patrons.

                   </p>
            </div>
        </div>
    )
}

export default About
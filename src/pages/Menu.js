import React from "react";
import {MenuList} from "../helpers/MenuList";
import MenuItems from '../components/MenuItems'
import '../styles/Menu.css'

function Menu (){
    return(
        <div className="menu">
            <h1 className="menuTitle">Our Memu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key)=>{
                    return <MenuItems key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
                })}
            </div>
        </div>
    )
}
export default Menu
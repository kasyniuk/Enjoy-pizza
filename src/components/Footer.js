import React from "react";
import {Pets} from "@mui/icons-material";
import {AndroidOutlined} from "@mui/icons-material";
import {SupportOutlined} from "@mui/icons-material";
import {AllInboxOutlined} from "@mui/icons-material";
import '../styles/Footer.css';


function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
                <Pets/>
                <AndroidOutlined/>
                <SupportOutlined/>
                <AllInboxOutlined/>
            </div>
            <p>©Enjoy your meal!</p>
        </div>
    )
}

export default Footer
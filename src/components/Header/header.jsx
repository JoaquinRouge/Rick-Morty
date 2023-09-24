import { useState } from "react";
import {Link} from 'react-router-dom'
import "./header.css"

function Header() {  

    return ( 
        <header>
            <Link to="/"><p>Rick & Morty</p></Link>
            <div className="buttonshdr">
                <Link to="/Characters"><button id="chr">Characters</button></Link>
                <Link to="/Contact"><button id="ctc">Contact</button></Link> 
            </div>
        </header>    
    );  

    
        
    
}

export default Header;

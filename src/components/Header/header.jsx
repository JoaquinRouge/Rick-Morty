import {Link} from 'react-router-dom'
import "./header.css"

function Header({ubicacion}) {  

    return ( 
        <header>
            <Link to="/"><p>Rick & Morty</p></Link>
            <div className="buttonshdr">
                <Link to="/Characters" id="chr" className={ubicacion === 'Characters' ? 'active' : ''}>Characters</Link>
                <Link to="/Contact" id="ctc" className={ubicacion === 'Contact' ? 'active' : ''} >Contact</Link> 
            </div>
        </header>    
    );  

    
        
    
}

export default Header;

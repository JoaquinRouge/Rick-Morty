import './infocards.css'

function InfoCards({status,specie,origin,gender,setShow}) {
    return ( 
        <div className='InfoCards-container'>
            <div className="InfoCards-li">
                <ul className="list-group">
                    <li className="list-group-item one">
                    <b>Character status:</b>
                    <p className="data-class">{status}</p>
                    </li>
                    <li className="list-group-item two">
                    <b>Specie:</b> <br/>
                    <p className="data-class">{specie}</p>
                    </li>
                    <li className="list-group-item three">
                    <b>Origin:</b> <br/>
                    <p className="data-class">{origin}</p>
                    </li>
                    <li className="list-group-item four">
                    <b>Gender:</b> <br/>
                    <p className="data-class">{gender}</p>
                    </li>
                </ul> 
            </div>
            <div className="InfoCards-button">
                <button id='InfoCards-button' onClick={()=>(setShow(false))}>
                <i class="bi bi-x-lg"></i>    
                </button>        
            </div>
        </div>
     );
}

export default InfoCards;
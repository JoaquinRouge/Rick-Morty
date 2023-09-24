import './cards.css'
import Header from '../Header/header';
import InfoCards from '../InfoCards/infocards';
import  {useState} from 'react'

function Cards({data}) {
        const [Show,setShow]= useState(false)
        const mostrarLista = ()=>{
            setShow(true)
        }


    return ( 
        <section className='Cards'>
            <div id='CardContainer' className='CardContainer'>
                <div className="card">
                    <img src={data.image} alt="imagen-personaje" />
                    <h3 id='h3-card'>{data.name}</h3>
                    <div className="button-card">
                        <button className={Show?'d-none':'d-block'} id='btn-card' onClick={()=> setShow(true)}>Know More...</button>  
                    </div>
                </div>
                <div className="infocards">
                     {Show === true?<InfoCards status={data.status} specie={data.species} origin={data.origin.name} gender={data.gender} setShow={setShow}/>:''}
                </div>
            </div>   
        </section>

     );
}

export default Cards;
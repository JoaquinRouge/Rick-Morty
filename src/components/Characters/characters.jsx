import './characters.css'
import Header from '../Header/header';
import Cards from '../Cards/cards';
import { useState,useEffect,Fragment} from 'react';
import Filters from '../Filters/filters';

function Characters() {
    let [ListaCompleta, setListaCompleta] = useState([])
    let [personajes, setPersonajes] = useState([]);
    let[filtrosAplicados,setfiltrosAplicados]=useState([])

    let TraerAPI = async()=>{
        let dato = await fetch('https://rickandmortyapi.com/api/character')
        .then(resp=>resp.json())
        .catch(err=> console.log('Hubo un error' + err))

        return dato
    }
    
    let [Filtros] = useState([
        {filtro:'Character Alive',name:'Alive'},
        {filtro:'Character Dead',name:'Dead'},
        {filtro:'Female',name:'Female'},
        {filtro:'Male',name:'Male'},
        {filtro:'Origin Unknown',name:'unknown'}
    ])


    
let aplicarFiltros=(event)=>{
    let nombreCheckbox=event.target.id;

    if(event.target.checked === true){
        console.log("Aplicar filtro")
        setfiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
    }else{
        console.log("sacar filtro")
        let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
        setPersonajes(ListaCompleta);//para que agregue los personajes que no tenia por el filtro
        setfiltrosAplicados(filtrosRestantes)

    }    

}

useEffect(()=>{

    let SaveCharacters = async()=>{
    let infoAPI = await TraerAPI()
    let CharacterList = infoAPI.results
    setPersonajes(CharacterList)
    setListaCompleta(CharacterList)    
}

    SaveCharacters()

}, [])
    
useEffect( ()=>{

  filtrosAplicados.forEach((filtroNombre)=>{
        let resultado;
        if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
            }
            if(filtroNombre === "Female" || filtroNombre === "Male"){
                resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
            }
            if(filtroNombre === "unknown"){
                resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                
            }
      setPersonajes(resultado)
      
    })
   
}, [filtrosAplicados])
    

    return ( 
        <Fragment>
            <Header ubicacion='Characters'/>
            <h2>Filters</h2>
            <div className="filtros">
                {Filtros.map((filtro)=> <Filters key={filtro.name} label={filtro.filtro}
                 id={filtro.name} handlerChange={aplicarFiltros}/>)}    
            </div>
            <div className="cards">
                        {personajes.length>0?
                    personajes.map((personaje)=>{
                                return <Cards key={personaje.id} data={personaje}/>
                    }):
                    <div className="alert" role="alert">
                    <i className="bi bi-exclamation-triangle-fill fs-5"></i>
                    <p className='alert-text'>Sorry! There are no characters with all those properties</p>
                    </div>
                }
            </div>
        </Fragment>
     );
}

export default Characters;
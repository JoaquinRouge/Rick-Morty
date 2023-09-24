import "./welcome.css"
import {Link} from 'react-router-dom'

function Welcome() {
    return (
        <div className="container">
            <section className="WelcomeSection">
                <div className="titles">
                    <h1>Proyect Rick & Morty</h1>
                    <h2>Welcome to Rick & Morty Proyect!</h2>
                </div>
                <div className="information">
                    <p className="infowlcme">This proyect was made for practising React and to made a functional website</p>
                    <p className="infowlcme">In this website you can know information of the characters of this animated series.
                        Also you can filter for diferent types of properties to find the character that you
                        are looking for or send us a massage for any concern o sugestion
                    </p>
                    <h2 className="go">Lets go!</h2>
                </div>
                <div className="buttons">
                    <Link to="/Characters"><button>Characters</button></Link>
                    <Link to="/Contact"><button>Contact</button></Link>
                </div>
            </section> 
        </div>
    )
}

export default Welcome
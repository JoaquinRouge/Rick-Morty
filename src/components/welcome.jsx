function Welcome() {
    return (
        <div className="container">
            <section className="WelcomeSection">
                <div className="titles">
                    <h1>Proyect Rick & Morty</h1>
                    <h2>Welcome to Rick & Morty Proyect!</h2>
                </div>
                <div className="information">
                    <p>This proyect was made for practising React and to made a functional website</p>
                    <p>In this website you can know information of the characters of this animated series.
                        Also you can filter for diferent types of properties to find the character that you
                        are looking for or send us a massage for any concern o sugestion
                    </p>
                    <h2>Lets go!</h2>
                </div>
                <div className="buttons">
                    <button>Characters</button>
                    <button>Contact</button>
                </div>
            </section> 
        </div>
    )
}

export default Welcome
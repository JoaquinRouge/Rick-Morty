import Header from '../Header/header.jsx';
import './contact.css'
import { Fragment } from 'react';


function Contact() {
    return ( 
        <Fragment>
            <Header ubicacion ='Contact'/>
            <section className="contact">
                <h2 className='h2ctc'>Contact</h2>
                <h2 className='h2ctc'>Leave us your information so we can contact you</h2>
                <form action="" method='post'>
                <div className="datos">
                    <div className="name">
                        <label className='labels' htmlFor="text">Name</label>
                        <input className='inputs' required type="text" id='text' />
                    </div>
                    <div className="email">
                        <label className='labels' htmlFor="email">Email</label>
                        <input className='inputs' required type="email" id='email' />
                    </div>
                </div>
                <div className="mensajeria">
                    <div className="mensaje">
                        <label className='labels' htmlFor="mensaje">Messege</label>
                        <textarea className='inputs' name="textarea" id="mensaje" cols="30" rows="10"></textarea>
                        <input type="submit" id='txtareabtn' value="Send" />
                    </div>  
                    </div>
                </form>
            </section>
      
        </Fragment>

     );
}

export default Contact;
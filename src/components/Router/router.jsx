import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '../Welcome/welcome';
import Characters from '../Characters/characters';
import Contact from '../Contact/contact';

function Router() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>} />
                <Route path='/Characters' element={<Characters/>} />
                <Route path='/Contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
     );
}

export default Router ;
import logo from './logo.svg';
import './App.css';
import {Home} from './pages/Home';
import {Offer} from './pages/Offer';
import {Payment} from './pages/Payment';
import {Focused} from './pages/Focused';
import {Teams} from './pages/Teams';
import {Switch} from './pages/Switch';
import {Footer} from './pages/Footer';


function App() {
  return (
    <div className="App">
      <div className=''>
        < Home/>
        < Offer/>
        < Payment/>
        < Focused/>
        < Teams/>
        < Switch/>
        < Footer/>
      </div>
      
    </div>
  );
}

export default App;


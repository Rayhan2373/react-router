import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from  './components/Home/Home'
import Friend from './components/Friend/Friend'
import Person from  './components/Person/Person'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';


function App() {
  return (
    <div className='App'>
              <Header></Header>
          <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/friend' element={<Friend></Friend>}></Route>
                <Route path='/person' element={<Person></Person>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>

          </Routes>
    </div>  
  );
}

export default App;

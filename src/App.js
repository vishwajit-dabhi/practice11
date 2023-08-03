import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
// import PropTypes from 'prop-types'

import Nav from './components/Nav';
import SignUp from './components/SignUp';

// import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
      <Routes>
        <Route path='/' element={<h1>home page</h1>} />
        <Route path='/content' element={<h1>here is the content</h1>} />
        <Route path='/about' element={<h1>about page</h1>} />
        <Route path ='/signUp' element={<SignUp/>} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

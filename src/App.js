import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './component/Getproducts';
import Addproducts from './component/Addproducts';
import Signup from './component/Signup';
import Signin from './component/Signin'; 
import Notfound from './component/Notfound';
function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
       <h1>Welcome to Sokogarden</h1>
      </header>
      {/* Below are our different routes together with the rendered components */}
      <Routes>
        <Route path='/' element={<Getproducts />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;

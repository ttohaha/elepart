import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <div style={{width:'100%', height:"100vh",backgroundColor:'red'}}></div> */}
    </BrowserRouter>
    
  );
}

export default App;

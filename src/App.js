import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './router/Home/HomeContainer';
import UploadContainer from './router/Upload/UploadContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContainer/>}></Route>
          <Route path='/upload' element={<UploadContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

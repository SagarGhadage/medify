import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

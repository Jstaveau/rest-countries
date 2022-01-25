import { useEffect } from "react";
import Home from './Containers/Home/Home'
import Header from "./Components/Header/Header";
import {Routes, Route} from 'react-router-dom'
import Pays from "./Containers/Pays/Pays";
import DarkModeContextProvider from "./Context/DarkModeContext";

function App() {

  return (
    <DarkModeContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/country/:name' element={<Pays/>}/>
      </Routes>
    </DarkModeContextProvider>
  );
}

export default App;

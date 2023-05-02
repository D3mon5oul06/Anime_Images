import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import ComicList from './ComicList';
import {Informacion, Imagen, Alumno} from './Inicio';
import CreateComics from './CreateComic';


const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
      <Informacion/> 
        <Routes>
          <Route path="/" element = { <Alumno />}/>
          <Route path="/List" element={<ComicList/>} />
          <Route path="/create" element={<CreateComics/>}
          />
        </Routes>
      </div>
  );
};
export default App;
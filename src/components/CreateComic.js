import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../styles/GuardarInfo.css"

const CREATE_COMIC_MUTATION = gql`
mutation PostMutation(
  $titulo: String!
  $paginas: Int!
  $lanzamiento: String!
  $autor: String!
  $clasificacion: Int!
  $pais: String!
  $genero: String!
  $capitulos: Int!
  $serializacion: Int!
  $precio: Float!
  ) {
    createNumero(titulo: $titulo, paginas: $paginas, lanzamiento: $lanzamiento, autor: $autor, clasificacion: $clasificacion, pais: $pais, genero: $genero, capitulos: $capitulos, serializacion: $serializacion, precio: $precio) {
      id
      titulo
      paginas
      lanzamiento
      autor
      clasificacion
      pais
      genero
      capitulos
      serializacion
      precio
  }
  }
`;


const CreateComics = () => {
  const [formState, setFormState] = useState({
    id: 0,
    titulo: '',
    paginas: '',
    lanzamiento: '',
    autor: 0,
    clasificacion: '',
    pais: '',
    genero: 0,
    capitulos: '',
    serializacion: 0,
    precio: '',
  });

  const [CreateComics] = useMutation(CREATE_COMIC_MUTATION, {
    variables: {
      titulo: formState.titulo,
      paginas: formState.paginas,
      lanzamiento: formState.lanzamiento,
      autor: formState.autor,
      clasificacion: formState.clasificacion,
      pais: formState.pais,
      genero: formState.genero,
      capitulos: formState.capitulos,
      serializacion: formState.serializacion,
      precio: formState.precio,
    }
  });

  return (
    <div class="About-us sombra" id="Caja">

      <section class="About-us-Titulo H1 Espacio" id="Titulo">
        Por favor llena los siguientes recuadros
      </section>

      <div id="Formulario-Info">
        <p class="Espacio Espacio2" >Titulo: </p>
        <p class="Espacio Espacio2">Paginas: </p>
        <p class="Espacio Espacio2">Lanzamiento: </p>
        <p class="Espacio Espacio2">Autor: </p>
        <p class="Espacio Espacio2" >Clasificacion: </p>
        <p class="Espacio Espacio2">Pais: </p>
        <p class="Espacio Espacio2">Genero: </p>
        <p class="Espacio Espacio2">Capitulos: </p>
        <p class="Espacio Espacio2">Serializacion: </p>
        <p class="Espacio Espacio2">Precio: </p>
      </div>

      <div id="Formulario-Rellenar" >

        <form onSubmit={(e) => { e.preventDefault(); CreateComics(); }} >

          <div className="Espacio" >
            <input className="Respuesta" value={formState.titulo} onChange={(e) =>
              setFormState({ ...formState, titulo: e.target.value })}
              type="text" placeholder="Titulo del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.paginas} onChange={(e) =>
              setFormState({ ...formState, paginas: e.target.value })}
              type="number" placeholder="paginas del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.lanzamiento} onChange={(e) =>
              setFormState({ ...formState, lanzamiento: e.target.value })}
              type="text" placeholder="lanzamiento del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.autor} onChange={(e) =>
              setFormState({ ...formState, autor: e.target.value })}
              type="text" placeholder="autor del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.clasificacion} onChange={(e) =>
              setFormState({ ...formState, clasificacion: e.target.value })}
              type="number" placeholder="clasificacion del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.pais} onChange={(e) =>
              setFormState({ ...formState, pais: e.target.value })}
              type="text" placeholder="pais del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.genero} onChange={(e) =>
              setFormState({ ...formState, genero: e.target.value })}
              type="text" placeholder="genero del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.capitulos} onChange={(e) =>
              setFormState({ ...formState, capitulos: e.target.value })}
              type="number" placeholder="capitulos del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.serializacion} onChange={(e) =>
              setFormState({ ...formState, serializacion: e.target.value })}
              type="number" placeholder="serializacion del comic" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.precio} onChange={(e) =>
              setFormState({ ...formState, precio: e.target.value })}
              type="number" placeholder="precio del comic" />
          </div>

          <div id="Formulario-Boton">
              <input type="submit" name="Mensaje" value="Enviar" class="Boton"></input>
          </div>
        </form>
      </div>

      <div class="Informacion">
        <h1 class="H1">Contactar Alumno: </h1>
        <ul>
          <li>Número Telefonico: <br></br> <p>+52 272 259 4250</p></li>
          <li>Correo Electronico: <br></br> <p> S20006758@estudiantes.uv.mx</p></li>
          <li>Matricula <br></br> <p>S20006758 </p> </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateComics;
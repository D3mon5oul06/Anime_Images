import React from 'react';
import { useQuery, gql } from '@apollo/client';
import "../styles/Mostrar.css"

const FEED_QUERY = gql`
  
query {
  numeros {
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
`
  ;
const ComicList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (

    <div>
      <span class="Mostrar_Titulo">Pedidos Almacenados!: </span>

      {data && data.flowers.map((top) => {
        return (
          <div class="card card3">
            <div class="inner">
              <h2 class="title"> <p> ID:  {top.id} </p></h2>
              <div key={top.id}>
                <div className='subtitle'> Titulo_Comic:
                  <span className='texto'> {top.titulo} </span>
                </div>

                <div className='subtitle'> Paginas_Comic:
                  <span className='texto'> {top.paginas} </span>
                </div>

                <div className='subtitle'> Lanzamiento_Comic:
                  <span className='texto'> {top.lanzamiento} </span>
                </div>

                <div className='subtitle'> Autor_Comic:
                  <span className='texto'> {top.autor} </span>
                </div>

                <div className='subtitle'> Clasificacion_Comic:
                  <span className='texto'> {top.clasificacion} </span>
                </div>

                <div className='subtitle'> Pais_Comic:
                  <span className='texto'> {top.pais} </span>
                </div>

                <div className='subtitle'> Genero_Comic:
                  <span className='texto'> {top.genero} </span>
                </div>

                <div className='subtitle'> Capitulos_Comic:
                  <span className='texto'> {top.capitulos} </span>
                </div>

                <div className='subtitle'> Serializacion:
                  <span className='texto'> {top.serializacion} </span>
                </div>

                <div className='subtitle'> Precio:
                  <span className='texto'> {top.precio} </span>
                </div>
              </div>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default ComicList;
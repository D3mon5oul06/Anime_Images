import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import VideojuegoList from "../componentes/game-list.component";
import { Alumno } from "./Inicio";
import Header from "./Header";
import {Switch } from "react-router-dom/cjs/react-router-dom.min";
import AddVideojuego from "../componentes/add-videogame.component";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h2>Aplicación React para almacenar en Firestore y Storage!</h2>
          <Switch>
            <Route exact path={["/", "/Inicio"]} component={Alumno } />
            <Route exact path={["/", "/dinosaurios"]} component={VideojuegoList} />
            <Route exact path="/add" component={AddVideojuego} />
          </Switch>
      </div>
    </div>
  );
};

export default App;

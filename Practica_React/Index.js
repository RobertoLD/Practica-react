npx create-react-app recetas-de-cocina
cd recetas-de-cocina
npm install react-bootstrap bootstrap
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';

import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const buscar = () => {
  return (
    <Form className="d-flex" style={{ margin: '1rem' }}>
      <FormControl
        type="search"
        placeholder="Nombre de la receta"
        className="mr-2"
        aria-label="Buscar"
      />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  );
}

export default buscar;

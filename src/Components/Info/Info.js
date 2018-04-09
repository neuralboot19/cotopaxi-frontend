// Dependencias
import React, { Component } from 'react';
import landing2 from './img/landing2.png';
import button from './img/button-ir-votaciones.png';
import './css/Info.css';

class Info extends Component {
  render() {
    return (
      <section className="container bg-warning media">
        <article className="row position-relative">
      	  <img src={landing2} className="App-background-2 position-sticky" alt="background" />
      	  <h3 className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-4 position-absolute App-position-h3 text-white text-left font-weight-bold">Elige a tu deportista favorito y dale la oportunidad de poder subir al Cotopaxi con dos expertos de montaña.</h3>
      	  <p className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-4 position-absolute App-position-p text-white h4 text-left">¡Vota y comparte tu publicación para que mas amigos se sumen a tu apoyo!</p>
      	  <img src={button} className="col-xl-5 col-lg-6 col-md-4 col-sm-4 col-4 position-absolute App-position-button btn btn-link" type="button" data-toggle="modal" data-target="#exampleModalLong" alt="IR A VOTACIONES" />
        </article>
      	
      </section>
    );
  }
}

export default Info;

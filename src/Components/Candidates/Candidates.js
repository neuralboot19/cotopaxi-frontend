// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate/Candidate';
import Logo from './img/logo.png';

// Assets
import './css/Candidates.css';

import ModalLogin from'../Modal/ModalLogin'
import ModalVotoCompletado from '../Modal/ModalVotoCompletado'

class Candidates extends Component {
  static propTypes = {
    candidates: PropTypes.array.isRequired
  }
  render() {
    const {candidates} = this.props;
    return (
      <section className="position-relative overflow-hidden Candidates" id="vota">
        <article className="row d-flex justify-content-center">
          {candidates && candidates.map((c, key) => <div><Candidate key={key} candidate={c}/><ModalVotoCompletado candidate={c} /></div> )}
          <ModalLogin />
        </article>
        <article className="d-flex align-items-end flex-column style">
          <img src={Logo} className="mt-auto p-2" alt="logo" />
        </article>
      </section>
    );
  }
}

export default Candidates;

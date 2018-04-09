// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets

class ModalVotoCompletado extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired
  }
  render() {
    const {candidate} = this.props;
    return (
      <div className="modal fade" id={"ModalVotoCompletado_"+candidate.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">MODAL VOTO</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2>Su voto ha sido registrado, gracias por apoyar el deporte que ama {candidate.full_name}</h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalVotoCompletado;

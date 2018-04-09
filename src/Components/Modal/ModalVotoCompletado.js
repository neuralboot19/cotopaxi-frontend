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
            <div className="bg-image-voto"></div>
            <div className="col-8 modal-body voto-style text-left text-white h5">
              <p>Su voto ha sido registrado, gracias por apoyar el deporte que ama {candidate.full_name}</p>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalVotoCompletado;

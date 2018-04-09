// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


// Assets
import './css/Modal.css'

class ModalCandidate extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired,
    votes: PropTypes.number.isRequired
  }
  state = {
    votes: 0
  }
  onVote(id, event) {
    var token = localStorage.getItem("token");
    var url = 'https://cotopaxi-api.herokuapp.com/vote';
    const data = { "candidate": { "id": id } };
    const options = {
      method: 'POST',
      headers: { 'AUTH-TOKEN': token },
      data: data,
      url,
    };
    axios(options)
    .then(function(response){
      window.$("#ModalVotoCompletado_"+id).modal("show");
      console.log(response.data.message); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    }).catch(function (error) {
      alert(error.response.data.message);
    });
  }
  render() {
    const {candidate, votes} = this.props;
    return (
      <div className="modal fade" id={"ModalCandidate_"+candidate.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="row modal-body bg-image">
              <div className="col-8">
                <img src={candidate.image} className="App-card-img" alt="avatar" />
              </div>
              <div className="col-4 d-flex align-items-end flex-column">
                <div className="col-4 text-right max-width text-white font-weight-bold">
                  <h3>{candidate.full_name}</h3>
                </div>
                <div className="col-2 text-right max-width mt">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close" onClick={(e) => this.onVote(candidate.id, e)} ><span aria-hidden="true">VOTAR</span></button>
                </div>
                <div className="col text-right">
                  {votes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCandidate;

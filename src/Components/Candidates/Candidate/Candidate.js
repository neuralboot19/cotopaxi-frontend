// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ModalCandidate from '../../Modal/ModalCandidate'
import axios from 'axios';


class Candidate extends Component {
  static propTypes = {
    candidate: PropTypes.object.isRequired
  }
  state = {
    votes: 0
  }
  onItemClick(id, event) {
    event.preventDefault();
    var token = localStorage.getItem("token");
    if (token !== "" && token !== null) {
      const {candidate} = this.props;
      axios.get("https://cotopaxi-backend-api.herokuapp.com/candidates/"+candidate.id)
        .then(res => {
          const votes = res.data.votes;
          this.setState({ votes });
          console.log(votes);
      })
      window.$('#ModalCandidate_'+id).modal();
    } else {
      window.$('#ModalLogin').modal();
    }
    return false;
  }

  render() {
    const {candidate} = this.props;
    return (
      <a type="button" onClick={(e) => this.onItemClick(candidate.id, e)} href="##">
        <article className="col-3 my-3 position-relative overflow-hidden">
        	<div className="row">
        	  <div className="col d-flex justify-content-center">
        	  	<div className="card border-0 bg-transparent">
        	  	  <img src={candidate.image} className="App-card-img" alt="avatar" />
    	          <h3 className="text-white position-absolute App-position-h3-text">{candidate.full_name}</h3>
    	        </div>
    	      </div>
  	     </div>
         <ModalCandidate candidate={candidate} votes={this.state.votes} />
  	   </article>
      </a>
	 );
  }
}

export default Candidate;

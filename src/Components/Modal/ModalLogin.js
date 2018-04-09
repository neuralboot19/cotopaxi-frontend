// Dependencias
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

// Assets

class ModalLogin extends Component {
  responseFacebook(response) {
    var token = localStorage.getItem("token");
    if (token !== "" && token !== null) {
    } else {
      localStorage.setItem("token", response.accessToken);
      token = localStorage.getItem("token");
      var url = 'https://cotopaxi-api.herokuapp.com/users';
      const data = { 'user': { 'facebook_access_token' : token } };
      const options = {
        method: 'POST',
        data: data,
        url,
      };
      axios(options)
      .then(function(response){
        console.log("response.data"); // ex.: { user: 'Your User'}
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        if (response.status == 422) {
          alert(response.data.message);
        }
      }).catch(function(error){
        console.log(error);
      });
    }

    window.$('#ModalLogin').modal('hide')
  }
  render() {
    return (
      <div className="modal fade" id="ModalLogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FacebookLogin
                appId="489206864813339"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={this.responseFacebook}
              />
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

export default ModalLogin;

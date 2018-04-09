// Dependencias
import React, { Component } from 'react';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios';

// Assets

class ModalLogin extends Component {
  responseFacebook(response) {
    console.log(response);
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
        alert('Usted se ha logueado satisfactoriamente')
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
            <div className="bg-image-login"></div>
            <div className="col-8 d-flex justify-content-center <modal-body></modal-body> button-facebook">
              <FacebookLogin
                appId="489206864813339"
                autoLoad={true}
                fields="name,email,picture"
                scope="email"
                callback={this.responseFacebook}
                render={renderProps => (
                  <button onClick={renderProps.onClick} className="btn btn-block btn-social btn-facebook btn-block-facebook font-weight-bold">Facebook</button>
                )}
              />
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogin;

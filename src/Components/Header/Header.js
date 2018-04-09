// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './img/logo.png'

// Assets
import './css/Header.css';

class Header extends Component {
  static propTypes = {
  	items: PropTypes.array.isRequired
  }
  render() {
  	const {items} = this.props;

    return (
      <section className="bg-primary media d-flex justify-content-around">
        <article className="row App-header d-flex align-items-center">
          <img src={Logo} className="col-2 App-logo" alt="logo" />
          <ul className="col-10 App-Menu ">
            {items && items.map((items, key) => <li key={key}><a href={items.url}>{items.title}</a></li>)}
          </ul>
        </article>
      </section>
    );
  }
}

export default Header;

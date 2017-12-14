import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';

import styles from '../styles/UrlShortener.css';

export default class UrlShortener extends Component {
  static propTypes = {
    title: string.isRequired
  };

  componentWillMount() {
    //
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles['url-shortener']}>
        <div className={styles['flex-container']}>
          <p>Components will be here!</p>
        </div>
      </div>
    );
  }
}

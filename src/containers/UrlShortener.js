import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchURLS } from '../redux/actions';

import styles from '../styles/UrlShortener.css';

class UrlShortener extends Component {
  static propTypes = {
    activeURL: object,
    fetchURLS: func,
    isFetching: bool,
    title: string.isRequired,
    urls: array
  };

  componentWillMount() {
    this.props.fetchURLS();
  }

  render() {
    const { isFetching, title, urls } = this.props;
    return (
      <div className={styles['url-shortener']}>
        {isFetching && urls.length === 0 && <h2>Loading...</h2>}
        {!isFetching &&
          urls.length >= 0 && (
            <div
              style={{ opacity: isFetching ? 0.5 : 1 }}
              className={styles['flex-container']}
            >
              <p>Components will be here!</p>
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, urls, activeURL } = state.ui;
  return {
    isFetching,
    urls,
    activeURL
  };
}

export default connect(mapStateToProps, { fetchURLS })(UrlShortener);

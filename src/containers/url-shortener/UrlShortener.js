import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { createURL, fetchURLS } from '../../redux/actions';

import UrlForm from '../url-shortener/UrlForm';
import UrlList from '../url-shortener/UrlList';

import '../../styles/UrlShortener.css';

class UrlShortener extends Component {
  static propTypes = {
    activeURL: object,
    createURL: func,
    dispatch: func,
    fetchURLS: func,
    isFetching: bool,
    title: string.isRequired,
    urls: array
  };

  componentWillMount() {
    this.props.fetchURLS();
  }

  submit = (value, dispatch) => {
    this.props.createURL(value);

    dispatch(reset('generateShortUrlForm'));
  };

  render() {
    const { isFetching, title, urls } = this.props;
    return (
      <div className="url-shortener">
        {isFetching && urls.length === 0 && <h2>Loading...</h2>}
        {!isFetching &&
          urls.length >= 0 && (
            <div
              style={{ opacity: isFetching ? 0.5 : 1 }}
              className="flex-container"
            >
              <div className="form">
                <h2>{title}</h2>
                <UrlForm onSubmit={this.submit} />
              </div>
              <UrlList title="List of Active short urls" urls={urls} />
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

export default connect(mapStateToProps, { createURL, fetchURLS })(UrlShortener);

import React, { Component } from 'react';
import { string, array } from 'prop-types';
import { connect } from 'react-redux';

import '../../styles/UrlShortener.css';

class UrlList extends Component {
  static propTypes = {
    title: string.isRequired,
    urls: array.isRequired
  };

  renderList() {
    return this.props.urls.map(url => {
      return (
        <li key={url._id} className="list-url-item">
          <div className="indicator" />
          <div className="details">
            <ul>
              <li>{url.url}</li>
              <li className="active">{`http://localhost:4000/${url.hash}`}</li>
            </ul>
          </div>
        </li>
      );
    });
  }

  render() {
    const { title } = this.props;
    return (
      <div className="url-list">
        <h2>{title}</h2>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { urls, activeURL } = state.ui;
  return {
    urls,
    activeURL
  };
}

export default connect(mapStateToProps)(UrlList);

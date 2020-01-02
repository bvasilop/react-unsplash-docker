import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    const { term } = this.state;
    const { onSubmit } = this.props;
    onSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="Unsplash Image Search" id="image-search">
              Unsplash Image Search
              <input
                id="image-search"
                type="text"
                placeholder="Search..."
                value={term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import Scroll from './Scroll';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  componentDidMount() {
    this.onSearchSubmit('seattle');
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos?per_page=50', {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    const { images } = this.state;
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <div className="ui segment">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <Scroll>
            <ImageList images={images} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;

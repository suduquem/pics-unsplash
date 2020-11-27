import React from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
// import Validator from './Validator';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log('término recibido desde el hijo SearchBar', term);
    // Axios requiere una ruta y un objeto
    // es una asynchronus request
    // Cuando se usa axios directamente:
    // const response = await axios.get('https://api.unsplash.com/search/photos', {
    //   params: { query: term },
    //   headers: {
    //     Authorization: 'Client-ID h3Sen7KSxe6P7tx77I7CaHa0c8eSNHaBapV0GHDCZxc',
    //   },
    // });
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    console.log('respuesta API', response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        {/* onSumit es un nombre que le dimos a la prop */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found: {this.state.images.length} images */}
        <ImageList images={this.state.images} />
        {/* <Validator /> */}
      </div>
    );
  }
}

export default App;

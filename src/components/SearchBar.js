import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: '' }; //Default value of search input

  onFormSubmit = (event) => {
    // Para evitar que al dar enter en el input,
    // la página trate de enviar la información y se refresque
    event.preventDefault();
    console.log(this.state.term);
    // Estamos usando la Prop que le envíamos desde App llamada onSubmit
    // Le pasamos el término almacenado en el state
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            {/* Se le pasa una referencia de la función al elemento input, 
            para que el input pueda llamar esa función en algún momento del futuro */}
            {/* <input type='text' onChange={this.onInputChange} /> */}
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

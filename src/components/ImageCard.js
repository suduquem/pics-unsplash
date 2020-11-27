import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef(); // Se crea una referencia
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
    // Sale altura cero, porque cuando hace el console.log no ha
    // adquirido la información de la imagen desde Unsplash.
    // por eso se debe esperar por un evento de carga de la imagen:
    this.imageRef.current.addEventListener('load', this.setSpans);
    // Las imagenes emiten el evento 'load' cuando han sido cargadas en el navegador
    // this.setSpans es un callback para manejar los spans (espacio) que necesitan cada una de las imagenes
  }

  setSpans = () => {
    // Se crea como Arrow Function para evitar que se pierda el contexto y
    // pueda funcionar el this, cuando se llama en addEventListener
    console.log('Después de Load', this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // 10px es el espacio que se definió para las celdas o spans
    // Se va a averiguar cuantas celdas toma la imagen y redondearla

    // Cuando la key es igual al valor spans: spans, es equivalente a spans en ES2015
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* this.imageRef permite obtener información del nodo de la imagen */}
        {/* Estos son JSX tags no Elementos del DOM, luego se convierten en elementos del DOM */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

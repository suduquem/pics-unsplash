import React from 'react';
import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = (props) => {
  console.log('lista recibida por ImageList', props.images);
  //   const images = props.images.map((image) => {
  //     return (
  //       <img key={image.id} src={image.urls.regular} alt={image.description} />
  //     );
  //   });

  //   Haciendo Destructuring:
  //   const images = props.images.map(({ id, urls, description }) => {
  //     return <img key={id} src={urls.regular} alt={description} />;
  //   });
  
  //   Usando un componente:
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{images}</div>;
};

export default ImageList;

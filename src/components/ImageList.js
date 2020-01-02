/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  if (!images) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    );
  }
  return <div className="image-list">{images}</div>;
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;

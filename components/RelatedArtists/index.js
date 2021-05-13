import React from 'react';
import PropTypes from 'prop-types';

function RelatedArtists({ artists, genre, children }) {
  if (!artists) return null;

  return (
    <section
      id='related'
      className='flex-container'
      style={{
        backgroundImage:
          'linear-gradient(transparent, #000), linear-gradient(90deg, #5A009C, #00E8C5)'
      }}
    >
      <div>
        <h3>These artists have the genre {genre}</h3>
        <br />

        {artists.map(artist => (
          <button type='button' style={{ backgroundColor: '#000' }}>
            {artist.name}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </section>
  );
}

RelatedArtists.propTypes = {
  artists: PropTypes.array,
  genre: PropTypes.string,
  children: PropTypes.node
};

export default RelatedArtists;

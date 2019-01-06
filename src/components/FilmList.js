import React from "react";
import PropTypes from "prop-types";
import FilmCard from "./FilmCard";
import Message from "./Message";

const FilmList = ({ films, toggleFeatured }) => (
  <div className="ui four cards">
    {films.length === 0 ? (
      <Message
        header="Not Found"
        message="not Not found any films"
        type="Error"
      />
    ) : (
      films.map(film => (
        <FilmCard key={film.id} film={film} toggleFeatured={toggleFeatured} />
      ))
    )}
  </div>
);
FilmList.propTypes = {
  film: PropTypes.shape({
    films: PropTypes.array.isRequired,
    toggleFeatured: PropTypes.func.isRequired
  })
};
FilmList.defaultProps = {
  films: []
};
export default FilmList;

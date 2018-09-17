import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const movieList = ['tsbshj', 'adhuaha123', 'dxcz883'];
    const movieItem = ({ movieItem }) => <li>{movieItem}</li>
    return (
      <div className="tj-movieList">
        movieList.map(movieList => {})
      </div>
    )
  }
}
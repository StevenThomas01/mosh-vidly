import React, { Component } from "react";
import "./index.css";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <span>No movies left</span>;
    }

    return (
      <React.Fragment>
        <span>{"Number of movies left: " + this.state.movies.length}</span>;
        <main class="container">
          <table className="table">
            <thead>
              <tr>
                <th>Tile</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(m => (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <button onClick={() => this.handleDelete(m)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

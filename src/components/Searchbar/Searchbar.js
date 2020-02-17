import React, { Component } from "react";
import propTypes from "prop-types";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.props.onSubmit(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired
};

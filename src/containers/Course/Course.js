import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  state = {
    title: null
  };

  componentDidMount() {
    this.parseQueryParams();
  }
  componentDidUpdate() {
    this.parseQueryParams();
  }

  parseQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[1] !== this.state.title) {
        this.setState({
          title: param[1]
        });
      }
    }
  }

  render() {
    const { title } = this.state;
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {id} </p>
      </div>
    );
  }
}

export default withRouter(Course);

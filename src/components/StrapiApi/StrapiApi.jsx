import React from "react";
import axios from "axios";

class StrapiApi extends React.Component {
  // State of your application
  state = {
    restaurants: [],
    error: null,
  };

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get("http://localhost:1337/restaurants");
      this.setState({ restaurants: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.restaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <li>{restaurant.name}</li>
              <div>{restaurant.content}</div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default StrapiApi;

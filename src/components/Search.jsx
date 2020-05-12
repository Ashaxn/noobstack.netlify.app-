import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div id="search" className="scrollspy">
        <div
          id="search"
          className="section section-search teal darken-1 white-text center"
        >
          <div className="row">
            <div className="col s12">
              <h4>Search Here</h4>
              <div className="input-field">
                <form action="item.jsp" method="get">
                  <input
                    name="show"
                    type="text"
                    className="white grey-text autocomplete"
                    id="autocomplete-input"
                    placeholder="Rooms , Other products, ect..."
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

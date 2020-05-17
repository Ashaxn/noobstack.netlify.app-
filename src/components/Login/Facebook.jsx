import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name.split(" ")[0],
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      let loginBTN = document.getElementById("loginBTN");
      loginBTN.innerHTML = `<Link onClick={this.hideSlider} to="/login">
      <li>
      
        ${this.state.name}
       
    <img
      id="loginImge"
      src=${this.state.picture} 
      alt=${this.state.name} 
      width="35px"
      height="35px"
    />
    </Link>`;

      localStorage.setItem("userName", this.state.name);
      localStorage.setItem("userPhoto", this.state.picture);
    } else {
      fbContent = (
        <FacebookLogin
          appId="248214172929612"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          isMobile={false}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;

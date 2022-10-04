import React from "react";
import Loader from "./Loader";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: null,
      head: "",
      subHead: "",
    };
  }

  handleClick = () => {
    this.componentDidMount();
  };

  componentDidMount() {
    //
    fetch("https://randomuser.me/api/")
      .then((data) => data.json())
      .then((userdata) =>
        this.setState({ userdata: userdata.results[0] }, () =>
          console.log(this.state.userdata)
        )
      );
    this.setState({ head: "", subHead: "" });
  }

  handleHover = (msg) => {
    let { userdata } = this.state;
    const fullName = `${userdata.name.title} ${userdata.name.first} ${userdata.name.last}`;
    const location = `${userdata.location.street.number}${userdata.location.street.name}`;
    switch (msg) {
      case "name":
        this.setState({ head: "My name is", subHead: fullName });
        break;
      case "email":
        this.setState({ head: "My email is", subHead: userdata.email });
        break;
      case "age":
        this.setState({ head: "My age is", subHead: userdata.dob.age });
        break;
      case "street":
        this.setState({
          head: "My location is",
          subHead: location,
        });
        break;
      case "cell":
        this.setState({
          head: "My phone number is",
          subHead: userdata.cell,
        });
        break;
      case "password":
        this.setState({
          head: "My password is",
          subHead: userdata.login.password,
        });
        break;
    }
  };
  render() {
    // console.log(this.state.userdata);
    if (!this.state.userdata) {
      return <Loader />;
    }

    return (
      <div className="container">
        <ul>
          <li>
            <img
              src={this.state.userdata.picture.large}
              alt={this.state.userdata.name.first}
            />
          </li>
          <li className="name-info">
            <span>{this.state.head || "My name is"}</span>
            <p>{this.state.subHead || this.state.userdata.name.first}</p>
          </li>
          <li className="items-container">
            <span onMouseEnter={() => this.handleHover("name")}>👤</span>
            <span onMouseEnter={() => this.handleHover("email")}>📧</span>
            <span onMouseEnter={() => this.handleHover("age")}>📅</span>
            <span onMouseEnter={() => this.handleHover("street")}>🏠</span>
            <span onMouseEnter={() => this.handleHover("cell")}>📞</span>
            <span onMouseEnter={() => this.handleHover("password")}>🔒</span>
          </li>
          <li>
            <button onClick={this.handleClick}>Random User</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;

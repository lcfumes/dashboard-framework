import React, {Component} from "react";
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <AppBar
          title="PRICE SERVICE"
          onLeftIconButtonClick={this.handleClick}
        />

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <Link to="/"><MenuItem primaryText="Home"></MenuItem></Link>
            <Link to="/about-us"><MenuItem primaryText="About"></MenuItem></Link>
          </Menu>
        </Popover>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>);
  }

}

export default App;
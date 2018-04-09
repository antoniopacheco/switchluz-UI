import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Progress,
} from 'reactstrap';
import { FakeAuth } from '../../utils/FakeAuth';
import { Link } from 'react-router-dom';
const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool,
};
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false,
};

class HeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleLogout(){
      FakeAuth.signout(()=>{
        console.log("successfully loged out");
      });
  }


  dropAccnt() {
      
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
        </DropdownToggle>
        <DropdownMenu right>
          {/* <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
          <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem> 
          <DropdownItem divider/>
          <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem> */}
          <DropdownItem><Link to="/login" onClick={this.handleLogout}> <i className="fa fa-lock"></i> Logout </Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }



  render() {
    const {notif, accnt, tasks, mssgs, ...attributes} = this.props;
    return (
      accnt ? this.dropAccnt() : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;

export default HeaderDropdown;

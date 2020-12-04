import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { BrowserRouter, NavLink } from 'react-router-dom';
 
import '../App.css'

class Header extends Component{
    constructor(props){
        super(props);

        this.state = { isNavOpen : false }
        this.togglenav = this.togglenav.bind(this);
    }

    togglenav(){
        this.setState({isNavOpen : !this.state.isNavOpen});
    }

    render(){
        // if(!this.props.auth){
        //     return(<React.Fragment></React.Fragment>);
        // }
        return(
            <React.Fragment>
                <div className="navi">
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.togglenav}/>
                        <NavbarBrand className="mr-auto" >DAPP EMR</NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/doctor">Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/treatment">Treatment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/docs">Doctors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/patient">Patient</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/treat">All Treatment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/patdata">Patient Data</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/shared">All Studies</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/sharedcomp">Study List</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                       
                    </div>
                    <p className ="text-white" ><small>{this.props.accounts}</small></p>
                </Navbar>
                </div>
            </React.Fragment>
        )

    }

}

export default Header;
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {links} from "../../react-immutable/links";

class Sidebar extends Component {
    render() {
        return (
            <div className={this.props.menu ? "sidebar" : "isOpen"}>
                <div className="navbar">
                    {
                        links.map(item=> <NavLink activeClassName="active" key={item.to} exact to={item.to}>
                            <div className="link-div">
                                <span className="icon">{item.icon}</span>
                               <span className="text"> {item.text}</span>
                            </div>
                        </NavLink>)
                    }
                </div>
            </div>
        );
    }
}

export default Sidebar;
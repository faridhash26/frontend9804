import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// called href to defined url

class Navitem extends Component{
    render(){
        return(
            <li id={this.props.item}>
                {/* (to) it is a prop of link component */}
                <Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>{this.props.item}</Link>
            </li>

        )
    }
}
export default Navitem
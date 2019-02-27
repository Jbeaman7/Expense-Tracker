import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return(
            <div className= "navbar navbar-light bg-info">
                <div className="container">
                    <h2 className= "text-white">Expense Tracker</h2>
                </div>
            </div>
        )
    }
}

export default Navbar;
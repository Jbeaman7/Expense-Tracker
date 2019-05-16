import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses/Expenses"; 
import Chart from "./components/Chart"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-5">
          <Expenses />
        </div>
        {/* <div>
          <Chart />
        </div> */}

      </div>
    );
  }
}

export default App;

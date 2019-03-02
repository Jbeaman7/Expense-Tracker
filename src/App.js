import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Expenses from "./Components/Expenses/Expenses"; 
import Chart from "./Components/Display/Chart";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-5">
          <Expenses />
        </div>
        <div>
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;

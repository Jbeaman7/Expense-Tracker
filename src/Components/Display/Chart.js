import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Food and Drink', 'Clothing', 'Transportation', 'Personal Care', 'Misc.'],
  datasets: [
    {
      backgroundColor: ["#6a6dad", "#007b8f", "#8cd1f1", "#00897c", "#1af6f9"],
      data: [65, 350, 80, 81, 56,]
    }
  ]
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <Pie ref="chart" data={data} />
      </div>
    );
  }
}
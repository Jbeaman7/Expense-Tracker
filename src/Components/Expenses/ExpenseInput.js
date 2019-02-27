import React, { Component } from "react";
import { ExpenseConsumer } from "../../Store";


class ExpenseInput extends Component {
    state = {
        expenses: [],
        expenseName: '',
        price: '',
        category: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (dispatch, e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_EXPENSE",
            expenses: this.state.expenses
        })
    }

    addExpenses = () => {
        this.setState({
            expenses: [
                ...this.state.expenses,
                {expenseName: this.state.expenseName, price: this.state.price, category: this.state.category}
            ]
        })
    }
    render(){
        return(
            <ExpenseConsumer>
                {value => {
                    const { dispatch } = value
                    return(
                        <div className="card card-body">
                <label>Name of purchase</label>
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                    <input
                        onChange={this.handleInput}
                        value={this.state.expenseName}
                        className="form-control"
                        name="expenseName"
                    />
                <label>Price</label>
                    <input
                        onChange={this.handleInput}
                        value={this.state.price}
                        className="form-control mr-2"
                        name="price"
                        type="number"
                        min="0.01"
                        step="0.01"
                        max="5000"

                    />
                <label>Category</label>
                    <select defaultValue={this.state.selectValue}
                            onChange={this.handleInput}
                            className="form-control"
                            name="category">
                        <option value="food">Food and Drink</option>
                        <option>Transportation</option>
                        <option>Clothing</option>
                        <option>Personal Care</option>
                        <option>Misc.</option>
                    </select>
                    <br />
                    <button onClick={this.addExpenses} className="btn btn-dark">Submit</button>
                </form>
            </div>
                    )
                }}
            </ExpenseConsumer>
            
        )
    }
}

export default ExpenseInput
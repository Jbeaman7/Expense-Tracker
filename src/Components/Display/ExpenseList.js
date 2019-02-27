import React, { Component } from "react";
import { ExpenseConsumer }from "../../Store"

class ExpenseList extends Component {
    render() {
        return(
            <div className="card mt-5">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Name Of Expense</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <ExpenseConsumer>
                        {value => {
                            const expensesList = value.expenses.length > 0 ? (
                                value.expenses.map((expense, index) => {
                                    return(
                                        <tr  key={index}>
                                            <td>{expense.expenseName}</td>
                                            <td>${expense.price}</td>
                                            <td>{expense.category}</td>
                                        </tr>
                                    )
                                    
                                })
                            ) : (
                                <tr>
                                    <td>No Expenses Posted Yet</td>
                                </tr>
                            )
                            return <tbody>{expensesList}</tbody>
                        }}
                    </ExpenseConsumer>

                </table>

            </div>
        )
    }
}

export default ExpenseList;
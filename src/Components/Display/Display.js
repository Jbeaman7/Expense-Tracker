import React from "react";
import ExpenseList from "./ExpenseList"
import { ExpenseConsumer } from "../../Store";


const Display = () => {
    return(
        <ExpenseConsumer>
            {value => {   
                const totalExpense = value.expenses.length > 0 ? (
                    value.expenses.reduce((accumulator, currentValue) => {
                        accumulator += parseInt(currentValue.price)
                        return accumulator
                    },0)) : 0;
                 return(
                <div className="card card-body">
                    <h3 className="text-center">Your Total Expenses: ${totalExpense}</h3>
                    <ExpenseList />
                </div>
                 )
            }}
        </ExpenseConsumer>
    )
    
} 

export default Display;
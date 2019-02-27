import React from "react";
import ExpenseInput from "./ExpenseInput";
import Display from "../Display/Display"


const Expenses = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
            <ExpenseInput />
            </div>
            <div className="col-lg-8">
               <Display />
            </div>
        </div>
    )
}

export default Expenses;
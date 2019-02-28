import React, { Component } from "react";

const ExpenseContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
        return {
            ...state,
            expenses:action.expenses
            
        }
        default:
        return state;
    }
}

class ExpenseProvider extends Component {

    state={
        expenses: [],

        dispatch: action=> this.setState(state=>reducer( state, action ))
    }
    render(){
        return(
            <ExpenseContext.Provider value={this.state}>
                {this.props.children}
            </ExpenseContext.Provider>
        )
    }
}

const ExpenseConsumer =ExpenseContext.Consumer;

export { ExpenseProvider, ExpenseConsumer };
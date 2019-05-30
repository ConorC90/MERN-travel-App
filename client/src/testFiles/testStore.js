import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const { createStore} = Redux;

const initState ={
    todos:[],
    posts:[]
}

function myreducer(state= initState, action){
if (action.type == 'ADD_TODO'){
    return{
        ...state,
        todos: [...state.todos, action.todo]
    }
}

}


function myreducer(state= initState, action){
    if (action.type == 'ADD_POST'){
        return{
            ...state,
            todos: [...state.posts, action.posts]
        }
    }
    
    }
    

const store = createStore(myreducer);

store.subscribe((=>{
    console.log('status updated');
    console.log(store.getState())
}))


store.dispatch({type:'ADD_TODO', todo:'buy milk'})
store.dispatch({type:'ADD_TODO', todo:'sleep more'})
store.dispatch({type:'ADD_POST', post:'egg hunt'})

// const todoAction = {type:'ADD_TODO', todo: 'buy milk'}

// store.dispatch(todoAction)
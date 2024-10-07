const { createStore, combineReducers } = require("redux");

const dynamicCounterReducer = require("../rtk/features/dynamicCounter/dynamicCounterSlice")
const counterReducer = require('../rtk/features/counter/counterSlice')

const postReducer = require('../rtk/features/post/postSlice')

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter : dynamicCounterReducer , 
    post : postReducer ,
});

const store = createStore(rootReducer);

module.exports = store;

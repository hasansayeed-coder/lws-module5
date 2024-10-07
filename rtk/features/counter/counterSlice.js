const createSlice = require("@reduxjs/toolkit").createSlice ;

// initial state

const initialState = {
    count : 1 ,
}

const counterSlice = createSlice({
    name : "counter" ,
    initialState : initialState ,
    reducers : {
        increment : (state ) => {
            state.count++ ;
        } ,
        decrement : (state ) => {
            state.count-- ;
        }
    }
})

module.exports = counterSlice.reducer ;
module.exports.counterActions = counterSlice.actions ;
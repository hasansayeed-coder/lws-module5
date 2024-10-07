

const store = require('./app/store')
const {counterActions} = require('./features/counter/counterSlice')
const {dynamicCounterActions} = require('./features/dynamicCounter/dynamicCounterSlice')


// initial state
console.log(store.getState())

const {fetchPosts} = require('../rtk/features/post/postSlice')

// subscribe to state changes
// store.subscribe(() => {
//     console.log(store.getState()) ;
// })

//dispatch actions
store.dispatch(counterActions.increment()) ;
store.dispatch(counterActions.decrement()) ;

store.dispatch(dynamicCounterActions.increment(10)) ;
store.dispatch(fetchPosts()) ;



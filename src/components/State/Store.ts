
import {combineReducers, createStore} from 'redux';
import {reducer} from "./Reducer";


const rootReducer = combineReducers({
  counter:reducer
})
let preloadedState
    const preLoaded = localStorage.getItem('app-state')
if (preLoaded) {
  preloadedState = JSON.parse(preLoaded)
}
export const store = createStore(rootReducer,preloadedState);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;


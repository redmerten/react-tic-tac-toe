/**
 * Created by AndreaMerten on 3/20/18.
 */

import {combineReducers} from 'redux'  //action creators immediately return action+payload
import notRealReducer from './notRealReducer'


//this is imported by main index.js
export default combineReducers({
  notReal:notRealReducer,
})
/**
 * Created by AndreaMerten on 3/20/18.
 */


import {NOT_REAL} from './types'

//import axios from 'axios'


export const notReal = () => {
  return { type: NOT_REAL, payload:'nothing'}
}




// export const  fetchQuiz = () => async dispatch => {
//   const res = await axios.get('/assessment')
//   dispatch({ type: FETCH_QUIZ, payload: res.data})
// }
//

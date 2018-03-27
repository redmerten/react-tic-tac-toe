/**
 * Created by AndreaMerten on 3/20/18.
 */

import {NOT_REAL} from '../Actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case NOT_REAL:
      return action.payload
    default:
      return state
  }
}
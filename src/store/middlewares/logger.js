import {CALL_API} from "./api"

export default store => next => action => {
  let log
  if(action[CALL_API]) {
    log = action[CALL_API]
  } else {
    log = action
  }
  console.log("log action", log)

  next(action)
}
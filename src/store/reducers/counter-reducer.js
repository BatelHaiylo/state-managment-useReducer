import{UP_ACTION,RESET_ACTION,DOWN_ACTION,UPDATE_COUNT} from '../actions/counter-types'

export default function CounterReducer(state,action) {
    switch(action.type){
      case UP_ACTION:
       return state+1
      case DOWN_ACTION:
       return state-1 
      case RESET_ACTION:
       return 0
      case UPDATE_COUNT:
       return action.payload
      default:
       return state
    }
  }
  
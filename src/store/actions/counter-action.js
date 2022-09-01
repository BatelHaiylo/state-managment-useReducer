import{UP_ACTION,RESET_ACTION,DOWN_ACTION,UPDATE_COUNT} from '../actions/counter-types'

export const countUpAction = () => {
    return {type:UP_ACTION,payload:""}
}
export const countResetAction = () => {
    return {type:RESET_ACTION,payload:""}
}
export const countDownAction = () => {
    return {type:DOWN_ACTION,payload:""}
}
export const countUpdateAction = (data) => {
    return {type:UPDATE_COUNT,payload:data}
}

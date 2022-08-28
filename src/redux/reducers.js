import { increment,decrement } from "./action";

const initialState={
 count:0
}

const reducers=(state=initialState,action)=>{
 switch (action.type){
  case increment:
   return {
    ...state,
    count:state.count+action.payload
   }
  case decrement:
   return {
    ...state,
    count:state.count-action.payload
   }
  default:
   return state
 }
}
export default reducers;
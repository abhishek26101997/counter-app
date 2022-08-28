export const increment='Increment'
export const decrement='Decrement'

export const addCount=(number=1)=>{
 return {
  type:increment,
  payload:number
 }
}

export const subCount=(number=1)=>{
 return{
  type:decrement,
  payload:number
 }

}
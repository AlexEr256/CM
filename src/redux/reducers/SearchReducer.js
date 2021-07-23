
export default function SearchReducer(initialState={
    value:''
}, action){
    switch(action.type){
        case "Set:SearchInput":
            return{
                value:action.value
            }
        default:
            return initialState
      
    }
}

export default function TableReducer(initialState={
    content:'',
    sort: 'down'
}, action){
    switch(action.type){
        case "Set:Content":
            return{
                ...initialState,
                content:action.content
            }
        case "Set:Sort":
                return{
                    ...initialState,
                    sort:action.sort
                }
        default:
            return initialState
    }
}
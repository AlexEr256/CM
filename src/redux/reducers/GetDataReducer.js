

export default function GetDataReducer(initialState={
    flag:false,
    data:[],
    tariffs: [],
    error:null
}, action){
    switch(action.type){
        case "Set:Loading":
            return{
                ...initialState,
                flag:action.flag
            }
        case "Set:Data":
            return{
                ...initialState,
                data:action.data   
            }
        case "Set:Tariffs":
            return{
                ...initialState,
                tariffs:action.tariffs   
            }
        case "Set:Error":
            return{
                ...initialState,
                error:action.error 
            }
        default:
            return initialState
        
    }
}
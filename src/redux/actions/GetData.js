import axios from 'axios'
import Normalize from '../../helper/dataNormalize'

export function SetLoading(flag){
    return{
        type:"Set:Loading",
        flag
    }
}

export function SetData(data){
    return{
        type:"Set:Data",
        data
    }
}
export function SetTariffs(tariffs){
    return{
        type:"Set:Tariffs",
        tariffs
    }
}

export function SetError(error){
    return{
        type:"Set:Error",
        error
    }
}



export default function GetDataThunk(url){
    return function(dispatch){
        try{
            dispatch(SetLoading(true));
            axios(url).then(function(response){
                const {tariffs_list, cars} = response.data;
                const clearData = Normalize(cars);
                dispatch(SetTariffs(tariffs_list))
                dispatch(SetData(clearData))
            });
            dispatch(SetLoading(false));
        }catch(error){
            dispatch(SetError(error));
        }

    }
}
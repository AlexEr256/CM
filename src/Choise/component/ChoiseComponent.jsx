import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function ChoiseComponent({choise, beautifyChoise}){
    return(
        <TextField style={{width:'90%', marginTop:'10px'}} disabled value={beautifyChoise(choise)} id="choise"/>
    )

    
}
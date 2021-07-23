import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function SearchComponent({SetInputValue}){
    return(
        <React.Fragment>
            <TextField onChange = {(e) => SetInputValue(e.target.value)} style={{width:'90%', marginBottom:'10px'}} id="search" label="Поиск"/>
        </React.Fragment>
    )
}
import React from "react";
import { connect } from "react-redux";
import SetSearchInput from "../../redux/actions/Search";
import SearchComponent from "../component/SearchComponent";




 function Search({SetInputValue}){
     return(
        <SearchComponent
            SetInputValue={SetInputValue}/>
     )
     
}

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        SetInputValue: (value) => dispatch(SetSearchInput(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
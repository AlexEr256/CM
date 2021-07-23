import React from 'react'
import { connect } from 'react-redux'
import ChoiseComponent from '../component/ChoiseComponent'


function Choise({choise}){

    function beautifyChoise(text){
        return text ? `Вы выбрали ${text}`: `Вы пока ничего не выбрали`
    }

    return(
        <ChoiseComponent
            choise={choise}
            beautifyChoise={beautifyChoise}  
        />
    )

}

function mapStateToProps(state){
    return{
        choise: state.TableReducer.content
    }
}

function mapDispatchToProps(dispatch){
    return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Choise)
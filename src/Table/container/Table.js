import React from 'react'
import {connect} from 'react-redux'
import GetDataThunk from '../../redux/actions/GetData'
import  {SelectContent, SelectSort } from '../../redux/actions/Table'

import TableComponent from '../component/TableComponent'






function CarsTable({GetData, data, tariffs, sort, SetContent, SetSort, value}){


    React.useEffect(() =>{
      GetData('https://city-mobil.ru/api/cars');
  }, [])

    function ChooseRow(e){
        SetContent(e.target.parentNode.id)      
    }

    function SortUp(){
      SetSort("up")
      data.sort().reverse()
    }

    function SortDown(){
      SetSort("down");
      data.sort()
    }

    function Filter(data, value){
      return data.filter(car => car.some((item) => item.includes(value)));
    }



    return(
      <TableComponent
          sort={sort}
          SortDown={SortDown}
          SortUp={SortUp}
          tariffs={tariffs}
          data={data}
          Filter={Filter}
          value={value}
          ChooseRow={ChooseRow}/>
    )

}

function mapStateToProps(state){
    return{
        data: state.GetDataReducer.data,
        tariffs: state.GetDataReducer.tariffs,
        sort: state.TableReducer.sort,
        value: state.SearchReducer.value
    }
}

function mapDispatchToProps(dispatch){
    return{
        GetData: (url) => dispatch(GetDataThunk(url)),
        SetContent: (content) => dispatch(SelectContent(content)),
        SetSort: (sort) => dispatch(SelectSort(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsTable)
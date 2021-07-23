import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { withStyles} from '@material-ui/core/styles';




const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

export default function TableComponent({sort, SortDown, SortUp, tariffs, data, Filter, value, ChooseRow}){
    return(
        <TableContainer style={{height:500}} component={Paper}>
        <Table aria-label="customized table"  >
          <TableHead>
            <TableRow>
                <StyledTableCell align="center">
                   Марка и Модель 
                   <IconButton color="primary" component="span" onClick = {sort === 'up' ? SortDown : SortUp}>
                        {sort === 'up' ? <ArrowUpwardIcon/> : <ArrowDownwardIcon/>}
                    </IconButton>    
                </StyledTableCell>
                {tariffs && tariffs.map((item) =>{
                  return <StyledTableCell key={item} align="center">{item}</StyledTableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
              {data && Filter(data, value).map((car) =>{
                  return (
                    <TableRow key={`${car[0]}`} id={`${car[0]}`}  onClick={ChooseRow}>
                        {car.map((item, index) => {
                           return <StyledTableCell key={index} align="center">{item}</StyledTableCell>                
                        })}
                    </TableRow>
                   
                  )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
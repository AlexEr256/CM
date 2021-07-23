import Typography from '@material-ui/core/Typography';
import './Dummies.css'

export default function Header(){
    return(
        <header className="header" >
            <Typography variant="h2" component="h2" gutterBottom>
                    Header
            </Typography>
        </header>
    )
}
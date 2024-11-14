import {NavNegro, NavHome} from './allNav'
import {SignUp} from './login'
import Grid from '@material-ui/core/Grid';
export function Registrar(){
    return(
    
    <div>
      <NavNegro />
      <NavHome />
      <Grid container justify="center" style={{ marginTop: "50px"}}>       
          <SignUp />
      </Grid>
    </div>
    )
}
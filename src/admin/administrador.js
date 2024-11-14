import {NavHome,NavNegro} from '../allNav'
import {IniciarSesion} from './componentes/loginregis'
import { Dashboard } from './componentes/navadmin'
import {UploadFile,TituloyDescrip} from './componentes/fileupload'
import {StockProductos,Registro} from './componentes/stock'
import {Listado} from './componentes/resultados'

export function LoginAdmin(){
    return(
        <>
        <NavNegro/>
        <NavHome/>
        <IniciarSesion/>
        </>
    )
}
export function ManejoStock(){
    return(
        <div className='d-flex'>
        <Dashboard/>
        <div className = 'contenedor justify-content-center align-items-center'style={{marginTop: '20px'}}>
        <StockProductos/>
        </div>       
        </div>
    )
}
export function AgregarProducto(){
    return(
        <div className='d-flex'>
        <Dashboard/>
        <div className='contenedor flex justify-content-center' style={{marginTop: '100px'}}>
        <h1>Agregar producto</h1>
        <div style={{marginTop:'40px'}}>

        <TituloyDescrip/>
        <UploadFile/>

        </div>
        </div>
        </div>
    )
}
export function Resultados(){
    return(

        <div className='d-flex'>
        <Dashboard/>
        <div style={{marginTop: '80px'}}>
        <Registro/>
        </div>
        
        </div>        
    )
}
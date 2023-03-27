import style from './Landing.module.css'
import { NavLink } from 'react-router-dom'


export default function Landing () {
    return(
        <div className={style.all}>
            <div className={style.text}>
                 <h1>PI - FOOD</h1>
                 <NavLink to="/home" className={style.nav}>
                 <button className={style.boton}>Ingresar</button>
                 </NavLink>
                 <h2>-Juan Fiorovic-</h2>
            </div>
        </div>
    )
}




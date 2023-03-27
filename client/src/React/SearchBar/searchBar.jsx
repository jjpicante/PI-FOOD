import style from "./SearchBar.module.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchRecipes } from "../../Redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
   
    
    const handleChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        dispatch(searchRecipes(newSearch));
}

return (
    <div className={style.buscador}>
        <input className={style.input} placeholder="Buscar receta..." type='search' onChange={handleChange}/>
    </div>
);
}











/* 

const handleClick = (event) => {
        event.preventDefault();
        dispatch(searchRecipes(search))
    }

    return (
        <form onSubmit={handleClick}>
            <div className={style.buscador}>
                <input className={style.input} placeholder="Buscar receta..." type='search' onChange={handleChange} onFocus={handleClick} />
                <button className={style.boton}>Buscar</button> 
            </div>
        </form>
    )
}


const handleChange = (event) => {
     setSearch(event.target.value)
 }

  const handleClick = (search) => {
     dispatch(searchRecipes(search))
 }
 return (
 <div className={style.buscador}>
 <input className={style.input} placeholder="Buscar receta..." type='search' onChange={handleChange}/>
 <button className={style.boton} onClick={handleClick(search)}>Buscar</button> 
</div>) */
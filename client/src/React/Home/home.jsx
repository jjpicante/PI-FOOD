import React, { useState, useEffect } from "react"
import style from "./Home.module.css"
import Card from "../Card/card"
import Filters from "../Filters/filters"
import Paginado from "../Paginado/paginado"
import { getRecipes, getDiets } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
 
export default function Home () {
   const dispatch = useDispatch(); 
   const dietas = useSelector(state => state.diets)
    const recetas = useSelector(state => state.recipes)
    
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 9; 
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage 
    const currentRecipes = recetas.slice(indexOfFirstRecipe, indexOfLastRecipe)
    
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getRecipes());
        dispatch(getDiets());
    },  [dispatch])

    if ((!recetas.length)) {
        return <h1>Cargando...</h1>;
    }

   return(
        <div className={style.bodyHome}>
             <Filters/> 
         <div className={style.cardsContent} >
             {currentRecipes?.map(elem => {
                 return (
                    <Link key = {elem.id} to={'/detail/' + elem.id}>
                     <Card 
                      id={elem.id}
                      name={elem.name} 
                      image={elem.image}
                      diets={elem.Diets}
                      key={elem.id}
                      healthscore={elem.healthscore} />
                    </Link>  
                 )
             })}  
    </div>
    <div className={style.paginado}>
    <Paginado recipesPerPage = {recipesPerPage}
                       recetas = {recetas.length}
                       paginado = {paginado}
                       />    
    </div>        
 </div>
)
}
             
           

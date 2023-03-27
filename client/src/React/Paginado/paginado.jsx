import React from "react";
import style from "./Paginado.module.css"

export default function Paginado({recipesPerPage, recetas, paginado}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(recetas/recipesPerPage); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <div className={style.paginado}>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <button className= {style.numero} key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </button>
                ))}
            </div>
        </nav>
    )
}



import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../Redux/actions";
import { useParams } from "react-router-dom";

export default function Detail() {
  const dispatch = useDispatch();
  const recipeById = useSelector((state) => state.recipeByID);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
        dispatch(cleanDetail());
      };
  }, [dispatch, id]);

    
  if ((!Object.keys(recipeById).length)) {
    return <h1>Cargando...</h1>;
}
  return (
    
    <div>
    {console.log(recipeById.Diets, recipeById.steps)}
      <>
        <p>Id: {recipeById.id}</p>
        <h1>{recipeById.name}</h1>
        <img src={recipeById.image} alt="img not found" />
        <div dangerouslySetInnerHTML={{ __html: recipeById.summary }} />
        <h2>Nivel de comida saludable</h2>
        <h3>{recipeById.healthScore}</h3>
        <h2>Cómo hacerla</h2>
        <div>
          {recipeById.steps?.map((e, i) => {
            return <div key={i}>{i+1}- {e}</div>;
          })}
        </div>
        <h2>Tipos de dietas</h2>
        <div>
          {recipeById.Diets?.map((e, i) => {
            return <h4 key={i}>{e}</h4>;
          })}
        </div>
      </>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { postRecipes, getDiets } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";



export default function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
 
  const [input, setInput] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    Diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    Diets: [],
  });


  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    }
    );
    setErrors(
      validate({
        ...input,
      [e.target.name]: e.target.value,
      })
    )
  };
  console.log(input.steps)
 

  const handlePushSteps = (e) => {
    setInput({
      ...input,
      steps: [...input.steps, e.target.form.steps.value] 
    })
    e.target.form.steps.value="";
  }

  const handleSelect = (e) => {
    setInput({
      ...input,
      Diets: [...input.Diets, e.target.value],
    });
  };

  const handleResetdiets = () => {
    setInput({
      ...input,
      Diets: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipes(input));
    alert("Receta creada... A cocinar!!")
    setInput({
      name: "",
      image: "",
      summary: "",
      healthScore: "",
      steps: [],
      Diets: [],
    })
    
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div>
      <h1>Creá tu receta</h1>
      <form
        onSubmit={(e)=>handleSubmit(e)}
      >
        <label>Nombre:</label>
        <br/>
        <input
          type="text"
          id="nombre"
          name="name"
          value={input.name}
          onChange={(e)=>handleChange(e)}
          
        />
        {errors.name && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.name}</p>}
        <br />

        <label>Resumen del plato:</label>
        <br/>
        <textarea
          id="resumen"
          name="summary"
          rows="4"
          cols="50"
          value={input.summary}
          onChange={(e)=>handleChange(e)}
          
        ></textarea>
        {errors.summary && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.summary}</p>}
        <br />

        <label>Nivel de comida saludable:</label>
        <br/>
        <input
          id="saludable"
          name="healthScore"
          value={input.healthScore}
          onChange={(e)=>handleChange(e)}
          
        />
        {errors.healthScore && <p style={{color:'red', fontWeight: 'bolder'}}>{errors.healthScore}</p>}
        <br />

        <label htmlFor="pasoapaso">Paso a paso:</label>
        <br/>
    <textarea id="pasoapaso" name="steps" rows="8" cols="50"/>
    <button type="button" onClick={(e)=> handlePushSteps(e)}>
      Agregar paso
    </button>
    <br />
    {input.steps.map((step, index) => (
      <div key={index}>{index+1} - {step}</div>
    ))}

<label>URL Imagen:</label>
        <br/>
        <input
          id="img"
          name="image"
          value={input.image}
          onChange={(e)=>handleChange(e)}
          
        />
<br/>
<label>Dietas:</label>
<br/>
        <select onChange={(e)=>handleSelect(e)}>
          {diets?.map((elem) => {
            return (
              <option key= {elem.name} value={elem.name}>
                {elem.name}
              </option>
            );
          })}
        </select>
        <button type="button" onClick={()=>handleResetdiets()}>
          reset dietas
        </button>
      
        <br />
        
        <>
          {input.Diets.map((elem) => (
            <h4 key={elem}>{elem}</h4>
          ))}
        </>
        <input type="submit" value="Crear Receta" />
      </form>
    </div>
  );
}

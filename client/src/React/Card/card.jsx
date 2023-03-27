import style from "./Card.module.css";


export default function Card({ image, name, diets, id }) {
  return (
    <div className={style.card}>
      <img src={image} alt="img not found" className={style.img} />
      <h1>{name}</h1>
      <div className={style.diets}>
        {diets?.map((e, i) => {
          return (
            <h3 className={style.diet} key={i}>
              {e}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

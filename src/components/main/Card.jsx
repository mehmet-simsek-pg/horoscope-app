

const Card = ({data}) => {
  return (
    <>
      {data.map(({ title, desc, image }) => {
        return (
        <section className="cards">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <img src={image} alt=""/>
          <div className="card-over">
            <p>{desc}</p>
          </div>
          </section>
        );
       })}
   </>
  );
}

export default Card


const Carrousel=(props)=>{
  
  return (
        <div>
        <h1>coucou</h1>
        {props.pictures.map((picture) => {
          return <img src={picture} alt="picture" key={picture} />
        })}
        </div>
  )
}
export default Carrousel;
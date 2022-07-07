 const Card = (props)=>{
    console.log(props)
    return (
      <div>
  
      <div>Nome: {props.nomePersona}</div>
      <div>Cognome: {props.cognomePersona}</div>
  
      </div>
    )
  }
  export default Card;
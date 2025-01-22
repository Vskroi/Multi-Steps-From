export const Button = (props) =>{
    const {onClick , text, className , img} = props
    return (
        <button
        className={className} 
        onClick={onClick}
      >
      {img}{text}
      </button>
    )
}
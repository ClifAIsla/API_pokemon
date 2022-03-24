function FormularioPokemon(props){
    return(
        <form onSubmit={ (event) => props.buscarPokemon(event) }>
            <label>
                Nombre del pokemon:
            </label>
            <input type='text' id="nombrePokemon"/>
            <button type="submit">
                ¡Atrapar!
            </button>
        </form>
    )
}
export default FormularioPokemon;
import './Textfield.css'
export const Textfield = ({ label, placeHolder, require, valor, valorAlterado }) => {

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={value => valorAlterado(value.target.value)} required={require} placeholder={placeHolder} />
        </div>
    )
}

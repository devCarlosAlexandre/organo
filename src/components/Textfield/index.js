import './Textfield.css'
export const Textfield = ({ label, placeHolder }) => {
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeHolder} />
        </div>
    )
}

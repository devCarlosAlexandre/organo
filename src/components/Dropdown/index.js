import './Dropdown.css'

export const Dropdownn = ({ label, itens, require }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={require}>
                {itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}
import './Dropdown.css'

export const Dropdownn = ({ label, itens, require, time, valorAlterado }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select value={time} onChange={value => valorAlterado(value.target.value)} required={require}>
                {itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}
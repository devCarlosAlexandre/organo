import './Card.css'

export const Card = ({ corPrimaria, nome, cargo, imagem }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src={imagem} alt={nome} />
            </div>
            <div
                className='rodape'
            >
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
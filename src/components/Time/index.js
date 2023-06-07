import { Card } from '../Card';
import './Time.css';
export const Time = ({ nome, corPrimaria, corSecundaria, users }) => {
    return (
        users.length > 0 ? <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='users'>
                {
                    users.map(
                        (user, index) => <Card
                            key={index}
                            style={{ marginTop: '60px', paddingTop: '10px' }}
                            imagem={user.foto}
                            corPrimaria={corPrimaria}
                            cargo={user.cargo}
                            nome={user.nome}
                        />)
                }
            </div>
        </section> : ''
    )
}
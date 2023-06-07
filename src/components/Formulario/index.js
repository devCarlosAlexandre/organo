import { useState } from 'react';
import { Button } from '../Button';
import { Dropdownn } from '../Dropdown';
import { Textfield } from '../Textfield';
import './Formulario.css'


export const Formulario = ({ times, concluir, }) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [foto, setFoto] = useState("");
    const [time, setTime] = useState("");

    const handleSave = (event) => {
        event.preventDefault()
        concluir({
            nome,
            cargo,
            time,
            foto
        })
        setNome('')
        setCargo('')
        setFoto('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={handleSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield
                    valor={nome}
                    valorAlterado={setNome}
                    require={true}
                    label={"Nome"}
                    placeHolder={"Informe seu nome..."}
                />
                <Textfield
                    valor={cargo}
                    valorAlterado={setCargo}
                    require={true}
                    label={"Cargo"}
                    placeHolder={"Informe seu cargo..."}
                />
                <Textfield
                    valor={foto}
                    valorAlterado={setFoto}
                    label={"Imagem"}
                    placeHolder={"Informe o endereço da imagem"}
                />
                <Dropdownn
                    valor={time}
                    valorAlterado={setTime}
                    require={true}
                    itens={times}
                    label={"Time"}
                />
                <Button type='submit'>
                    Cadastrar Card
                </Button>
            </form>
        </section>
    )
}
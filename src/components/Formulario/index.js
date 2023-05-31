import { Textfield } from '../Textfield';
import './Formulario.css'


export const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Textfield label={"Nome"} placeHolder={"Informe seu nome..."} />
                <Textfield label={"Cargo"} placeHolder={"Informe seu cargo..."} />
                <Textfield label={"Imagem"} placeHolder={"Informe o endereço da imagem"} />
            </form>
        </section>
    )
}
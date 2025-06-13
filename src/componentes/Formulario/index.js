import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'
const Formulairio = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi Submetido')
    }

    return(
        <section className='Formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label='Nome' placeholder='Digite seu nome'/>
                <CampoTexto obrigatorio = {true} label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem'/>
                <ListaSuspensa obrigatorio = {true}  label='Time' itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulairio
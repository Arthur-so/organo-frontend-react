import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'UX e Design',
        'Devops',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    return(
    <section className='formulario'>
        <form>
            <h2> Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem"placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={times} />
        </form>
    </section>)

}

export default Formulario
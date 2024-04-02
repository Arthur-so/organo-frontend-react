import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
    const cssCorSecundaria = {backgroundColor: props.corSecundaria}
    
    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={cssCorSecundaria}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time
import './PersonCardque.css'

const ListaPersona =  (props) => {
    const {firsName,lastName,age,hairColor} = props;
    return (
        <div className = "contenedor">
            <h1 className = "FirsName" >{firsName} {lastName}</h1>
            <h2 className = "Age"> {age}</h2>
            <h2 className = "HairColor" >{hairColor}</h2>
        </div>
        )

}

export default ListaPersona;

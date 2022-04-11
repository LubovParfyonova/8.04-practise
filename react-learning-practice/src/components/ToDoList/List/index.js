import style from'./List.module.css'

function List (props) {

    const liArray = props.toDoArray.map( (element, index) => {
        return <li key={index}>{element}</li>
    })
    return (
        <ul className={style.container}>
            
            {liArray}
        </ul>
    );
}

export default List;

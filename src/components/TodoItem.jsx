const TodoItem = ({id,text, completed, remove, toggle}) => {
    return (
        <li>
            <input type="checkbox" onClick={() => toggle(id)} checked={completed}/>
              <span>{text}</span>
              <span onClick={() => remove(id)}>❌</span>
        </li>
    )
}

export default TodoItem
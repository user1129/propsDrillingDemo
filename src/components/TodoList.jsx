import TodoItem from "./TodoItem"
const TodoList = ({todos , remove, toggle}) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} {...todo} remove={remove} toggle={toggle}/>)
            }
        </ul>
    )
}
export default TodoList
export const TodoCard = (props)=>{
    const {data, selectTask, deleteTask} = props;
    
    return  <div className="todo-card">
    <div className="todo-title text-md bold">{data.title}</div>
    <div className="pill">{data.status}</div>
    <button onClick={selectTask}>Edit</button>
    <button onClick={deleteTask}>Delete</button>
</div>
}
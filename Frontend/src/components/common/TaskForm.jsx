export const TaskForm = (props) => {
  const statuses = ["Todo", "In Progress", "Done"];
  const { task, inputHandler, submitForm } = props;
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={task.title}
        name="title"
        placeholder="Enter title"
        onChange={inputHandler}
      />
      <select name="status" value={task.status} onChange={inputHandler}>
        {statuses.map((v, key) => (
          <option value={v} key={key}>
            {v}
          </option>
        ))}
      </select>
      <button className="btn primary" type="submit">
        Add Task
      </button>
    </form>
  );
};

import PropTypes from 'prop-types';

import { filters } from './utils';

export default function TodoItem(props) {
  const { todo, deleteTodo, toggleTodo } = props;

  return (
    <li className={todo.state === filters.COMPLETED ? 'completed' : ''}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.state === filters.COMPLETED}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.task}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    state: PropTypes.string,
  }),
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
};

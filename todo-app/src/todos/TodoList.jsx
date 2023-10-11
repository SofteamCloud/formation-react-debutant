import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import TodoItem from './TodoItem';
import { filters } from './utils';

export default function TodoList(props) {
  const { todos, deleteTodo, toggleTodo, todosFilter } = props;
  const [filtredTodos, setFiltredTodos] = useState([]);

  useEffect(() => {
    console.log({ todos });

    if (todosFilter === filters.ALL) {
      setFiltredTodos(todos);
      return;
    }

    if (todosFilter === filters.ACTIVE) {
      const _filteredTodos = todos.filter(
        (todo) => todo.state === filters.ACTIVE,
      );
      setFiltredTodos(_filteredTodos);
    }

    if (todosFilter === filters.COMPLETED) {
      const _filteredTodos = todos.filter(
        (todo) => todo.state === filters.COMPLETED,
      );
      setFiltredTodos(_filteredTodos);
    }
  }, [todos, todosFilter]);

  return (
    <>
      <section>
        <ul className="todo-list">
          {filtredTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      task: PropTypes.string,
      state: PropTypes.string,
    }),
  ),
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todosFilter: PropTypes.string,
};

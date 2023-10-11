import PropTypes from 'prop-types';

import { filters } from './utils';

export default function TodoFooter(props) {
  const { activeTodoCount, clearCompletedTodos, updateTodosFilter } = props;

  return (
    <footer className="footer">
      <span>{`${activeTodoCount} items left`}</span>

      <ul className="filters">
        <li>
          <button onClick={() => updateTodosFilter(filters.ALL)}>All</button>
        </li>
        <li>
          <button onClick={() => updateTodosFilter(filters.ACTIVE)}>
            Active
          </button>
        </li>
        <li>
          <button onClick={() => updateTodosFilter(filters.COMPLETED)}>
            Completed
          </button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompletedTodos}>
        Clear completed
      </button>
    </footer>
  );
}

TodoFooter.propTypes = {
  activeTodoCount: PropTypes.number,
  clearCompletedTodos: PropTypes.func,
  updateTodosFilter: PropTypes.func,
};

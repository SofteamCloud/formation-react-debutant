// Components
import AddTodoForm from './todos/AddTodoForm';
import TodoList from './todos/TodoList';
import TodoFooter from './todos/TodoFooter';
import useLocalStorage from './hooks/useLocalStorage';

import { filters, uid } from './todos/utils';

// Styles
import './App.css';

function App() {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [todosFilter, setTodosFilter] = useLocalStorage(
    'todosFilter',
    filters.ALL,
  );

  const addTodo = (task) => {
    const todo = {
      id: uid(),
      task: task,
      state: filters.ACTIVE,
    };

    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          state:
            todo.state === filters.ACTIVE ? filters.COMPLETED : filters.ACTIVE,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const getActiveTodosCount = () => {
    return todos.filter((todo) => todo.state === filters.ACTIVE).length;
  };

  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter(
      (todo) => todo.state !== filters.COMPLETED,
    );

    setTodos(updatedTodos);
  };

  const updateTodosFilter = (todoFilter) => setTodosFilter(todoFilter);

  return (
    <div className="todoapp">
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        todosFilter={todosFilter}
      />
      <TodoFooter
        activeTodoCount={getActiveTodosCount()}
        clearCompletedTodos={clearCompletedTodos}
        updateTodosFilter={updateTodosFilter}
      />
    </div>
  );
}

export default App;

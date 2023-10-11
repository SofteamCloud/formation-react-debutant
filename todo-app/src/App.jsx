import { useState } from 'react';

// Components
import AddTodoForm from './todos/AddTodoForm';
import TodoList from './todos/TodoList';
import TodoFooter from './todos/TodoFooter';

import { filters, uid } from './todos/utils';

// Styles
import './App.css';

// const initialTodos = [
//   { id: 1, task: 'tache 1', state: filters.COMPLETED },
//   { id: 2, task: 'lkjsdfksdf ', state: filters.ACTIVE },
//   { id: 3, task: 'tache 3', state: filters.COMPLETED },
//   { id: 4, task: 'sdfsdf', state: filters.ACTIVE },
//   { id: 5, task: 'tache 5', state: filters.COMPLETED },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState(filters.ALL);

  // console.log({ todosFilter });

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

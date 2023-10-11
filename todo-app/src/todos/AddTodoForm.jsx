import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = (props) => {
  const { addTodo } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNewTodo = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    if (inputValue) {
      // add moi un todo
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <header className="header">
      <h1>Todos</h1>

      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleAddNewTodo}
      />
    </header>
  );
};

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodoForm;

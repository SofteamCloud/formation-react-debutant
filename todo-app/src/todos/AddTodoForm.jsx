import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt';

import useLocalStorage from '../hooks/useLocalStorage';

const AddTodoForm = (props) => {
  const { addTodo } = props;
  const [inputValue, setInputValue] = useLocalStorage('inputValue');
  const title = useRef(null);

  useEffect(() => {
    const h1 = title.current;

    VanillaTilt.init(h1, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);

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
      <h1 ref={title}>Todos</h1>

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

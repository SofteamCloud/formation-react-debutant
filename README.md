# formation-react-debutant

#### 1- Javascript pour React: ES6

##### Arrow Functions

```
// before
hello = function() {
  return "Hello World!";
}

// after
hello = () => {
  return "Hello World!";
}
```

##### Array Methods: map, filter, reduce...

```
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
```

##### Destructuring

```
// before
const vehicles = ['renault', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// after
const vehicles = ['renault', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```

##### Ternary Operator

```
// before
if (authenticated) {
  renderAdmin();
} else {
  renderLogin();
}

// after
authenticated ? renderAdmin() : renderLogin();
```

##### Spread Operator

```
// example 1: arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// example 2: rest
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

// example 3: objects
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
```

#### 2 - Créer une interface utilisateur avec JavaScript de base et le DOM

```
<body>
  <div id="root"></div>
  <script type="text/javascript">
    const rootElement = document.getElementById('root')
    const element = document.createElement('div')
    element.textContent = 'Hello World'
    element.className = 'container'
    rootElement.appendChild(element)
  </script>
</body>
```

#### 3- Créer une interface utilisateur avec l'API createElement de React

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script type="text/javascript">
    const rootElement = document.getElementById('root')
    const element = React.createElement('div', {
      className: 'container',
      children: 'Hello World',
    })
    ReactDOM.render(element, rootElement)
  </script>
</body>
```

#### 4- Créer une interface utilisateur avec la syntaxe JSX de React

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root')
    const element = <div className="container">Hello World</div>
    ReactDOM.render(element, rootElement)
  </script>
</body>
```

#### 5- Utiliser efficacement JSX avec React

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root')
    const children = 'Hello World'
    const className = 'container'
    const props = {children, className}
    const element = <div {...props} />
    ReactDOM.render(element, rootElement)
  </script>
</body>
```

#### 6- Rendre deux éléments côte à côte avec les fragments React

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const element = (
      <>
        <span>Hello</span> <span>World</span>
      </>
    )
    ReactDOM.render(element, document.getElementById('root'))
  </script>
</body>
```

#### 7- Créer un composant React simple et réutilisable

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    function Message({children}) {
      return <div className="message">{children}</div>
    }

    const element = (
      <div className="container">
        <Message>Hello World</Message>
        <Message>Goodbye World</Message>
      </div>
    )

    ReactDOM.render(element, document.getElementById('root'))
  </script>
</body>
```

#### 8- Valider les propriétés personnalisées d'un composant React avec PropTypes

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script src="https://unpkg.com/prop-types@15.6.1/prop-types.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root')

    function SayHello({firstName, lastName}) {
      return (
        <div>
          Hello {firstName} {lastName}!
        </div>
      )
    }
    SayHello.propTypes = {
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }

    const element = <SayHello firstName={false} />

    ReactDOM.render(element, rootElement)
  </script>
</body>
```

#### 9- Comprendre et utiliser l'interpolation dans JSX

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    function CharacterCount({text}) {
      return (
        <div>
          {`The text "${text}" has `}
          {text.length ? <strong>{text.length}</strong> : 'No'}
          {' characters'}
        </div>
      )
    }

    const element = (
      <>
        <CharacterCount text="Hello World" />
        <CharacterCount text="" />
      </>
    )

    ReactDOM.render(element, document.getElementById('root'))
  </script>
</body>
```

#### 10- Rerendre une application React

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
    const rootElement = document.getElementById('root')

    function tick() {
      const time = new Date().toLocaleTimeString()
      const element = (
        <>
          <input value={time} />
          <input value={time} />
        </>
      )
      ReactDOM.render(element, rootElement)
    }

    setInterval(tick, 1000)
  </script>
</body>
```

#### 11- Styler les composants React avec className et des styles en ligne

```
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <style>
    .box {
      border: 1px solid #333;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .box--large {
      width: 270px;
      height: 270px;
    }
    .box--medium {
      width: 180px;
      height: 180px;
    }
    .box--small {
      width: 90px;
      height: 90px;
    }
  </style>
  <script type="text/babel">
    function Box({style, size, className = '', ...rest}) {
      const sizeClassName = size ? `box--${size}` : ''
      return (
        <div
          className={`box ${className} ${sizeClassName}`}
          style={{fontStyle: 'italic', ...style}}
          {...rest}
        />
      )
    }

    const element = (
      <div>
        <Box size="small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box>
        <Box size="medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box>
        <Box size="large" style={{backgroundColor: 'orange'}}>
          large orange box
        </Box>
        <Box>sizeless box</Box>
      </div>
    )

    ReactDOM.render(element, document.getElementById('root'))
  </script>
</body>
```

#### 12- Utiliser des gestionnaires d'événements avec React

```
// EventHnadler.jsx

const EventHanlder = () => {
    const handleClick = (event) => {
      console.log(event)
    }

    function handleChange(event) {
      console.log('value', event.target.value)
    }

    return (
      <div>
        <p>There have been {state.eventCount} events.</p>
        <p>
          <button onClick={handleClick}>Click Me</button>
        </p>
        <p>You typed: {state.username}</p>
        <p>
          <input onChange={handleChange} />
        </p>
      </div>
    )
}

export default EventHanlder
```

#### 13- Gérer l'état dans un composant React avec le hook useState

```
// StateManagement.jsx

import React from 'react'

const StateManagement = () => {
  const [name, setName] = React.useState('')

  const handleChange = event => setName(event.target.value)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default StateManagement
```

#### 14- Gérer les effets secondaires dans un composant React avec le hook useEffect

##### a- Utiliser un initialisateur différé avec useState

##### b- Gérer le tableau de dépendances de useEffect

```
// EffectManagement.jsx

import React from 'react'

const EffectManagement = () => {
  const [name, setName] = React.useState(
    window.localStorage.getItem('name') || '',
  )

  // lazy initialization
  // const [name, setName] = React.useState(
  //   () => window.localStorage.getItem('name') || '',
  // )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  // effect dependencies
  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name)
  // }, [name])

  const handleChange = event => setName(event.target.value)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default EffectManagement
```

#### 15- Créer des hooks personnalisés réutilisables

```
// CustomHook.jsx

import React from 'react'

const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

const CustomHook = () => {
  const [name, setName] = useLocalStorageState('name')

  const handleChange = event => setName(event.target.value)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

export default CustomHook
```

#### 16- Manipuler le DOM avec les références (refs) React

```
// styles
/* .tilt-root {
  height: 150px;
  background-color: red;
  width: 200px;
  background-image: -webkit-linear-gradient(
    315deg,
    #ff00ba 0%,
    #fae713 100%
  );
  background-image: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);
  transform-style: preserve-3d;
  will-change: transform;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg)
    scale3d(1, 1, 1);
}
.tilt-child {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translateZ(30px) translateX(-50%) translateY(-50%);
  box-shadow: 0 0 50px 0 rgba(51, 51, 51, 0.3);
  background-color: white;
}
.totally-centered {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
} */


// Refs.jsx
import React from 'react'

const Tilt = ({children}) => {
  const tiltRef = React.useRef()

  React.useEffect(() => {
    const tiltNode = tiltRef.current
    const vanillaTiltOptions = {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }
    VanillaTilt.init(tiltNode, vanillaTiltOptions)
    return () => {
      tiltNode.vanillaTilt.destroy()
    }
  }, [])

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}


const RefComponent = () => {
  const [showTilt, setShowTilt] = React.useState(true)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showTilt}
          onChange={e => setShowTilt(e.target.checked)}
        />{' '}
        show tilt
      </label>
      {showTilt ? (
        <Tilt>
          <div className="totally-centered">vanilla-tilt.js</div>
        </Tilt>
      ) : null}
    </div>
  )
}

export default RefComponent
```

#### 17- Créer des formulaires basiques avec React

```
// Form.jsx

import React from 'react'

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default Form

// validate form with react-hook-form
```

#### 18- Afficher une liste

```
// RenderList.jsx

import React from 'react'

const list = [
  {id: 'a', value: 'apple'},
  {id: 'o', value: 'orange'},
  {id: 'g', value: 'grape'},
  {id: 'p', value: 'pear'},
]

const RenderList = (key, defaultValue = '') => {
  const [items, setItems] = React.useState(list)

  const addItem = () =>{
    setItems([...items, list.find(i => !items.includes(i))])
  }

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div>
      <button disabled={items.length >= list.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>{' '}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}


export default RenderList
```

#### Projet final: Blog:

Competences a apprendre en plus:

- commencer un projet à partir du zéro
- faire des appels HTTP via React Query
- navigation entre les pages avec React Router
- Build un package prêt pour production

aller dans le dossier du final-peoject
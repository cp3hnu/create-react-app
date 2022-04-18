import './App.css';
import React from 'react'
import { Inspector } from 'react-dev-inspector'
import HelloWorld from './HelloWord'


const InspectorWrapper = process.env.NODE_ENV === 'development'
  ? Inspector
  : React.Fragment

function App() {
  return (
    <InspectorWrapper
      // props docs see:
      // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
      keys={['control', 'shift', 'command', 'c']}
      onClickElement={(params) => {
        console.log(params)
      }}
    >
     <HelloWorld></HelloWorld> 
    </InspectorWrapper>
  );
}

export default App;

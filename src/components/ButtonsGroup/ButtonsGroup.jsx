import { useState } from "react";
import PropTypes from "prop-types";

function ButtonsGroup({ check }) {
   const [counter, setCounter] = useState(0); // hook de estado

   return (
      <>
         <button className="btn" onClick={ () => setCounter(counter + 1) } disabled={ !check } >+1</button>
         <button className="btn" onClick={ () => setCounter(0) } disabled={ !check } >0</button>
         <button className="btn" onClick={ () => setCounter(counter - 1) } disabled={ !check } >-1</button>
         <p>Valor del contador 1: { counter }</p>
      </>
   )
}

ButtonsGroup.propTypes = {
   check: PropTypes.bool.isRequired
}

export default ButtonsGroup;

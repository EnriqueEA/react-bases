import { useState } from "react";
import PropTypes from "prop-types";

function Select({ setCombo }) {
   const [colores] = useState([{color: 'Rojo', code: 'text-red-500'}, {color: 'Azul', code: 'text-blue-500'}, {color: 'Amarillo', code: 'text-yellow-500'}]);
   const options = colores.map((c, i) => <option key={ i } value={ c.code }>{ c.color }</option>);

   return(
      <select name="" className="border-2 border-black rounded-md" onChange={e => setCombo(e.target.value)}>
        { options }
      </select>
   );
}

Select.propTypes = {
   setCombo: PropTypes.func
}

export default Select;

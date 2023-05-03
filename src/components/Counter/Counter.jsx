import { useState } from "react";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";

function Counter() {
   const [check, setCheck] = useState(true); // hook
   const [nombre, setNombre] = useState(''); // hook

   console.log(check);

   return (
      <>
         <div className="flex flex-col items-start">
            <label htmlFor="">Habilitado
               <input type="checkbox" name="" id="" onChange={ () => setCheck(!check) } checked={ check } />
            </label>
            <label htmlFor="">Nombre:
               <input type="text" className="border-2 border-black rounded-md" id="" onChange={ e => setNombre(e.target.value) } value={ nombre } />
            </label>
            <p>Mi nombre es: { nombre }</p>
         </div>
         <div className="flex justify-between">
            { check && <ButtonsGroup check={ check } /> }
         </div>
      </>
   );
}

export default Counter;

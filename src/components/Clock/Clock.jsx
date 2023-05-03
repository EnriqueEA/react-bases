import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function Clock({ color }) {
   const [time, setTime] = useState(new Date());
   const [nombre, setNombre] = useState("");

   useEffect(() => {
      // Se ejecuta al montar el componente
      console.log("Componente montado.");
      const timerId = setInterval(() => {
         setTime(new Date());
         console.log(new Date().toLocaleTimeString());
      }, 1000);
      // Se ejecuta al desmontar el componente
      return () => {
         console.log("Componente desmontado.");
         clearInterval(timerId)
      }
   }, []);

   useEffect(() => {
      setNombre(nombre.toUpperCase());
      console.log("Componente actualizado.");
   }, [nombre]);


   return(
      <>
         <p className={ `${ color } text-[10rem] text-center` }>{ time.toLocaleTimeString() }</p>
         <input type="text" className="text-control" onChange={ e => setNombre(e.target.value) } />
         <span>{ nombre }</span>
      </>
   );
}

Clock.propTypes = {
   color: PropTypes.string
}

export default Clock;

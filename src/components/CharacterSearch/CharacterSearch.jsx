import { useEffect, useState } from "react";

function CharacterSearch() {
   const [charactersList, setChararctersList] = useState([]);
   const [nombre, setNombre] = useState("");
   const [loading, setLoading] = useState(true);

   const fetchData = async (nombre = "") => {
      const namePrameter = `name=${ nombre }`;
      setLoading(true);
      const resp = await fetch(`https://rickandmortyapi.com/api/character?${ nombre === "" ? "" : namePrameter }`);
      const respJson = await resp.json();

      console.log(respJson);

      setChararctersList(respJson.results.map(c =>
         <div key={ c.id } className="overflow-hidden rounded-md shadow-xl">
            <img src={ c.image } alt={ c.image } className="w-full"/>
            <div className="flex flex-col">
               <p><span>Nombre: </span>{ c.name }</p>
               <p><span>Estado: </span>{ c.status }</p>
               <p><span>Especie: </span>{ c.species }</p>
               <p><span>Género: </span>{ c.gender }</p>
            </div>
         </div>
      ));
      setLoading(false);
   }

   const handleClick = () => {
      fetchData(nombre);
   }

   useEffect(() => { fetchData() }, []);

   return (
      <>
         <h1 className="font-bold text-2xl">Consulta tu Personaje de Rick and Morty</h1>
         <div className="flex items-center gap-2">
            <label htmlFor="">Buscar por Nombre: </label>
            <input type="text" value={ nombre } onChange={ e => setNombre(e.target.value) } className="text-control" />
            <button onClick={ handleClick } className="rounded-md bg-red-500 text-white py-2 px-4">Consultar</button>
         </div>
         { loading && <p className="font-bold text-center">Cargando...</p> }
         <div className="p-2 grid gap-2" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
            { charactersList }
         </div>
      </>
   );
}

export default CharacterSearch;

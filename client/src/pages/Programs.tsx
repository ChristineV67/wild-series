import { useEffect, useState } from "react";
import type { programType } from "../lib/definitions";

export default function Programs() {
  const [program, setProgram] = useState<programType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setProgram(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        {program.map((p) => (
          <section key={p.id}>
            <img src={p.poster} alt={`affiche de la serie ${p.title}`} />
            <h2>Titre : {p.title}</h2>
            <p>Synopsis : {p.synopsis}</p>
            <p> Pays d'origine : {p.country}</p>
            <p>Année de production : {p.year}</p>
          </section>
        ))}
      </div>
    </>
  );
}

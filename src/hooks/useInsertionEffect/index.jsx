import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

const UseInsertionEffect = () => {
  useInsertionEffect(() => {
    console.log("UseInsertionEffect dispath");
  }, []);

  useEffect(() => {
    console.log("UseEffect dispath");
  }, []);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect dispath");
  }, []);

  return (
    <div>
      <h1 className="titulo">UseInsertionEffect testes:</h1>

      {console.log("Teste inicial")}

      <p className="texto">
        A assinatura é idêntica a useEffect, mas é acionada de forma síncrona
        antes de todas as mutações do DOM. Use isso para injetar estilos no DOM
        antes de ler o layout em useLayoutEffect. Como esse gancho é limitado em
        escopo, ele não tem acesso a refs e não pode agendar atualizações.
      </p>

      <ul>
        <li>
          useInsertionEffectdeve ser limitado aos autores da biblioteca
          css-in-js. Prefira useEffect ou useLayoutEffect em vez disso.
        </li>
      </ul>
    </div>
  );
};

export default UseInsertionEffect;

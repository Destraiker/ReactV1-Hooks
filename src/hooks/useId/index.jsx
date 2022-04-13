import { useState, useId } from "react";

const UseIdComponentePrime = () => {
  const [state, setState] = useState(false);
  const idPai = useId();

  return (
    <div>
      <h1 className="titulo">UseID testes:</h1>

      <div className="texto">
        UseId 00 -{">"} <span>{idPai}</span>
      </div>

      <div className="texto">
        <label htmlFor={idPai}>Disparar State: </label>
        <button id={idPai} onClick={() => setState(!state)}>
          GO
        </button>
      </div>

      {state ? <UseIdComponente /> : undefined}
    </div>
  );
};

const UseIdComponente = () => {
  const idTestes = {
    id1: useId(),
    id2: useId(),
    id3: useId(),
    id4: useId(),
    id5: useId(),
  };

  return (
    <div>
      <div className="flex-list">
        <div>
          UseId 01 -{">"} <span>{idTestes.id1}</span>
        </div>
        <div>
          UseId 02 -{">"} <span>{idTestes.id2}</span>
        </div>
        <div>
          UseId 03 -{">"} <span>{idTestes.id3}</span>
        </div>
        <div>
          UseId 04 -{">"} <span>{idTestes.id4}</span>
        </div>
        <div>
          UseId 05 -{">"} <span>{idTestes.id5}</span>
        </div>
      </div>

      <div className="flex-list">
        <div>
          <label htmlFor={idTestes.id1}>Com useId</label>
          <input id={idTestes.id1} type="checkbox" name="react" />
        </div>

        <div>
          <label htmlFor={1}>Sem useId</label>
          <input id={1} type="checkbox" name="react" />
        </div>
      </div>

      <div className="texto">
        <p>
          useId é um gancho para gerar IDs exclusivos que são estáveis ​​no
          servidor e no cliente, evitando incompatibilidades de hidratação.
        </p>

        <p>Obs:</p>

        <ul>
          <li>A cada rendenizacao do componente o useId e alterado</li>
          <li>
            Para vários IDs no mesmo componente, anexe um sufixo usando o mesmo
            id: <b>Ex: {`{id + '-firstName'} e {id + '-lastName'}`}</b>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default UseIdComponentePrime;

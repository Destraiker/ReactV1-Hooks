import { Suspense, useDeferredValue, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseDeferredValue = () => {
  const [state, setState] = useState("");

  const history = useNavigate();

  const deferredQuery = useDeferredValue(state);

  // Memoizing tells React to only re-render when deferredQuery changes,
  // not when query changes.
  const suggestions = useMemo(
    () => <Sugestions query={deferredQuery} id="01" />,
    [deferredQuery]
  );

  return (
    <div>
      <h1 className="titulo">UseDeferredValue testes:</h1>

      <div className="texto">
        <label>Disparar State: </label>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />

        <button
          onClick={() =>
            history(`/usedeferredvalue/${state}`, { replace: true })
          }
        >
          GO
        </button>
      </div>

      <Suspense fallback="Loading results...">{suggestions}</Suspense>
    </div>
  );
};

const Sugestions = ({ query, id }) => {
  console.log("RERENDER: Sugestions", id);
  return (
    <div className="texto">
      <div> Query param: </div>
      <div>{query}</div>
    </div>
  );
};

export default UseDeferredValue;

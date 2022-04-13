import "./App.css";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import UseIdComponente from "./hooks/useId";
import UseDeferredValue from "./hooks/useDeferredValue";
import UseInsertionEffect from "./hooks/useInsertionEffect";
import UseSyncExternalStore from "./hooks/useSyncExternalStore";
import UseTransicao from "./hooks/useTransicao";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <nav className="flex-nav">
            <Link to="/useid">UseId</Link>
            <Link to="/useinsertioneffect">UseInsertionEffect</Link>
            <Link to="/usedeferredvalue">UseDeferredValue</Link>
            <Link to="/usesyncexternalstore">UseSyncExternalStore</Link>
            <Link to="/usetransicao">UseTransicao</Link>
          </nav>

          <Routes>
            <Route path="/useid" element={<UseIdComponente />} />
            <Route
              path="/useinsertioneffect"
              element={<UseInsertionEffect />}
            />
            <Route path="/usedeferredvalue" element={<UseDeferredValue />} />
            <Route
              path="/usesyncexternalstore"
              element={<UseSyncExternalStore />}
            />
            <Route path="/usetransicao" element={<UseTransicao />} />
            <Route path="*" element={<UseIdComponente />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

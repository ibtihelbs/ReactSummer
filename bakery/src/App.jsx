import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCake } from "./store/actions";
function App() {
  const cake = useSelector((state) => state.cake);
  console.log(cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>the shop</h1>
      <ul>
        <li style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <h1>Cake</h1>
          <span> {cake} </span>
          <button
            onClick={() => {
              dispatch(buyCake(5));
            }}
          >
            buy
          </button>
          <button onClick={() => dispatch(restockCake(10))}>restock</button>
        </li>

        <li style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <h1>Ice cream</h1>
          <span>8</span>
          <button>buy</button>
          <button>restock</button>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <h1>bread</h1>
          <span>10</span>
          <button>buy</button>
          <button>restock</button>
        </li>
      </ul>
    </div>
  );
}

export default App;

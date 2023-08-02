import React from "react";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Ammount:${amount}</h3>
        <h3>Points:${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          Init Account
        </button>
      </div>
    </div>
  );
};

// const Account = () => {
//   const [account, setAccount] = React.useState({ amount: 0 });
//   const [value, setValue] = React.useState(0);

//   const increment = () => {
//     setAccount({ amount: account.amount + 1 });
//   };

//   const decrement = () => {
//     setAccount({ amount: account.amount - 1 });
//   };

//   const incrementByAmount = () => {
//     setAccount({ amount: account.amount + value });
//   };

//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <b>Account Component</b>
//         </h4>
//         <h3>Ammount:${account.amount}</h3>
//         <button onClick={increment}>Increment +</button>
//         <button onClick={decrement}>Decrement -</button>
//         <input type="text" onChange={(e) => setValue(+e.target.value)} />
//         <button onClick={() => incrementByAmount(value)}>
//           Increment By {value} +
//         </button>
//       </div>
//     </div>
//   );
// };

export default Account;

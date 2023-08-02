import React from "react";
import { incrementBonus } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Amount : ${amount}</h3>

        <h3>Total Points : {points}</h3>

        <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
};

// const Bonus = ({ store }) => {
//   const [points, setPoints] = React.useState({ value: 0 });

//   const increment = () => {
//     setPoints({ value: points.value + 1 });
//   };
//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <b>Bonus Component</b>
//         </h4>
//         <h3>Total Points : {store.getState().bonus.points}</h3>
//         <button onClick={() => store.dispatch(incrementBonus())}>
//           Increment
//         </button>
//       </div>
//     </div>
//   );
// };

export default Bonus;

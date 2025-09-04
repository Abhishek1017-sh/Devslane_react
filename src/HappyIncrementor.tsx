import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { happyButtonClicked } from "./actions";

type HappyIncrementorProps = {};
const HappyIncrementor: FC<HappyIncrementorProps> = (props) => {
  const dispatch=useDispatch();
  function increment() {
    dispatch(happyButtonClicked);
  }
  return <div>
    <h3>Are you Happy?</h3>
    <button onClick={increment} className="bg-orange-500 px-2 py-1 rounded text-white hover:bg-orange-700">Yes</button>
  </div>;
}

export default memo(HappyIncrementor);

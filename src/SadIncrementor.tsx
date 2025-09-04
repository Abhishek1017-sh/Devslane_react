import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions";

type SadIncrementorProps = {};
const SadIncrementor: FC<SadIncrementorProps> = (props) => {
  const dispatch=useDispatch();
  function increment() {
    dispatch(sadButtonClicked);
  }
  return <div>
    <h3>Are you Sad?</h3>
    <button onClick={increment} className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-700">Yes</button>
  </div>;
}

export default memo(SadIncrementor);

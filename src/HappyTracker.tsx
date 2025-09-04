import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector } from "./selector";

type HappyTrackerProps = {};
const HappyTracker: FC<HappyTrackerProps> = (props) => {
  const happyCount=useSelector(happyCountSelector)
  return <div className="bg-orange-500 px-8 py-4">
    You were happy {happyCount} times today!
  </div>;
}

export default memo(HappyTracker);

import { FC, memo, use } from "react";
import { useSelector } from "react-redux";
import { sadCountSelector } from "./selector";

type SadTrackerProps = {};
const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadCount=useSelector(sadCountSelector);
  return <div className="bg-blue-500 px-8 py-4 ">
    Yor were sad {sadCount} times today!
  </div>;
}

export default memo(SadTracker);

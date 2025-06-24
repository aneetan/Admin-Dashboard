import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface StatsCardProps{
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: string;
}

const StatsCard = (props: StatsCardProps) => {
  return (
    <div className="bg-white pl-6  py-6 flex justify-center items-center rounded-xl shadow-sm dark:bg-gray-600">
      <div className="flex justify-between w-[80%] items-start">
        <div>
          <p className="text-base font-semibold text-gray-500 dark:text-gray-400">{props.title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1 dark:text-gray-200">{props.value}</h3>
          <p className={` flex items-center text-base font-regular mt-2 ${props.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {props.change}
            {props.isPositive? (
                <FaArrowUp className="pl-1"/>
            ): (
                <FaArrowDown className="pl-1"/>
            )}
          </p>
          <span className="text-sm text-gray-400"> from last week </span>
        </div>
      </div>
      <div className="w-[20%] pr-18">
            <span className="text-5xl">{props.icon}</span>
        </div>
    </div>
  );
};

export default StatsCard;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function ButtonNotification({ countNofications }: any) {
  return (
    <button className="px-1 relative items-center ">
      <FontAwesomeIcon
        icon={faBell}
        size="xl"
        className="p-3 border border-transparent hover:border-gray-400 hover:rounded-full"
      />
      <span className="absolute top-0 right-2.5 mt-1 text-red-500">
        {countNofications}
      </span>
    </button>
  );
}

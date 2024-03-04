import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Button from '../button/Button'

export default function ButtonNotification({ countNofications }: any) {
    return (
        <Button
            leftIcon={
                <div className="relative items-center">
                    <FontAwesomeIcon
                        icon={faBell}
                        className="h-[1.4rem] w-[1.4rem] p-2 mt-1 border-2 rounded-full border-transparent hover:border-blue-600"
                    />
                    <span className="absolute top-0 right-0 mt-1 text-red-500">
                        {countNofications}
                    </span>
                </div>
            }
        ></Button>
        // <button className="pr-1 relative items-center ">
        //     <FontAwesomeIcon
        //         icon={faBell}
        //         size="xl"
        //         className="p-3 border border-transparent hover:border-gray-400 hover:rounded-full"
        //     />
        //     <span className="absolute top-0 right-2.5 mt-1 text-red-500">
        //         {countNofications}
        //     </span>
        // </button>
    )
}

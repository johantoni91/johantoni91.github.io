import { FaCss3, FaFileExcel, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
const Skills = () => {
    return (
        <>
            <Tooltip id="my-tooltip" place="top" />
            <div className="flex flex-row gap-x-6 max-w-lg my-10">
                <FaHtml5  className="text-4xl font-bold text-orange-300" data-tooltip-id="my-tooltip"
            data-tooltip-content="HTML"/>
                <FaCss3  className="text-4xl font-bold text-blue-500" data-tooltip-id="my-tooltip"
            data-tooltip-content="CSS"/>
                <FaJs  className="text-4xl font-bold text-yellow-700" data-tooltip-id="my-tooltip"
            data-tooltip-content="Javascript"/>
                <FaLaravel className="text-4xl font-bold text-red-700" data-tooltip-id="my-tooltip"
            data-tooltip-content="Laravel"/>
                <FaReact className="text-4xl font-bold text-blue-900" data-tooltip-id="my-tooltip"
            data-tooltip-content="React JS"/>
                <FaPhp className="text-4xl font-bold text-purple-900" data-tooltip-id="my-tooltip"
                    data-tooltip-content="PHP" />
            </div>
        </>
    )
}

export default Skills
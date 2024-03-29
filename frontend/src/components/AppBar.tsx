import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export function AppBar(){
    return <div className="flex justify-between border-b border-slate-300 py-2">
        <div className="text-2xl font-bold pl-5 mt-2">
            <Link to={'/blogs'}>
            Medium
            </Link>
        </div>
        <div className="flex">
        <div className="mr-4 mt-2">
        <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
        </Link>
        </div>
        <div className="mr-4 mt-2">
        <Avatar/>
        </div>
        </div>
    </div>
}
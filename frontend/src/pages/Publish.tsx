import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish =()=>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("")
    const navigate = useNavigate();
    console.log(title)
    console.log(content)
    return <div>
    <AppBar/>
    <div className="flex justify-center pt-8">
    <div className="max-w-screen-lg w-full">
    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" id="helper-text" aria-describedby="helper-text-explanation" 
    className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-black-500 focus:border-slate-500 block w-full p-2.5 h-15 " placeholder="Title"></input>
    <div className="mt-4">
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 focus:border-slate-500 ">
    <div className="px-4 py-2 bg-white rounded-t-lg ">
        <textarea onChange={(e)=>{setContent(e.target.value)}} id="comment" className="outline-none w-full px-0 text-lg text-gray-900 bg-white border-0 border-slate-100 h-80" placeholder="Write a comment..." required />
    </div>
    <div className="flex items-center justify-between px-3 py-2 border-t ">
        <button onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers:{
                    Authorization: "Bearer"+" "+localStorage.getItem("token")
                }  
            })
            navigate(`/blog/${response.data.blogId}`)
        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
            Submit Blog
        </button>
    </div>
    </div>
    </div>
    </div>
    </div>
</div>
}

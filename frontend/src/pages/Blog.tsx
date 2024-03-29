import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { Loader } from "../components/Loader";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export function Blog(){
    let {id} = useParams(); 
    const {loading,blog} = useBlog({
        id: id || " "
    });
    if(loading){
        return <div>
            <AppBar/>
         <div className="flex justify-center h-screen ">
            <div className="flex justify-center flex-col">
            <Loader/>
            </div>   
        </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog || {
    "title": "",
    "content": "",
    "id": "",
    "author": {
        "name": ""
    }
}}/>
    </div>
}
import { blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog =({blog}:{blog:blog})=>{
    return <div>
    <AppBar/>
    <div className="flex justify-center pt-10">
    <div className="grid grid-cols-12 w-full mx-10 px-10 mt-200  max-w-screen-xl">
        <div className="col-span-8">
            <div className="text-5xl font-extrabold ">
                {blog.title}
            </div>
            <div className="pt-4 text-slate-500">
                posted on 23rd may 2023
            </div>
            <div className="pt-4 text-lg text-slate-900 ">
                {blog.content}
            </div>
        </div>
        <div className="col-span-4"> 
            <div>
                <div className="text-lg font-semibold pb-4">
                    Author
                </div>
                <div className="flex">
                <div className="flex flex-col justify-center">
                    <Avatar></Avatar>
                </div>
                <div className="pl-4">
                    <div className=" text-2xl font-bold">
                    {blog.author.name || "Anonymus"}
                    </div>
                    <div className="pt-2 text-slate-500">
                    some random catch phrase about the author to attract users
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </div>
}
import { Link } from "react-router-dom"

interface prop{
    authorName: string,
    title: string,
    content: string,
    publishedDate:string,
    id: string
}
export function Blogcard({authorName,title,content,publishedDate,id}:prop){
    return <Link to={`/blog/${id}`}> 
    <div className="px-8 pt-4 border-b border-slate-200">
        <div className="flex">
        <div className="flex flex-col justify-center  py-2">
        <Avatar/> 
        </div>
        <div className="flex flex-col justify-center pl-2 py-2 font-medium">
        {authorName}
        </div>
        <div className="flex flex-col justify-center pl-2 py-2 font-bold">
            .
        </div>
        <div className="flex flex-col justify-center pl-2 py-2 font-thin ">
        {publishedDate}
        </div>
        </div>
        <div className="text-2xl font-bold mt-2">
            {title}
        </div>
        <div className="text-lg  mt-2" >
            {content.slice(0,100) + "..."}
        </div>
        <div className="text-md mt-4">
            {`${Math.ceil(content.length/100)} minutes`}
        </div>
    </div>
    </Link>
}

export function Avatar(){
    return <div>      
     <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </div>
    </div>
}
import { AppBar } from "../components/AppBar"
import { Blogcard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs =()=>{
    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>
            <AppBar/>
        <div className="flex justify-center h-screen ">
            <div className="flex justify-center flex-col">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>   
        </div>
        </div>
    }
    return <div>
         <AppBar/>
        <div className="flex justify-center ">
        <div className="flex justify-center flex-col max-w-lg w-screen">

        {blogs.map(blog=>
            <Blogcard
            id={blog.id} 
            authorName={blog.author.name || "Anonymus"} 
            title={blog.title} 
            content={blog.content}
            publishedDate={"27 mar 2024"}></Blogcard>
        )}
        </div>
    </div>
    </div>
}
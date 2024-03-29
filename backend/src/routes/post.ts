import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import { verify } from 'hono/jwt';
import { createPostInput } from "@100xdevs/common-app";
import { updatePostInput } from "@100xdevs/common-app";
export const postRouter = new Hono<
{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	},
  Variables:{
    userId: string
  }
}>()

postRouter.use('/*',async (c,next)=>{
    //Bearer token
    const jwt = c.req.header("Authorization") || "";
    if (!jwt) {
          c.status(401);
          return c.json({ error: "unauthorized" });
      }
    const token = jwt.split(" ")[1];
    const payload = await verify(token,c.env.JWT_SECRET);
  
    if(!payload){
      c.status(401);
      return c.json({error: "unauthorized"});
    }
  
    c.set('userId',payload.id);
    await next();
  })
  
  
  
  
  postRouter.post('/',async (c)=>{
    const body = await c.req.json();
    const userId = c.get('userId');

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try{
    const post = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })
    
    return c.json({
        blogId: post.id
    })
    }
    catch(e){
        c.status(411);
        return c.json({mesage: "something went wrong"})
    }
  })

    
  postRouter.put('/',async (c)=>{
    const body = await c.req.json();
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
    const blog =  await prisma.post.update({
            where:{
                id: body.id,
                authorId: userId
            },
            data:{
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            message:"blog updated sucessfully",
            id: blog.id
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message: "something went wrong"})
    }
    
    
  })
  
  postRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
    const posts = await  prisma.post.findMany({
        select:{
            title: true,
            content: true,
            id: true,
            author:{
                select:{
                    name: true
                }
            }
        }
    });
    return c.json({posts})
    }
    catch(e){
        c.status(411)
        return c.json(
            {message:"something went wrong"})
    }
  })
  

  postRouter.get('/:id',async (c)=>{
    const id = c.req.param("id")
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const post = await prisma.post.findFirst({
            where:{
                id: id
            },
            select:{
                title: true,
            content: true,
            id: true,
            author:{
                select:{
                    name: true
                }
            }

            }
        })
        return c.json({post})
    }
    catch(e){
        c.status(411);
        return c.json({message:"could'nt find post"})
    }
    
  })


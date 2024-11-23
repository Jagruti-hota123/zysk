import { MdArrowOutward } from "react-icons/md"
import Section from "./Section"


const Blog = () => {
  return (
    <Section>
        <div className="flex flex-col gap-3 justify-center ">
           
            <div className="flex  justify-between items-center">
                <h1 className="text-purple-600 text-base font-semibold">Our blog</h1>
                <button className="bg-purple-600 text-white  text-lg rounded-md px-6 py-3 md:block hidden">View all posts</button>               
            </div>
            <h1 className="text-4xl font-semibold">Latest blog posts</h1>
            <h1 className="text-xl font-normal text-gray-600">
            Tool and strategies modern teams need to help their companies grow.
            </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6 content-center">
          {
            PicArr.map((e)=>{
              return(
                <div key={e.id} className="flex flex-col justify-center gap-3">
                  <img src={e.img} alt="" />
                  <h1 className="text-sm text-purple-700 font-normal text-start ">{e.text}</h1>
                 <div className="flex  justify-between items-center">
                 <h1 className="text-lg font-semibold text-start">{e.heading}</h1>
                 <MdArrowOutward className="text-lg" />
                 </div>
                  <p className="text-sm text-gray-600 text-start">{e.desc}</p>
                  <div className="flex items-center gap-2">
                    <img src={e.avatar} alt="" className="w-8 h-8" />
                    <div className="flex flex-col gap-[2px]">
                    <h1 className="text-xs font-semibold text-start">{e.name}</h1>
                    <h1 className="text-xs text-gray-500 text-start">{e.date}</h1>
                    </div>
           
                 </div>
                </div>
              )
          })}
        </div>
     
     
    </Section>
    
  )
}

export default Blog

const PicArr=[{
    id:1,
    img:"../blog/1.png",
    text:"Design",
    heading:"UX review presentations",
    desc:"How do you create compelling presentations that wow your colleagues and impress your managers?",
    avatar:"../blog/av1.png",
    name:"Olivia Rhye",
    date:"20 Jan 2024"
},
{
    id:2,
    img:"../blog/2.png",
    text:"Product",
    heading:"Migrating to Linear 101",
    desc:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    avatar:"../blog/av2.png",
    name:"Phoenix Baker",
    date:"19 Jan 2024"
},
{
    id:3,
    img:"../blog/3.png",
    text:"Software Engineering",
    heading:"Building your API stack",
    desc:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    avatar:"../blog/av3.png",
    name:"Lana Steiner",
    date:"18 Jan 2024"
}]

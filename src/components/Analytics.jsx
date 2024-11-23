import Section from "./Section";

const Analytics = () => {
  return (
    <Section className="border-b">
   
    <div className="flex items-center justify-center gap-3 flex-col  w-full h-full"> 
        <h1 className="text-purple-600 text-sm">Features</h1>
        <p className="text-2xl  md:text-start text-center font-semibold">Analytics that feels like it’s from the future</p>
        <p className="text-base md:w-[39vw] w-auto text-center">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
    </div>
   
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-6 mt-16 mb-6 w-full ">
            {cardArr.map((e)=>{
                return(
                    <div key={e.id} className="flex flex-col items-center gap-3 text-center p-4 rounded-lg ">
                        <img src={e.icon} alt="icon" className="w-8 h-8" />
                            <h1 className="text-base text-center font-semibold">{e.title}</h1>
                            <p className="text-sm md:w-[25vw] text-center w-2/3">{e.description}</p>
                    </div>
                )
            })}
        </div>

 

   
      
    </Section>
  )
}

export default Analytics

const cardArr=[
    {
        id:1,
        icon:"../features/1.png",
        title:"Share team inboxes",
        description:"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        id:2,
        icon:"../features/2.png",
        title:"Deliver instant answers",
        description:"An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
        id:3,
        icon:"../features/3.png",
        title:"Manage your team with reports",
        description:"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },{
        id:4,
        icon:"../features/4.png",
        title:"Connect with customers",
        description:"Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },{
        id:5,
        icon:"../features/5.png",
        title:"Connect the tools you already use",
        description:"Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },{
        id:6,
        icon:"../features/6.png",
        title:"Our people make the difference",
        description:"We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
]

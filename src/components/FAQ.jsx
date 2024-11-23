import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Section from "./Section";


const FAQ = () => {
    const arr=[
        {
           id:1,
           text:"Can I change my plan later?"
         
        },
        {
            id:2,
            text:"What is your cancellation policy?"
          
        },
        {
            id:3,
            text:"Can other info be added to an invoice?"
        },
        {
            id:4,
            text:"How does billing work?"
        },{
            id:5,
            text:"How do I change my account email?"
        }
    ]
  return (
    <>
    <Section className="flex flex-col  gap-6 items-center">
    <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold text-center md:text-start">Frequently asked questions</h1>
        <p className="text-lg font-normal text-center md:text-start text-gray-600">Everything you need to know about the product and billing.</p>
    </div>
    <div className="flex flex-col gap-4 md:w-1/2 w-full mt-6">
        <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Is there a free trial available?</h1>
        <CiCircleMinus  className="text-base text-gray-600"/>
        </div>
        
        <p className="text-sm text-gray-700 font-normal ">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
         <hr/>
        <div className="flex flex-col justify-center gap-5">
            {arr.map((e)=>{
                return(
                    <>
                      <div key={e.id} className="flex justify-between items-center">
                           <h1 className="text-lg font-semibold">{e.text}</h1>
                           <CiCirclePlus className="text-base font-semibold text-gray-500" />
                         
                    </div>
                    <hr />
                    </>
                  
                     
                 
                )
            })

            }
        </div>
    </div>

    <Section className="bg-gray-100 w-full h-full flex flex-col items-center justify-center gap-3 rounded-md p-4 ">
        <img src="avatarfgrp.png" alt="" className="w-32 h-14" />
        <h1 className="text-lg font-semibold">Still have questions?</h1>
        <p className="text-base text-gray-500 text-center md:text-start">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className="bg-purple-600 text-white w-80 md:w-fit font-medium text-sm md:text-lg rounded-lg px-7 py-4 flex items-center justify-center ">Get in touch</button>
    </Section>
  

    </Section>
    </>
  
     
  )
}

export default FAQ;



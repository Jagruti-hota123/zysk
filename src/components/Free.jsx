import Section from "./Section"

const Free = () => {
  return (
    <Section className="bg-gray-100 w-full h-full flex flex-col items-center justify-center gap-4 rounded-md p-4">
    <h1 className="text-3xl font-bold">Start your free trial</h1>
    <p className="text-base text-gray-500">Join over 4,000+ startups already growing with Untitled.</p>
    <div className="flex gap-4 md:flex-row flex-col-reverse w-80 md:w-fit ">
    <button className="md:text-lg text-sm rounded-md  text-gray-600 border bg-white px-6 py-3 flex items-center justify-center font-semibold">Learn More</button>
    <button className="bg-purple-600 md:text-lg text-sm text-white rounded-lg px-6 py-3 flex items-center justify-center shadow-md hover:bg-purple-700 transition duration-300">Get Started</button>
    </div>
    

</Section>
  )
}

export default Free;

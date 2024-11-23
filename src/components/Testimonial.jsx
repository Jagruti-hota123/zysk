import Section from "./Section";

const Testimonial = () => {
  return (
    <Section className="bg-gray-50 flex items-center justify-center flex-col gap-5 border-b">
      <img src="sishyphus.png" alt="" className="w-36 h-10"/>
      <p className="md:text-4xl text-3xl font-semibold  text-center">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
      <div className="flex items-center gap-[0.5] flex-col">
        <img src="Avatar.png" alt="" className="w-16 h-16 rounded-full" />
        <h1 className="text-lg font-semibold">Candice Wu</h1>
        <h2 className="text-sm font-thin">Project Manager , Sisyphus</h2>
      </div>
    </Section>
  )
}

export default Testimonial;


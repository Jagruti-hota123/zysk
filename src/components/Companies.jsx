import Section from "./Section"
let imageArr = [
    { id: 1, img: "../homePage/1.png" },
    { id: 2, img: "../homePage/2.png" },
    { id: 3, img: "../homePage/3.png" },
    { id: 4, img: "../homePage/4.png" },
    { id: 5, img: "../homePage/5.png" },
    { id: 6, img: "../homePage/6.png" },
  ];
const Companies = () => {
  return (
    <Section>
   <div className="flex flex-col items-center gap-5 py-10 mb-8">
    <h1 className="text-base text-gray-700 text-center">
      Join 4,000+ companies already growing
    </h1>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {imageArr.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt="" className="w-[127.5px] h-[36px] md:w-[166px] md:h-[44px]" />
        </div>
      ))}
    </div>
  </div>
  <hr />
    </Section>
 
  )
}

export default Companies

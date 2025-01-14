import Image from "next/image";




export default function(){
    return (
        <div className="grid grid-cols-2 max-lg:px-6 max-lg:grid-cols-1 border px-20 max-sm:px-4 bg-zinc-100 py-20 pt-10 space-x-4 max-lg:space-x-0 max-lg:space-y-4 text-black">
        <div className="max-lg:mb-4">
         <Image className="shadow-lg rounded-md" src={"/Temp.jpg"} alt="Loading..." height={1000} width={1000}/>
         <Image className="shadow-lg rounded-md mt-2" src={"/Theme.png"} alt="Loading..." height={1000} width={1000}/>
        </div>
        <div className="border px-4 py-6 shadow-lg rounded-lg text-sm font-serif bg-white">
          <div className="text-4xl max-sm:text-2xl max-lg:text-2xl font-bold mb-8">About Conference</div>
          <div className="overflow-y-auto">
              <div className="h-[645px]">
              <p className="text-justify">The International Conference on Innovations and Sustainability in Civil Engineering: Shaping Tomorrow’s Infrastructure sounds like an important event focused on advancing the field of civil engineering. It would likely bring together experts, researchers, engineers, and industry professionals to explore the latest innovations and sustainable practices in civil engineering. Such a conference could cover a wide range of topics, including:</p>
              <br></br>
              <p className="text-justify">Sustainable Infrastructure: Exploring how civil engineering can contribute to environmentally sustainable infrastructure, such as green buildings, energy-efficient transportation systems, and sustainable water management.</p>
              <br></br>
              <p className="text-justify">Smart Cities and Technology: Discussing the role of emerging technologies like IoT (Internet of Things), AI (Artificial Intelligence), and robotics in designing, constructing, and maintaining smart infrastructure that is efficient, adaptive, and connected.</p>
              <br></br>
              <p className="text-justify">Innovative Construction Materials and Techniques: Presenting new materials and techniques that enhance construction efficiency, durability, and sustainability. This could include advancements in low-carbon concrete, recyclable materials, 3D printing in construction, and modular construction.</p>
              <br></br>
              <p className="text-justify">Climate Change and Resilience: Addressing how civil engineering can adapt infrastructure to the challenges posed by climate change, such as rising sea levels, extreme weather events, and heat islands. This could involve designing more resilient buildings, roads, bridges, and other infrastructure.</p>
              <br></br>
              <p className="text-justify">Sustainable Transportation: Exploring advancements in transportation infrastructure that support sustainability, such as electric vehicles, public transit networks, and low-emission transportation systems.</p>
              <br></br>
              <p className="text-justify">Circular Economy in Civil Engineering: Introducing circular economy concepts in construction, where materials are reused, recycled, or repurposed, and waste is minimized.</p>
              <br></br>
              <p className="text-justify">Urbanization and Infrastructure Development: Discussing how to efficiently and sustainably meet the growing demand for urban infrastructure, including water, energy, and waste management systems.</p>
              <br></br>
              <p className="text-justify">Policy, Funding, and Global Cooperation: Exploring the role of policy and global cooperation in facilitating the transition to more sustainable infrastructure development, as well as examining new models for funding large-scale infrastructure projects.</p>
              <br></br>
              <p className="text-justify">If you&apos;re attending or interested in participating, it&apos;s likely that the conference would provide a platform for sharing research, best practices, and collaborations between academia, government, and industry to shape the future of civil engineering in a sustainable and innovative way.</p>
            </div>
          </div>
        </div>
      </div>
    )
}
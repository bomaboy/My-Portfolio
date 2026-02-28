const skills = [
  { name: "3D Modeling", image: "Image10" },
  { name: "Texturing & UV Mapping", image: "Image11" },
  { name: "Rigging & Skinning", image: "Image12" },
  { name: "Animation", image: "Image13" },
  { name: "Lighting & Rendering", image: "Image14" },
  { name: "Physics Simulations", image: "Image15" },
  { name: "Storytelling & Composition", image: "Image16" },
  { name: "Problem-Solving & Adaptability", image: "Image17" },
];

export default function Skills() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-900 flex justify-center">
      <div className="w-[90%] max-w-7xl flex flex-col items-center gap-16">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white tracking-wide">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 
                         rounded-2xl p-6 flex flex-col items-center 
                         transition-all duration-300 
                         hover:scale-105 hover:border-blue-500 hover:shadow-xl"
            >
              {/* Image */}
              <div
                className={`${skill.image} w-[100%] h-[50vh] mb-6 
                            transition-transform duration-300 
                            group-hover:rotate-6`}
              ></div>

              {/* Text */}
              <p className="text-white text-center font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

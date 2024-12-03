import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiCplusplus } from "react-icons/si";

const Skill = () => {
  const skills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" /> },
    { id: 2, name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
    { id: 4, name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    { id: 5, name: "React.js", icon: <FaReact size={40} className="text-blue-400" /> },
    { id: 6, name: "Python", icon: <SiPython size={40} className="text-blue-600" /> },
    { id: 7, name: "C++", icon: <SiCplusplus size={40} className="text-blue-800" /> },
    { id: 8, name: "DSA", icon: <FaDatabase size={40} className="text-green-500" /> },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        
        <div className="flex flex-col items-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Skills
          </p>
          <p className="mt-4 text-lg text-center">
            Here are some technologies I am proficient in:
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-4 sm:px-0">
          {skills.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-violet-500/50"
            >
              <div className="bg-gray-800 p-6 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
                {icon}
              </div>
              <p className="mt-4 text-lg">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;

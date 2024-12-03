import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Development Internship",
      company: "CodSoft",
      duration: "1 Nov 2024 - 31 Nov 2024",
      description:
        "I enhanced my web development skills by building dynamic and responsive web pages using HTML, CSS, and JavaScript.",
      certificateLink: "/codsoft.pdf",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-12 overflow-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
       
        <div className="flex flex-col items-center mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Experience
          </p>
          <p className="py-4 text-lg text-center">
            Here is my experience in various roles along with certificates:
          </p>
        </div>

        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {experiences.map(
            ({ id, title, company, duration, description, certificateLink }) => (
              <div
                key={id}
                className="bg-gray-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full mx-auto"
                style={{ boxSizing: "border-box" }}
              >
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-lg mb-2">
                  <strong>Company:</strong> {company}
                </p>
                <p className="text-lg mb-2">
                  <strong>Duration:</strong> {duration}
                </p>
                <p className="py-2 text-lg mb-4">{description}</p>
                <a
                  href={certificateLink}
                  download
                  className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
                >
                  View Certificate
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

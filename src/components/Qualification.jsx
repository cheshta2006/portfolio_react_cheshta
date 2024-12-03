import React from "react";

const Qualification = () => {
  return (
    <div
      name="qualification"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-10"
    >
      <div className="max-w-screen-lg px-4 mx-auto">
       
        <div className="mb-6 text-center">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Qualification
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-white border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-teal-500">
              <tr>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Degree</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Institute</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Year</th>
                <th className="px-4 py-2 text-sm sm:text-lg font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white hover:bg-indigo-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">B.Tech</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">Hi-Tech Institute of Engineering & Technology, Ghaziabad</td>
                <td className="px-4 py-3 text-sm sm:text-base">2023-2027</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">8.32 SGPA</td>
              </tr>
              <tr className="border-t border-white hover:bg-indigo-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">Intermediate</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">Saraswati Shiksha Niketan Inter College, Ghaziabad
                </td>
                <td className="px-4 py-3 text-sm sm:text-base">2021-2023</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">79.2%</td>
              </tr>
              <tr className="border-t border-white hover:bg-indigo-700">
                <td className="px-4 py-3 text-sm sm:text-base truncate">High School</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">Leelawati Public School Pratap Vihar, Ghaziabad</td>
                <td className="px-4 py-3 text-sm sm:text-base">2019-2021</td>
                <td className="px-4 py-3 text-sm sm:text-base truncate">83%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Qualification;

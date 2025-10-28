export default function Page() {
  return (
    // Use a container with some padding, a nice background, and centered text
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      {/* Main Heading: Large, bold, and distinct color */}
      <h1 className="text-5xl text-rose-500 mb-2 mt-4">
        Payroll
      </h1>

      {/* Sub-heading: Slightly smaller and muted */}
      <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b-2 border-indigo-300 pb-1">
        Part 1 of Final
      </h2>

      {/* Paragraph: Standard text with some margin */}
      <p className="text-lg text-gray-700 mb-8">
        Payroll App for Acc 341
      </p>

      {/* Button: Primary call-to-action styling: rounded, background color, hover effect, padding */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Clock In
      </button>
    </div>
  );
}
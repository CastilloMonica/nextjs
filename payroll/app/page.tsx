import ClockSystem from "@/components/ui/ClockSystem";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20 px-4">

      <h1 className="text-5xl font-bold text-rose-600 mb-2">Payroll</h1>

      <h2 className="text-2xl font-semibold text-gray-600 mb-6 border-b-2 border-indigo-300 pb-1">
        Part 1 of Final
      </h2>

      <p className="text-lg text-gray-700 mb-10">
        Payroll App for Acct 343
      </p>

      <ClockSystem />
    </div>
  );
}

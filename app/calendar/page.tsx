import { dailyRecords } from "@/data/daily";

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-6 py-16">
      <h1 className="text-4xl font-bold text-center tracking-widest mb-12">
        Daily Archive Calendar
      </h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {dailyRecords.map((item) => (
          <div
            key={item.date}
            className="bg-white rounded-3xl p-6 shadow-sm hover:scale-105 transition"
          >
            <div
              className="w-12 h-12 rounded-full mb-4"
              style={{ backgroundColor: item.colorCode }}
            />

            <h2 className="text-xl font-bold">
              {item.date}
            </h2>

            <p className="mt-3">
              {item.color}
            </p>

            <p className="text-sm opacity-70 mt-2">
              {item.keywords}
            </p>

            <a
              href="/daily"
              className="inline-block mt-5 text-sm text-[#D99A00]"
            >
              查看记录 →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
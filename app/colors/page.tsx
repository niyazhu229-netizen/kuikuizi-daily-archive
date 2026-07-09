import { dailyRecords } from "@/data/daily";

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest">
        🎨 色彩档案
      </h1>

      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">

        {dailyRecords.map((item) => (

          <div
            key={item.date}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >

            <p className="opacity-60">
              📅 {item.date}
            </p>


            <div className="mt-6">

              <p className="mb-3">
                🎨 颜色
              </p>

              <div
                className="w-16 h-16 rounded-full border"
                style={{
                  backgroundColor: item.colorCode
                }}
              />

              <p className="mt-3 text-lg font-bold">
                {item.color}
              </p>

            </div>


            <p className="mt-6">
              🏷️ {item.keywords}
            </p>


            <a
              href="/daily"
              className="inline-block mt-6 text-[#D99A00]"
            >
              查看记录 →
            </a>


          </div>

        ))}

      </section>

    </main>
  );
}
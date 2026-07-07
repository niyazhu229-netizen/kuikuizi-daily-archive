import { dailyRecords } from "@/data/daily";

export default function DailyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest">
        🌻 每日记录
      </h1>


      <section className="max-w-5xl mx-auto grid gap-8">

        {dailyRecords.map((item) => (

          <div
            key={item.date}
            className="bg-white rounded-3xl p-8 shadow-sm"
          >

            <p className="opacity-60">
              {item.date}
            </p>


            <h2 className="text-2xl font-bold mt-4">
              ✨ 今日妆造
            </h2>


            {item.image && (
              <img
                src={item.image}
                alt={item.date}
                className="w-full rounded-3xl mt-6"
              />
            )}


            <div className="mt-8 space-y-3">

              <p>
                🎨 今日代表色：
                <span className="font-bold ml-2">
                  {item.color}
                </span>
              </p>


              <p>
                👗 穿搭关键词：
                {item.keywords}
              </p>


              <p>
                💃 舞蹈记录：
                {item.dance.name}
              </p>


              <p>
                📝 小记：
                {item.note}
              </p>

            </div>


          </div>

        ))}

      </section>


    </main>
  );
}
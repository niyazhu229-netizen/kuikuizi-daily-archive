import Link from "next/link";
import { dailyRecords } from "@/data/daily";

export default function DailyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">

      <h1 className="mb-12 text-center text-4xl font-bold tracking-widest">
        🌻 每日记录
      </h1>

      <section className="mx-auto grid max-w-5xl gap-8">

        {dailyRecords.map((item) => (

          <div
            key={item.date}
            className="rounded-3xl bg-white p-8 shadow-sm"
          >

            {/* 日期 */}
            <p className="opacity-60">
              {item.date}
            </p >

            {/* 今日妆造 */}
            <h2 className="mt-4 text-2xl font-bold">
              ✨ 今日妆造
            </h2>

            {/* 图片 */}
            {item.image && (
              <img
                src={item.image}
                alt={item.date}
                className="mt-6 w-full rounded-3xl"
              />
            )}

            {/* 记录信息 */}
            <div className="mt-8 space-y-3">

              {/* 今日代表色 */}
              <p>
                🎨 今日代表色：
                <span className="ml-2 font-bold">
                  {item.color}
                </span>
              </p >

              {/* 穿搭关键词 */}
              <p>
                👗 穿搭关键词：
                <span className="ml-2">
                  {item.keywords}
                </span>
              </p >

              {/* 舞蹈记录 */}
              <p>
                💃 舞蹈记录：

                {item.dance?.video ? (
                  <Link
                    href={`/dance/${item.date.replace(/\./g, "-")}`}
                    className="ml-2 font-bold text-[#D9A900] transition hover:opacity-70 hover:underline"
                  >
                    {item.dance.name} →
                  </Link>
                ) : (
                  <span className="ml-2 opacity-40">
                    暂无舞蹈视频
                  </span>
                )}

              </p >

              {/* 小记 */}
              <p>
                📝 小记：
                <span className="ml-2">
                  {item.note}
                </span>
              </p >

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}
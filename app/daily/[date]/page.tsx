import Link from "next/link";
import { dailyRecords } from "@/data/daily";
export default async function DailyDetailPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const formattedDate = date.replace(/-/g, ".");
  const item = dailyRecords.find(
    (record) => record.date === formattedDate
  );
  if (!item) {
    return (
      <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold">
            🌻 找不到这一天的记录
          </h1>
          <p className="mt-4 opacity-60">
            暂时没有找到 {formattedDate} 的记录。
          </p >
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-widest">
        🌻 每日记录
      </h1>
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-10">
        {/* 日期 */}
        <div className="text-center">
          <p className="opacity-60">
            {item.date}
          </p >
          <h2 className="mt-3 text-3xl font-bold">
            ✨ 今日妆造
          </h2>
        </div>
        {/* 图片 */}
        {item.image && (
          <img
            src={item.image}
            alt={item.date}
            className="mt-8 w-full rounded-3xl"
          />
        )}
        <div className="mt-8 space-y-5">
          {/* 今日代表色 */}
          <div className="rounded-2xl bg-[#FFF9EE] p-6">
            <p className="font-bold">
              🎨 今日代表色
            </p >
            <div className="mt-4 flex items-center gap-4">
              <div
                className="h-14 w-14 rounded-full border"
                style={{ backgroundColor: item.colorCode }}
              />
              <div>
                <p className="text-lg font-bold">
                  {item.color}
                </p >
                <p className="opacity-60">
                  {item.colorCode}
                </p >
              </div>
            </div>
          </div>
          {/* 风格关键词 */}
          <div className="rounded-2xl bg-[#FFF9EE] p-6">
            <p className="font-bold">
              🏷️ 风格关键词
            </p >
            <p className="mt-2">
              {item.keywords}
            </p >
          </div>
          {/* 今日舞蹈 */}
          {item.dance?.video ? (
            <Link
              href={`/dance?date=${item.date.replace(/\./g, "-")}`}
              className="block rounded-2xl bg-[#FFF9EE] p-6 transition hover:shadow-md"
            >
              <p className="font-bold">
                💃 今日舞蹈
              </p >
              <p className="mt-2 font-medium">
                {item.dance.name}
              </p >
              {item.dance.note && (
                <p className="mt-2 opacity-60">
                  {item.dance.note}
                </p >
              )}
              <p className="mt-4 text-sm text-[#D9A900]">
                点击查看当天舞蹈记录 →
              </p >
            </Link>
          ) : (
            <div className="rounded-2xl bg-[#FFF9EE] p-6">
              <p className="font-bold">
                💃 今日舞蹈
              </p >
              <p className="mt-2 opacity-40">
                暂无舞蹈视频
              </p >
            </div>
          )}
          {/* 今日记录 */}
          <div className="rounded-2xl bg-[#FFF9EE] p-6">
            <p className="font-bold">
              📝 今日记录
            </p >
            <p className="mt-2">
              {item.note}
            </p >
          </div>
        </div>
      </section>
    </main>
  );
}
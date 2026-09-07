import { dailyRecords } from "@/data/daily";

export default async function DanceDetailPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  const formattedDate = date.replace(/-/g, ".");

  const item = dailyRecords.find(
    (record) => record.date === formattedDate
  );

  if (!item || !item.dance?.video) {
    return (
      <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold">
            🌻 找不到这一天的舞蹈记录
          </h1>

          <p className="mt-4 opacity-60">
            暂时没有找到 {formattedDate} 的舞蹈记录。
          </p >
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">

      <h1 className="mb-12 text-center text-4xl font-bold tracking-widest">
        💃 舞蹈记录
      </h1>

      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-10">

        {/* 日期 */}
        <div className="text-center">
          <p className="opacity-60">
            {item.date}
          </p >

          <h2 className="mt-3 text-3xl font-bold">
            🎵 {item.dance.name}
          </h2>
        </div>

        {/* 视频 */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold">
            🎬 视频记录
          </h3>

          <video
            src={item.dance.video}
            controls
            playsInline
            className="mt-4 w-full rounded-2xl"
          />
        </div>

        {/* 备注 */}
        {item.dance.note && (
          <div className="mt-8 rounded-2xl bg-[#FFF9EE] p-6">
            <p className="font-bold">
              📝 备注
            </p >

            <p className="mt-2 opacity-70">
              {item.dance.note}
            </p >
          </div>
        )}

      </section>

    </main>
  );
}
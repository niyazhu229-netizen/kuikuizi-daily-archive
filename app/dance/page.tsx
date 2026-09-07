import { dailyRecords } from "@/data/daily";

export default async function DancePage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) {
  const params = await searchParams;

  const selectedDate = params.date;

  const selectedRecord = selectedDate
    ? dailyRecords.find(
        (item) =>
          item.date.replace(/\./g, "-") === selectedDate
      )
    : null;

  const recordsToShow = selectedRecord
    ? [selectedRecord]
    : dailyRecords.filter((item) => item.dance?.video);

  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16 text-[#5A4636]">

      {/* 标题 */}
      <h1 className="mb-12 text-center text-4xl font-bold tracking-widest">
        💃 舞蹈记录
      </h1>

      <section className="mx-auto max-w-4xl space-y-8">

        {recordsToShow.map((item) => (

          <div
            key={item.date}
            className="rounded-3xl bg-white p-8 shadow-sm"
          >

            {/* 日期 */}
            <p className="opacity-60">
              {item.date}
            </p >

            {/* 舞蹈名称 */}
            <h2 className="mt-4 text-2xl font-bold">
              🎵 舞蹈名称
            </h2>

            <p className="mt-4 text-lg font-medium">
              {item.dance.name}
            </p >

            {/* 视频 */}
            {item.dance.video && (
              <>
                <h2 className="mt-8 text-2xl font-bold">
                  🎬 视频记录
                </h2>

                <video
                  src={item.dance.video}
                  controls
                  playsInline
                  className="mt-4 w-full rounded-2xl"
                />
              </>
            )}

            {/* 备注 */}
            {item.dance.note && (
              <>
                <h2 className="mt-8 text-2xl font-bold">
                  📝 备注
                </h2>

                <p className="mt-4 opacity-70">
                  {item.dance.note}
                </p >
              </>
            )}

          </div>

        ))}

        {/* 找不到记录 */}
        {selectedDate && !selectedRecord && (
          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <p className="text-lg">
              🌻 没有找到 {selectedDate.replace(/-/g, ".")} 的舞蹈记录
            </p >
          </div>
        )}

      </section>

    </main>
  );
}
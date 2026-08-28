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
      <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
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
    <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest">
        🌻 Daily Record
      </h1>

      <section className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm">

        <div className="text-center">
          <p className="opacity-60">
            {item.date}
          </p >

          <h2 className="text-3xl font-bold mt-3">
            ✨ Daily Outfit
          </h2>
        </div>

        {item.image && (
          <img
            src={item.image}
            alt={item.date}
            className="w-full rounded-3xl mt-8"
          />
        )}

        <div className="mt-8 space-y-5">

          <div className="bg-[#FFF9EE] rounded-2xl p-6">
            <p className="font-bold">
              🎨 Representative Color
            </p >

            <div className="flex items-center gap-4 mt-4">
              <div
                className="w-14 h-14 rounded-full border"
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

          <div className="bg-[#FFF9EE] rounded-2xl p-6">
            <p className="font-bold">
              🏷️ Style Keywords
            </p >

            <p className="mt-2">
              {item.keywords}
            </p >
          </div>

          <div className="bg-[#FFF9EE] rounded-2xl p-6">
            <p className="font-bold">
              💃 Dance
            </p >

            <p className="mt-2">
              {item.dance.name}
            </p >

            {item.dance.note && (
              <p className="mt-2 opacity-60">
                {item.dance.note}
              </p >
            )}
          </div>

          <div className="bg-[#FFF9EE] rounded-2xl p-6">
            <p className="font-bold">
              📝 Note
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
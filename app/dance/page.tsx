import Link from "next/link";
import { dailyRecords } from "@/data/daily";
export default function DancePage() {
  const danceRecords = dailyRecords.filter(
    (item) => item.dance?.video
  );
  return (
    <main className="min-h-screen bg-[#FFF9EE] px-5 py-12 text-[#5A4636] md:px-8 md:py-16">
      {/* 标题 */}
      <h1 className="text-center text-4xl font-bold tracking-widest">
        💃 舞蹈记录
      </h1>
      <p className="mt-4 text-center text-sm opacity-60">
        收藏葵葵子的每一次舞蹈瞬间
      </p >
      {/* ================= 舞蹈记录 ================= */}
      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
        {danceRecords.map((item) => (
          <div
            key={item.date}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* 日期 */}
            <div className="flex items-center justify-between px-6 pt-6">
              <p className="text-sm opacity-50">
                {item.date}
              </p >
              <span className="rounded-full bg-[#FFF9EE] px-3 py-1 text-xs opacity-60">
                DANCE
              </span>
            </div>
            {/* 舞蹈名称 */}
            <div className="px-6 pt-4">
              <h2 className="text-xl font-bold">
                🎵 {item.dance?.name}
              </h2>
            </div>
            {/* 视频 */}
            {item.dance?.video && (
              <div className="mt-5 px-6">
                <video
                  src={item.dance.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-auto max-h-[520px] w-full rounded-2xl bg-black object-contain"
                />
              </div>
            )}
            {/* 备注 */}
            {item.dance?.note && (
              <div className="px-6 pt-5">
                <p className="text-sm leading-6 opacity-65">
                  📝 {item.dance.note}
                </p >
              </div>
            )}
            {/* 查看详情 */}
            <div className="px-6 pb-6 pt-5">
              <Link
                href={`/dance/${item.date.replace(/\./g, "-")}`}
                className="text-sm font-bold text-[#D9A900] hover:underline"
              >
                查看这一天的舞蹈 →
              </Link>
            </div>
          </div>
        ))}
        {/* 没有舞蹈记录 */}
        {danceRecords.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm md:col-span-2">
            <div className="text-5xl">
              🌻
            </div>
            <h2 className="mt-5 text-xl font-bold">
              暂时还没有舞蹈记录
            </h2>
            <p className="mt-3 text-sm opacity-50">
              等待葵葵子的下一支舞蹈～
            </p >
          </div>
        )}
      </section>
    </main>
  );
}
import { dailyRecords } from "@/data/daily";
export default function DancePage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest">
        💃 舞蹈记录
      </h1>


      <section className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

         <p className="opacity-60">
  {dailyRecords[0].date}
</p>


          <h2 className="text-2xl font-bold mt-4">
            🎵 舞蹈名称
          </h2>

          <p className="mt-4">
            {dailyRecords[0].dance.name}
          </p>


          <h2 className="text-2xl font-bold mt-8">
            🎬 视频记录
          </h2>

          {dailyRecords[0].dance.video ? (
  <video
    src={dailyRecords[0].dance.video}
    controls
    className="w-full rounded-2xl mt-4"
  />
) : (
  <div className="mt-4 bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
    视频待添加
  </div>
)}

          <h2 className="text-2xl font-bold mt-8">
            📝 备注
          </h2>

          <p className="mt-4">
            {dailyRecords[0].dance.note}
          </p>

        </div>

      </section>

    </main>
  );
}
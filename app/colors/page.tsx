import { dailyRecords } from "@/data/daily";

export default function ColorsPage() {
  console.log(dailyRecords);  
  return (
    <main className="min-h-screen bg-[#FFF9EE] px-8 py-16">

      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest">
        🎨 色彩档案
      </h1>


      <section className="max-w-4xl mx-auto">

        <div className="relative">

          <div className="absolute left-5 top-0 bottom-0 w-1 bg-[#F6C945]" />


          <div className="space-y-10">

            {dailyRecords.map((item) => (

              <div
                key={item.date}
                className="relative pl-16"
              >


                {/* 时间点 */}
                <div
                  className="absolute left-0 top-8 w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{
                    backgroundColor: item.colorCode
                  }}
                >
                  🌻
                </div>


                <div className="bg-white rounded-3xl p-8 shadow-sm">


                  <p className="opacity-60">
                    {item.date}
                  </p>


                  <h2 className="text-2xl font-bold mt-4">
                    🎨 {item.color}
                  </h2>


                  <p className="mt-3 opacity-70">
                    {item.keywords}
                  </p>


                  <div className="mt-6 flex items-center gap-4">

                    <div
                      className="w-16 h-16 rounded-full border"
                      style={{
                        backgroundColor: item.colorCode
                      }}
                    />


                    <span>
                      {item.colorCode}
                    </span>

                  </div>


                </div>


              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
export default function Archive() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-8 py-12">

      {/* 标题 */}
      <section className="text-center mb-12">

        <h1 className="text-4xl font-bold tracking-widest">
          🌻 Daily Archive
        </h1>

        <p className="mt-4 text-lg">
          记录葵葵子的每一天
        </p>

      </section>



      {/* 日期卡片 */}
      <section className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-sm">


        <div className="text-center">

          <h2 className="text-3xl font-bold">
            2026.07.07
          </h2>

          <p className="mt-2 opacity-60">
            Daily Outfit Archive
          </p>

        </div>



        {/* 今日照片 */}
        <div className="mt-10">

          <h3 className="text-xl font-bold mb-4">
            📷 今日照片
          </h3>


          <div className="h-72 bg-[#FFF4D6] rounded-2xl flex items-center justify-center">

            <span className="opacity-50">
              照片展示区域
            </span>

          </div>

        </div>




        {/* 今日妆造 */}
        <div className="mt-10">

          <h3 className="text-xl font-bold mb-4">
            ✨ 今日妆造
          </h3>


          <div className="bg-[#FFF9EE] rounded-2xl p-6 space-y-4">


            <p>
              👗 穿搭：
              <br />
              今日造型记录
            </p>


            <p>
              💄 妆容：
              <br />
              今日妆容风格
            </p>


            <p>
              🌻 风格关键词：
              <br />
              阳光 · 温柔 · 活力
            </p>


          </div>

        </div>





        {/* 今日舞蹈 */}
        <div className="mt-10">

          <h3 className="text-xl font-bold mb-4">
            💃 今日舞蹈
          </h3>


          <div className="bg-[#FFF9EE] rounded-2xl p-6">

            视频记录区域

          </div>

        </div>





        {/* 今日代表色 */}
        <div className="mt-10">

          <h3 className="text-xl font-bold mb-4">
            🎨 今日代表色
          </h3>


          <div className="flex items-center gap-5">


            <div className="w-20 h-20 rounded-full bg-[#F6C945]">
            </div>


            <div>

              <p className="text-xl font-bold">
                向日葵黄
              </p>


              <p className="opacity-60">
                #F6C945
              </p>

            </div>


          </div>

        </div>





        {/* 今日记录 */}
        <div className="mt-10">


          <h3 className="text-xl font-bold mb-4">
            📝 今日记录
          </h3>


          <div className="bg-[#FFF9EE] rounded-2xl p-6">

            写下今天关于葵葵子的故事……

          </div>


        </div>



      </section>


    </main>
  );
}
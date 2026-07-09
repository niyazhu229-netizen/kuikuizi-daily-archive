import { dailyRecords } from "@/data/daily";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFF9EE] text-[#5A4636]">
     

      {/* 首页主视觉 */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

       <div className="w-44 h-44 flex items-center justify-center">
  <img
    src="/images/logo.png"
    alt="KUIKUIZI Daily Archive Logo"
    className="w-full h-full object-contain"
  />
</div> 

        <h1 className="mt-8 text-4xl font-bold tracking-[0.15em]">
  KUIKUIZI Daily Archive
</h1>

        <p className="mt-5 text-xl tracking-widest">
  记录葵葵子的每一天
</p>

        <p className="mt-3 text-base opacity-70">
          每一次妆造 · 每一支舞蹈 · 每一种属于她的颜色
        </p>

       <a
  href="/about"
  className="mt-10 inline-block px-8 py-3 rounded-full bg-[#F6C945] text-white font-medium shadow-md hover:scale-105 transition"
>
  关于葵葵子
</a>
      </section>


      {/* 网站介绍 */}
      <section className="max-w-5xl mx-auto px-8 pb-24 grid md:grid-cols-3 gap-8">

        <a
  href="/daily"
  className="bg-white rounded-3xl p-8 shadow-sm block hover:scale-105 transition"
>
  <div className="text-4xl mb-4">✨</div>

  <h2 className="text-xl font-bold mb-3">
    每日记录
  </h2>

  <p>
    收藏葵葵子的每日造型，记录每一次风格变化。
  </p>
</a>


        <a
  href="/dance"
  className="bg-white rounded-3xl p-8 shadow-sm block hover:scale-105 transition"
>
  <div className="text-4xl mb-4">💃</div>

  <h2 className="text-xl font-bold mb-3">
    舞蹈记录
  </h2>

  <p>
    保存每一次舞蹈瞬间。
  </p>
</a>


       <a
  href="/colors"
  className="bg-white rounded-3xl p-8 shadow-sm block hover:scale-105 transition"
>
  <div className="text-4xl mb-4">🎨</div>

  <h2 className="text-xl font-bold mb-3">
    色彩档案
  </h2>

  <p>
    记录每天属于葵葵子的颜色。
  </p>
</a> 

      </section>
{/* 最新档案 */}
<section className="max-w-5xl mx-auto px-8 pb-24">

  <h2 className="text-3xl font-bold text-center mb-10 tracking-widest">
    🌻 最新档案
  </h2>


  <div className="grid md:grid-cols-2 gap-8">

  {dailyRecords.slice(0, 2).map((item) => (

    <div
      key={item.date}
      className="bg-white rounded-3xl p-8 shadow-sm"
    >

      <p className="opacity-60">
        {item.date}
      </p>


      <h3 className="mt-4 text-xl font-bold">
        ✨ 今日妆造
      </h3>


      {item.image && (
        <img
          src={item.image}
          alt="今日妆造"
          className="w-full rounded-2xl mt-6"
        />
      )}


      <p className="mt-4">
        今日代表色：
        <span className="font-bold">
          {item.color}
        </span>
      </p>


      <p className="mt-2">
        穿搭关键词：
        {item.keywords}
      </p>


    </div>

  ))}

</div>
</section>
<img
  src="/images/watermark.png"
  alt="watermark"
  className="absolute right-5 bottom-5 w-32 opacity-80"
/>
    </main>
  );
}
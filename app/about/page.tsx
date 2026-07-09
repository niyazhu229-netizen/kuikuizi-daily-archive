export default function About() {
  return (
    <main className="min-h-screen bg-[#FFF9EE] text-[#5A4636] px-8 py-12">

      {/* 标题 */}
      <section className="text-center mb-12">

        <h1 className="text-4xl font-bold tracking-widest">
          🌻 About KUIKUIZI
        </h1>

        <p className="mt-4 text-lg">
          认识葵葵子的每一个瞬间
        </p>

      </section>


      {/* 人物卡片 */}
      <section className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-sm">


        {/* 头像区域 */}
        <div className="flex justify-center">

          <img
  src="/images/kuikuizi-avatar.png"
  alt="葵葵子"
  className="w-40 h-40 rounded-full object-cover"
/>

        </div>


        <h2 className="text-center mt-8 text-3xl font-bold">
          葵葵子
        </h2>

        <p className="text-center mt-2 opacity-60">
          KUIKUIZI Daily Archive
        </p>



        {/* 基本资料 */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">


          <div className="bg-[#FFF9EE] rounded-2xl p-5">
            🎂 生日：
            <br />
            9月22日
          </div>


          <div className="bg-[#FFF9EE] rounded-2xl p-5">
            ♍ 星座：
            <br />
            处女座
          </div>


          <div className="bg-[#FFF9EE] rounded-2xl p-5">
            📏 身高：
            <br />
            164cm
          </div>


          <div className="bg-[#FFF9EE] rounded-2xl p-5">
            📍 籍贯：
            <br />
            湖南省郴州市
          </div>


        </div>



        {/* 兴趣特点 */}
        <div className="mt-10">

          <h3 className="text-xl font-bold mb-5">
            ✨ 关于葵葵子
          </h3>


          <div className="space-y-4">


            <p>
              💪 爱好：健身
            </p>


            <p>
              🌻 特殊技能：产出阳光
            </p>


            <p>
              🎨 最喜欢的颜色：
              
              所有高饱和的颜色
            </p>


            <p>
              🍂 最喜欢的季节：
             
              秋天
            </p>


          </div>

        </div>



        {/* 座右铭 */}
        <div className="mt-10 bg-[#F6C945] rounded-2xl p-8 text-center">

          <h3 className="font-bold text-xl">
            🌻 座右铭
          </h3>

          <p className="mt-4 text-2xl font-bold">
  笑口常开 好彩自然来
</p>

        </div>



      </section>


    </main>
  );
}
"use client";

import { useState } from "react";
import { dailyRecords } from "@/data/daily";

export default function Home() {
  // 找到最新的一条记录，作为月历默认显示的月份
  const latestRecord = dailyRecords[0];

  const latestParts = latestRecord.date.split(".");
  const initialYear = Number(latestParts[0]);
  const initialMonth = Number(latestParts[1]) - 1;

  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  // 星期一作为第一天
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = [
    ...Array(startOffset).fill(null),
    ...Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    ),
  ];

  // 上个月
  const goPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 下个月
  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

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
        </p >

        <p className="mt-3 text-base opacity-70">
          每一次妆造 · 每一支舞蹈 · 每一种属于她的颜色
        </p >

        <a
          href=" "
          className="mt-10 inline-block px-8 py-3 rounded-full bg-[#F6C945] text-white font-medium shadow-md hover:scale-105 transition"
        >
          关于葵葵子
        </a >

      </section>


      {/* 每月记录 */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-20">

        <div className="bg-white rounded-3xl p-5 md:p-9 shadow-sm">

          {/* 标题 */}
          <div className="flex items-center justify-between">

            <button
              onClick={goPreviousMonth}
              className="w-10 h-10 rounded-full bg-[#FFF9EE] hover:bg-[#F6C945] hover:text-white transition text-lg"
            >
              ‹
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-widest">
                🌻 每日记录
              </h2>

              <p className="mt-2 text-sm opacity-50">
                {currentYear} ·{" "}
                {String(currentMonth + 1).padStart(2, "0")}
              </p >
            </div>

            <button
              onClick={goNextMonth}
              className="w-10 h-10 rounded-full bg-[#FFF9EE] hover:bg-[#F6C945] hover:text-white transition text-lg"
            >
              ›
            </button>

          </div>


          {/* 星期 */}
          <div className="grid grid-cols-7 gap-1.5 md:gap-2 mt-7">

            {["一", "二", "三", "四", "五", "六", "日"].map(
              (day) => (
                <div
                  key={day}
                  className="text-center text-xs opacity-50 py-2"
                >
                  {day}
                </div>
              )
            )}


            {/* 日期 */}
            {calendarDays.map((day, index) => {

              if (day === null) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square"
                  />
                );
              }

              const dateString =
                `${currentYear}.${String(currentMonth + 1).padStart(2, "0")}.${String(day).padStart(2, "0")}`;

              const item = dailyRecords.find(
                (record) => record.date === dateString
              );

              if (!item) {
                return (
                  <div
                    key={dateString}
                    className="aspect-square flex items-center justify-center rounded-2xl text-sm opacity-25"
                  >
                    {day}
                  </div>
                );
              }

              return (
                <a
                  key={dateString}
                  href={`/daily/${dateString.replaceAll(".", "-")}`}
                  className="aspect-square rounded-2xl bg-[#FFF9EE] flex flex-col items-center justify-center hover:bg-[#FFF4D6] hover:scale-105 transition"
                >

                  <span className="text-sm font-bold">
                    {day}
                  </span>

                  <span
                    className="w-4 h-4 rounded-full mt-1.5 border border-white shadow-sm"
                    style={{
                      backgroundColor: item.colorCode,
                    }}
                  />

                </a >
              );
            })}

          </div>


          <p className="text-center mt-6 text-xs opacity-40">
            点击有记录的日期查看当天详情
          </p >

        </div>

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
          </p >
        </a >


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
          </p >
        </a >


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
          </p >
        </a >

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
              </p >

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
              </p >

              <p className="mt-2">
                穿搭关键词：
                {item.keywords}
              </p >

            </div>

          ))}

        </div>

      </section>


      <img
        src="/images/watermark.png"
        className="absolute bottom-6 right-6 w-24 opacity-40"
      />

    </main>
  );
}
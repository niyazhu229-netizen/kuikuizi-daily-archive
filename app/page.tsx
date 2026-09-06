"use client";

import Link from "next/link";
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
    <main className="relative min-h-screen overflow-hidden bg-[#FFF9EE] text-[#5A4636]">

      {/* ================= 首页主视觉 ================= */}
      <section className="relative pb-16">

        {/* 顶部 Logo */}
        <div className="flex items-center justify-center gap-3 px-6 pt-8 md:pt-10">

          <img
            src="/images/logo.png"
            alt="KUIKUIZI Daily Archive Logo"
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />

          <p className="text-[10px] tracking-[0.28em] opacity-60 md:text-xs">
            KUIKUIZI DAILY ARCHIVE
          </p >

        </div>


        {/* 首页主照片 */}
        <div className="relative mx-auto mt-6 max-w-5xl px-5 md:px-8">

          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem]">

            <img
              src="/images/home.jpg"
              alt="葵葵子"
              className="h-[500px] w-full object-cover object-center md:h-[680px]"
            />

            {/* 照片底部渐变 */}
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#FFF9EE] via-[#FFF9EE]/80 to-transparent" />

          </div>

        </div>


        {/* 主标题 */}
        <div className="relative z-10 -mt-28 px-6 text-center md:-mt-36">

          <p className="text-[10px] tracking-[0.35em] opacity-50 md:text-xs">
            PERSONAL ARCHIVE
          </p >

          <h1 className="mt-4 text-4xl font-bold tracking-[0.12em] md:text-6xl">
            KUIKUIZI
          </h1>

          <p className="mt-2 text-sm tracking-[0.32em] opacity-75 md:text-lg">
            DAILY ARCHIVE
          </p >

          <div className="mx-auto mt-6 h-[2px] w-12 rounded-full bg-[#F6C945]" />

          <p className="mt-7 text-lg tracking-widest md:text-2xl">
            记录葵葵子的每一天
          </p >

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 opacity-60 md:text-base">
            每一次妆造 · 每一支舞蹈 · 每一种属于她的颜色
          </p >


          {/* 关于按钮 */}
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F6C945] px-8 py-3 text-sm font-medium text-white shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            关于葵葵子
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* ================= 每日记录月历 ================= */}
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-4 md:px-8">

        <div className="rounded-[2rem] bg-white p-5 shadow-sm md:rounded-[2.5rem] md:p-9">

          <div className="flex items-center justify-between">

            <button
              onClick={goPreviousMonth}
              className="h-10 w-10 rounded-full bg-[#FFF9EE] text-lg transition hover:bg-[#F6C945] hover:text-white"
            >
              ‹
            </button>

            <div className="text-center">

              <p className="text-[10px] tracking-[0.3em] opacity-45">
                DAILY RECORD
              </p >

              <h2 className="mt-2 text-2xl font-bold tracking-widest">
                🌻 每日记录
              </h2>

              <p className="mt-2 text-sm opacity-50">
                {currentYear} ·{" "}
                {String(currentMonth + 1).padStart(2, "0")}
              </p >

            </div>

            <button
              onClick={goNextMonth}
              className="h-10 w-10 rounded-full bg-[#FFF9EE] text-lg transition hover:bg-[#F6C945] hover:text-white"
            >
              ›
            </button>

          </div>


          <div className="mt-7 grid grid-cols-7 gap-1.5 md:gap-2">

            {["一", "二", "三", "四", "五", "六", "日"].map(
              (day) => (
                <div
                  key={day}
                  className="py-2 text-center text-xs opacity-50"
                >
                  {day}
                </div>
              )
            )}


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
                    className="flex aspect-square items-center justify-center rounded-2xl text-sm opacity-25"
                  >
                    {day}
                  </div>
                );
              }


              return (
                <Link
                  key={dateString}
                  href={`/daily/${dateString.replaceAll(".", "-")}`}
                  className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-[#FFF9EE] transition hover:scale-105 hover:bg-[#FFF4D6]"
                >

                  <span className="text-sm font-bold">
                    {day}
                  </span>

                  <span
                    className="mt-1.5 h-4 w-4 rounded-full border border-white shadow-sm"
                    style={{
                      backgroundColor: item.colorCode,
                    }}
                  />

                </Link>
              );
            })}

          </div>


          <p className="mt-6 text-center text-xs opacity-40">
            点击有记录的日期查看当天详情
          </p >

        </div>

      </section>


      {/* ================= 最新档案 ================= */}
      <section className="mx-auto max-w-5xl px-5 pb-24 md:px-8">

        <div className="text-center">

          <p className="text-[10px] tracking-[0.35em] opacity-50 md:text-xs">
            LATEST ARCHIVE
          </p >

          <h2 className="mt-3 text-3xl font-bold tracking-widest">
            最新档案
          </h2>

          <p className="mt-4 text-sm opacity-55">
            最近收藏的葵葵子瞬间
          </p >

        </div>


        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">

          {dailyRecords.slice(0, 2).map((item) => (

            <Link
              key={item.date}
              href={`/daily/${item.date.replaceAll(".", "-")}`}
              className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {item.image && (
                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt="今日妆造"
                    className="h-[360px] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />

                </div>
              )}


              <div className="p-7">

                <div className="flex items-center justify-between">

                  <p className="text-sm opacity-50">
                    {item.date}
                  </p >

                  <span
                    className="h-5 w-5 rounded-full border border-white shadow-sm"
                    style={{
                      backgroundColor: item.colorCode,
                    }}
                  />

                </div>


                <h3 className="mt-5 text-xl font-bold">
                  今日妆造
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-65">
                  <span className="font-medium text-[#5A4636]">
                    {item.color}
                  </span>
                  {" · "}
                  {item.keywords}
                </p >

                <p className="mt-6 text-sm font-medium text-[#D9A900]">
                  查看当天档案 →
                </p >

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* ================= 网站入口 ================= */}
      <section className="mx-auto grid max-w-5xl gap-5 px-5 pb-24 md:grid-cols-3 md:gap-8 md:px-8">

        <Link
          href="/daily"
          className="block rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="mb-5 text-3xl">
            ✨
          </div>

          <p className="text-[10px] tracking-[0.25em] opacity-40">
            DAILY
          </p >

          <h2 className="mt-2 text-xl font-bold">
            每日记录
          </h2>

          <p className="mt-3 text-sm leading-6 opacity-60">
            收藏葵葵子的每日造型，记录每一次风格变化。
          </p >

          <p className="mt-6 text-sm font-medium text-[#D9A900]">
            浏览档案 →
          </p >

        </Link>


        <Link
          href="/dance"
          className="block rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="mb-5 text-3xl">
            💃
          </div>

          <p className="text-[10px] tracking-[0.25em] opacity-40">
            DANCE
          </p >

          <h2 className="mt-2 text-xl font-bold">
            舞蹈记录
          </h2>

          <p className="mt-3 text-sm leading-6 opacity-60">
            保存每一次舞蹈瞬间。
          </p >

          <p className="mt-6 text-sm font-medium text-[#D9A900]">
            浏览档案 →
          </p >

        </Link>


        <Link
          href="/colors"
          className="block rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
        >
          <div className="mb-5 text-3xl">
            🎨
          </div>

          <p className="text-[10px] tracking-[0.25em] opacity-40">
            COLORS
          </p >

          <h2 className="mt-2 text-xl font-bold">
            色彩档案
          </h2>

          <p className="mt-3 text-sm leading-6 opacity-60">
            记录每天属于葵葵子的颜色。
          </p >

          <p className="mt-6 text-sm font-medium text-[#D9A900]">
            浏览档案 →
          </p >

        </Link>

      </section>


      {/* 水印 */}
      <img
        src="/images/watermark.png"
        alt="watermark"
        className="absolute bottom-6 right-6 w-20 opacity-35 md:w-24"
      />

    </main>
  );
}
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dailyRecords } from "@/data/daily";

export default function DailyPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedColor, setSelectedColor] = useState("全部");

  // 自动整理网站里出现过的颜色
  const colors = useMemo(() => {
    return [
      "全部",
      ...Array.from(new Set(dailyRecords.map((item) => item.color))),
    ];
  }, []);

  // 搜索 + 颜色筛选
  const filteredRecords = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();

    return dailyRecords.filter((item) => {
      const colorMatch =
        selectedColor === "全部" || item.color === selectedColor;

      const searchMatch =
        keyword === "" ||
        item.date.toLowerCase().includes(keyword) ||
        item.color.toLowerCase().includes(keyword) ||
        item.keywords.toLowerCase().includes(keyword) ||
        item.note.toLowerCase().includes(keyword) ||
        item.dance?.name?.toLowerCase().includes(keyword);

      return colorMatch && searchMatch;
    });
  }, [searchText, selectedColor]);

  return (
    <main className="min-h-screen bg-[#FFF9EE] px-5 py-12 text-[#5A4636] md:px-8 md:py-16">

      {/* 标题 */}
      <h1 className="text-center text-4xl font-bold tracking-widest">
        🌻 每日记录
      </h1>

      <p className="mt-4 text-center text-sm opacity-60">
        收藏葵葵子的每一天
      </p >

      {/* ================= 搜索区域 ================= */}
      <section className="mx-auto mt-10 max-w-6xl">
        <div className="rounded-3xl bg-white p-5 shadow-sm md:p-6">

          {/* 搜索框 */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
              🔍
            </span>

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="搜索日期、颜色、关键词、舞蹈……"
              className="w-full rounded-2xl bg-[#FFF9EE] py-4 pl-12 pr-4 text-sm outline-none transition focus:ring-2 focus:ring-[#F6C945]"
            />
          </div>

          {/* 颜色筛选 */}
          <div className="mt-5">
            <p className="mb-3 text-sm font-bold">
              🎨 按颜色筛选
            </p >

            <div className="flex gap-2 overflow-x-auto pb-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    selectedColor === color
                      ? "bg-[#F6C945] font-bold text-white"
                      : "bg-[#FFF9EE] hover:bg-[#FFF4D6]"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* 当前筛选结果 */}
          <div className="mt-5 flex items-center justify-between text-xs opacity-50">
            <span>
              共 {filteredRecords.length} 条记录
            </span>

            {(searchText || selectedColor !== "全部") && (
              <button
                onClick={() => {
                  setSearchText("");
                  setSelectedColor("全部");
                }}
                className="font-medium text-[#D9A900] hover:underline"
              >
                清除筛选
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= 每日记录 ================= */}
      <section className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">

        {filteredRecords.map((item) => (
          <div
            key={item.date}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            {/* 图片 */}
            {item.image && (
              <Link href={`/daily/${item.date.replace(/\./g, "-")}`}>
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt="今日妆造"
                    className="h-[300px] w-full object-cover object-top transition duration-500 hover:scale-105 md:h-[330px]"
                  />
                </div>
              </Link>
            )}

            {/* 内容 */}
            <div className="p-6">

              {/* 日期 + 颜色 */}
              <div className="flex items-center justify-between">
                <p className="text-sm opacity-50">
                  {item.date}
                </p >

                <span
                  className="h-5 w-5 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: item.colorCode }}
                  title={item.color}
                />
              </div>

              {/* 今日妆造 */}
              <h2 className="mt-4 text-xl font-bold">
                ✨ 今日妆造
              </h2>

              {/* 颜色 */}
              <p className="mt-4 text-sm">
                🎨 今日代表色：
                <span className="ml-2 font-bold">
                  {item.color}
                </span>
              </p >

              {/* 关键词 */}
              <p className="mt-3 text-sm">
                👗 穿搭关键词：
                <span className="ml-2">
                  {item.keywords}
                </span>
              </p >

              {/* 舞蹈 */}
              <div className="mt-4 flex items-center text-sm">
                <span>💃 舞蹈记录：</span>

                {item.dance?.video ? (
                  <Link
                    href={`/dance/${item.date.replace(/\./g, "-")}`}
                    className="ml-2 font-bold text-[#D9A900] hover:underline"
                  >
                    {item.dance.name} →
                  </Link>
                ) : (
                  <span className="ml-2 opacity-40">
                    暂无舞蹈视频
                  </span>
                )}
              </div>

              {/* 小记 */}
              <p className="mt-4 text-sm leading-6">
                📝 小记：
                <span className="ml-2 opacity-70">
                  {item.note}
                </span>
              </p >

              {/* 查看详情 */}
              <Link
                href={`/daily/${item.date.replace(/\./g, "-")}`}
                className="mt-6 inline-block text-sm font-bold text-[#D9A900] hover:underline"
              >
                查看当天档案 →
              </Link>

            </div>
          </div>
        ))}

        {/* 没有搜索结果 */}
        {filteredRecords.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm md:col-span-2">
            <div className="text-5xl">
              🌻
            </div>

            <h2 className="mt-5 text-xl font-bold">
              没有找到相关记录
            </h2>

            <p className="mt-3 text-sm opacity-50">
              换一个关键词，或者尝试其他颜色吧～
            </p >

            <button
              onClick={() => {
                setSearchText("");
                setSelectedColor("全部");
              }}
              className="mt-6 rounded-full bg-[#F6C945] px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
            >
              查看全部记录
            </button>
          </div>
        )}

      </section>

    </main>
  );
}
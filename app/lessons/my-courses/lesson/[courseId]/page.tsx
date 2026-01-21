"use client";

import React from "react";
import { PlayerHeader } from "@/components/lesson/player/PlayerHeader";
import { PlayerSidebar } from "@/components/lesson/player/PlayerSidebar";
import { PlayerAiChat } from "@/components/lesson/player/PlayerAiChat";

export default function CoursePlayerPage() {
  return (
    <>
      <PlayerHeader />

      {/* Main Player Container - full height minus header */}
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left: Outline */}
        <div className="hidden lg:block h-full">
          <PlayerSidebar />
        </div>

        {/* Center: Video & Content */}
        <section className="flex-1 flex flex-col bg-[#f6f6f8] dark:bg-[#0a0a0c] overflow-y-auto custom-scrollbar relative">
          {/* Video Player */}
          <div className="p-6">
            <div className="relative group bg-black aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    'url("https://picsum.photos/1280/720?random=1")',
                }}
              >
                <button className="size-20 rounded-full bg-[#5048e5]/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
              </div>

              {/* Fake Controls */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex h-1.5 w-full items-center mb-4 cursor-pointer">
                  <div className="h-full bg-[#5048e5] w-1/3 rounded-l-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 size-4 bg-white rounded-full shadow-md scale-100"></div>
                  </div>
                  <div className="h-full bg-white/30 flex-1 rounded-r-full"></div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined cursor-pointer">
                      pause
                    </span>
                    <span className="material-symbols-outlined cursor-pointer">
                      skip_next
                    </span>
                    <span className="material-symbols-outlined cursor-pointer">
                      volume_up
                    </span>
                    <span className="text-xs font-mono">08:42 / 24:15</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold px-2 py-0.5 border border-white/20 rounded">
                      1.25x
                    </span>
                    <span className="material-symbols-outlined cursor-pointer">
                      closed_caption
                    </span>
                    <span className="material-symbols-outlined cursor-pointer">
                      fullscreen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Details */}
          <div className="px-6 pb-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-black text-[#0f0e1b] dark:text-white mb-1">
                  03. Neural Network Architectures
                </h2>
                <div className="flex items-center gap-3">
                  <div
                    className="size-6 rounded-full bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://ui-avatars.com/api/?name=Sarah+Chen&background=random")',
                    }}
                  ></div>
                  <p className="text-sm text-[#545095] dark:text-gray-400">
                    Instructor:{" "}
                    <span className="font-bold text-[#0f0e1b] dark:text-white">
                      Dr. Sarah Chen
                    </span>{" "}
                    • Published Dec 2023
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1a192e] text-sm font-bold border border-[#e8e8f3] dark:border-[#2a293d] hover:bg-gray-50 dark:hover:bg-[#25243d] transition-colors text-slate-700 dark:text-white">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>{" "}
                  Resources
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1a192e] text-sm font-bold border border-[#e8e8f3] dark:border-[#2a293d] hover:bg-gray-50 dark:hover:bg-[#25243d] transition-colors text-slate-700 dark:text-white">
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>{" "}
                  Share
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-[#d2d1e6] dark:border-[#2a293d] flex gap-8 mb-6 overflow-x-auto">
              <button className="border-b-2 border-[#5048e5] text-[#5048e5] pb-3 text-sm font-bold whitespace-nowrap">
                Overview
              </button>
              <button className="text-[#545095] dark:text-gray-400 pb-3 text-sm font-bold hover:text-[#5048e5] transition-colors whitespace-nowrap">
                Transcript
              </button>
              <button className="text-[#545095] dark:text-gray-400 pb-3 text-sm font-bold hover:text-[#5048e5] transition-colors whitespace-nowrap">
                Discussions (24)
              </button>
              <button className="text-[#545095] dark:text-gray-400 pb-3 text-sm font-bold hover:text-[#5048e5] transition-colors whitespace-nowrap">
                Reviews
              </button>
            </div>

            {/* Description Text */}
            <div className="prose dark:prose-invert max-w-none text-[#545095] dark:text-gray-300">
              <p className="mb-4">
                In this lesson, we explore the fundamental building blocks of
                neural networks. We&apos;ll cover the transition from simple
                perceptrons to multi-layer architectures, discussing the
                mathematical foundations of input, hidden, and output layers.
              </p>
              <h4 className="text-[#0f0e1b] dark:text-white font-bold mb-2">
                Key Takeaways:
              </h4>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                <li>Understanding Weight Matrices and Biases</li>
                <li>Non-linear Activation Functions (ReLU, Sigmoid, Tanh)</li>
                <li>Forward Propagation Mechanics</li>
              </ul>
            </div>
          </div>

          {/* Floating Footer inside center panel (or fixed relative to page) */}
          {/* We'll use fixed positioning for the footer to match the design */}
        </section>

        {/* Right: AI Chat */}
        <div className="hidden xl:block h-full">
          <PlayerAiChat />
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="h-16 bg-white dark:bg-[#1a192e] border-t border-[#e8e8f3] dark:border-[#2a293d] fixed bottom-0 left-0 right-0 z-50 flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#545095] dark:text-gray-400 hover:bg-[#f6f6f8] dark:hover:bg-[#2a293d] transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>{" "}
            Previous
          </button>
          <div className="h-8 w-px bg-[#e8e8f3] dark:bg-[#2a293d]"></div>
          <button className="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold bg-[#5048e5] text-white hover:bg-[#5048e5]/90 transition-shadow shadow-lg shadow-[#5048e5]/20">
            Next Lesson{" "}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Center Progress (Hidden on small screens) */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-20">
          <div className="w-full max-w-md flex items-center gap-4">
            <span className="text-xs font-bold text-[#545095] dark:text-gray-400 whitespace-nowrap">
              8 of 12 Lessons
            </span>
            <div className="flex-1 bg-[#f6f6f8] dark:bg-[#2a293d] h-2 rounded-full">
              <div className="bg-[#5048e5] h-full w-[66%] rounded-full shadow-[0_0_8px_rgba(80,72,229,0.4)]"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-[#545095] dark:text-gray-400 hover:bg-[#f6f6f8] dark:hover:bg-[#2a293d] rounded-lg">
            <span className="material-symbols-outlined">playlist_add</span>
          </button>
          <button className="p-2 text-[#5048e5] bg-[#5048e5]/10 rounded-lg">
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
      </footer>
    </>
  );
}

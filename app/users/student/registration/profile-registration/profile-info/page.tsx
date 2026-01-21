"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  fullName: string;
  email: string;
  dob: string;
  phone: string;
}

export default function Step1ProfilePage() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    fullName: "John Doe",
    email: "john.doe@example.com",
    dob: "",
    phone: "",
  });

  const handleUpdate = (updates: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    console.log("Saving profile data:", userData);
    // Navigate to next step
    router.push('/users/student/registration/profile-registration/academic');
  };

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-10 px-4">
        <div className="max-w-[1000px] w-full bg-white dark:bg-[#121121] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          {/* Progress Bar / Steps Indicator */}
          <div className="grid grid-cols-4 gap-x-2 px-4 mb-12">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#5048e5] font-bold">
                radio_button_checked
              </span>
              <p className="text-[#5048e5] text-[10px] font-bold uppercase tracking-widest">
                Profile Info
              </p>
            </div>
            {["Academic", "Preferences", "Complete"].map((step) => (
              <div
                key={step}
                className="flex flex-col items-center gap-1 opacity-40"
              >
                <span className="material-symbols-outlined text-slate-400 dark:text-slate-600">
                  circle
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black pb-2">
              Tell us about yourself
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Choose how you&apos;d like to set up your profile to get started
              with your learning journey.
            </p>
          </div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* AI Upload Card */}
            <div className="group p-6 rounded-xl border-2 border-[#5048e5] bg-[#5048e5]/5 hover:bg-[#5048e5]/10 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-slate-900 dark:text-white text-lg font-bold">
                    Upload CV
                  </p>
                  <p className="text-[#5048e5] text-sm font-medium">
                    AI-Powered Parsing
                  </p>
                </div>
                <span className="material-symbols-outlined text-[#5048e5] bg-white dark:bg-slate-800 rounded-full p-2 shadow-sm">
                  auto_awesome
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-[#5048e5]/20 rounded-xl bg-white/50 dark:bg-slate-800/50">
                <span className="material-symbols-outlined text-4xl text-[#5048e5] mb-3">
                  cloud_upload
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  Drag & drop your CV here
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  PDF, DOCX up to 10MB
                </p>
                <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-[#5048e5]/10 rounded-full">
                  <span className="material-symbols-outlined text-xs animate-pulse text-[#5048e5]">
                    psychology
                  </span>
                  <span className="text-[10px] font-bold text-[#5048e5] uppercase">
                    AI Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Manual Entry Card */}
            <div className="group p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#5048e5]/50 transition-all cursor-pointer bg-slate-50 dark:bg-slate-800/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-slate-900 dark:text-white text-lg font-bold">
                    Fill Manually
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    Step-by-step entry
                  </p>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#5048e5] transition-colors">
                  edit_note
                </span>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-2 border-b border-slate-100 dark:border-slate-800"
                  >
                    <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-400 text-sm">
                        person
                      </span>
                    </div>
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
                  </div>
                ))}
                <p className="text-[#5048e5] text-xs font-bold flex items-center gap-1 pt-2">
                  Start Manual Entry{" "}
                  <span className="material-symbols-outlined text-xs">
                    arrow_forward
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-800 pt-12">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                value={userData.fullName}
                onChange={(e) => handleUpdate({ fullName: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Date of Birth
              </label>
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => handleUpdate({ dob: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Phone Number
              </label>
              <input
                value={userData.phone}
                onChange={(e) => handleUpdate({ phone: e.target.value })}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <input
                value={userData.email}
                readOnly
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-400 outline-none cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Footer */}
      <footer className="bg-white dark:bg-[#121121] border-t border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-6 sticky bottom-0 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            <span className="material-symbols-outlined text-lg">save</span> Save
            Draft
          </button>

          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[linear-gradient(135deg,#4F46E5_0%,#7C3AED_100%)] text-white font-bold shadow-lg shadow-[#5048e5]/20 hover:-translate-y-0.5 active:scale-[0.99] transition-all"
          >
            Next Step{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </footer>
    </>
  );
}

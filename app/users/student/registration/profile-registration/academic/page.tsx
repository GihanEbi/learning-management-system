"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface AcademicData {
  educationLevel: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
}

export default function Step2AcademicPage() {
  const router = useRouter();

  const [academicData, setAcademicData] = useState<AcademicData>({
    educationLevel: "Undergraduate",
    institution: "",
    fieldOfStudy: "",
    graduationYear: "",
  });

  const handleUpdate = (updates: Partial<AcademicData>) => {
    setAcademicData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    console.log("Saving academic data:", academicData);
    // Navigate to next step
    router.push("/users/student/registration/profile-registration/preferences");
  };

  const handleBack = () => {
    router.push(
      "/users/student/registration/profile-registration/profile-info",
    );
  };

  return (
    <>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-10 px-4">
        <div className="max-w-[1000px] w-full bg-white dark:bg-[#121121] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          {/* Progress Bar / Steps Indicator */}
          <div className="grid grid-cols-4 gap-x-2 px-4 mb-12">
            {/* Step 1: Completed */}
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#5048e5] font-bold">
                check_circle
              </span>
              <p className="text-[#5048e5] text-[10px] font-bold uppercase tracking-widest">
                Profile Info
              </p>
            </div>

            {/* Step 2: Active */}
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#5048e5] font-bold">
                radio_button_checked
              </span>
              <p className="text-[#5048e5] text-[10px] font-bold uppercase tracking-widest">
                Academic
              </p>
            </div>

            {/* Remaining Steps */}
            {["Preferences", "Complete"].map((step) => (
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
              Academic Background
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Help our AI customize your learning path by telling us about your
              current education status.
            </p>
          </div>

          {/* Education Level Selection (Visual Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {["High School", "Undergraduate", "Graduate"].map((level) => (
              <div
                key={level}
                onClick={() => handleUpdate({ educationLevel: level })}
                className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-3 transition-all ${
                  academicData.educationLevel === level
                    ? "border-[#5048e5] bg-[#5048e5]/5"
                    : "border-slate-100 dark:border-slate-800 hover:border-[#5048e5]/30 bg-white dark:bg-slate-900"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    academicData.educationLevel === level
                      ? "text-[#5048e5]"
                      : "text-slate-400"
                  }`}
                >
                  {level === "High School"
                    ? "backpack"
                    : level === "Undergraduate"
                      ? "school"
                      : "history_edu"}
                </span>
                <span
                  className={`font-bold text-sm ${
                    academicData.educationLevel === level
                      ? "text-[#5048e5]"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Institution */}
            <div className="space-y-2 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                School / University Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  account_balance
                </span>
                <input
                  value={academicData.institution}
                  onChange={(e) =>
                    handleUpdate({ institution: e.target.value })
                  }
                  placeholder="e.g. Harvard University"
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
                />
              </div>
            </div>

            {/* Field of Study */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Major / Field of Study
              </label>
              <input
                value={academicData.fieldOfStudy}
                onChange={(e) => handleUpdate({ fieldOfStudy: e.target.value })}
                placeholder="e.g. Computer Science"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
              />
            </div>

            {/* Graduation Year */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Graduation Year (Expected)
              </label>
              <input
                type="number"
                min="1990"
                max="2030"
                value={academicData.graduationYear}
                onChange={(e) =>
                  handleUpdate({ graduationYear: e.target.value })
                }
                placeholder="2025"
                className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-[#5048e5] focus:ring-1 focus:ring-[#5048e5] outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          {/* AI Insight Box */}
          <div className="mt-8 flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
            <span className="material-symbols-outlined text-[#5048e5] shrink-0">
              insights
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                AI Recommendation
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Based on your major in{" "}
                <strong>{academicData.fieldOfStudy || "..."}</strong>, we will
                curate courses featuring Python, Data Structures, and Machine
                Learning algorithms.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Action Footer */}
      <footer className="bg-white dark:bg-[#121121] border-t border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-6 sticky bottom-0 w-full shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 dark:hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back
          </button>

          {/* Next Button */}
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

"use client";
import { CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

const LanguagesInfo = () => {
  const [languageName1, setLanguageName1] = useState("");
  const [languagePercentage1, setLanguagePercentage1] = useState("");

  const [languageName2, setLanguageName2] = useState("");
  const [languagePercentage2, setLanguagePercentage2] = useState("");

  const [languageName3, setLanguageName3] = useState("");
  const [languagePercentage3, setLanguagePercentage3] = useState("");

  const [languageName4, setLanguageName4] = useState("");
  const [languagePercentage4, setLanguagePercentage4] = useState("");
  return (
    <div>
      <section className="mt-4">
        <form action="#" className="space-y-4">
          <CardTitle>Languages</CardTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Language 1
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Language 1"
                type="text"
                id="full-name"
                onChange={(e) => setLanguageName1(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Expertise %
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Expertitse %"
                type="email"
                id="email"
                onChange={(e) => setLanguagePercentage1(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Language 2
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Language 2"
                type="text"
                id="full-name"
                onChange={(e) => setLanguageName2(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Expertise %
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Expertitse %"
                type="email"
                id="email"
                onChange={(e) => setLanguagePercentage2(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Language 3
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Language 3"
                type="text"
                id="full-name"
                onChange={(e) => setLanguageName3(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Expertise %
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Expertitse %"
                type="email"
                id="email"
                onChange={(e) => setLanguagePercentage3(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Language 4
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Language 3"
                type="text"
                id="full-name"
                onChange={(e) => setLanguageName4(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Expertise %
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Expertitse %"
                type="email"
                id="email"
                onChange={(e) => setLanguagePercentage4(e.target.value)}
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LanguagesInfo;

"use client";
import { CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

const LanguagesInfo = ({ languageData }) => {
  const [languageDetail, setLanguageDetail] = useState([]);

  useEffect(() => {
    if (languageData?.length) {
      setLanguageDetail([...languageData]);
    }
  }, [languageData]);
  return (
    <div>
      <section className="mt-4">
        <form action="#" className="space-y-4">
          <CardTitle>Languages</CardTitle>

          {languageDetail?.map((item, index) => (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" key={index}>
              <div>
                <label className="sr-only" htmlFor={`languageName-${index}`}>
                  Language Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Language Name"
                  type="text"
                  id={`languageName-${index}`}
                  value={item.languageName || ""}
                  onChange={(e) =>
                    setLanguageDetail((prev) =>
                      prev.map((lang, langIndex) =>
                        langIndex === index
                          ? { ...lang, languageName: e.target.value } // Update languageName
                          : lang
                      )
                    )
                  }
                />
              </div>
              <div>
                <label
                  className="sr-only"
                  htmlFor={`languagePercentage-${index}`}
                >
                  Expertise %
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Expertise %"
                  type="text"
                  id={`languagePercentage-${index}`}
                  value={item.languagePercentage || ""}
                  onChange={(e) =>
                    setLanguageDetail((prev) =>
                      prev.map((lang, langIndex) =>
                        langIndex === index
                          ? { ...lang, languagePercentage: e.target.value } // Update languagePercentage
                          : lang
                      )
                    )
                  }
                />
              </div>
            </div>
          ))}
        </form>
      </section>
    </div>
  );
};

export default LanguagesInfo;

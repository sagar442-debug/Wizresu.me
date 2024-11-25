"use client";
import { CardTitle } from "@/components/ui/card";
import useStore from "@/store/useStore";
import React, { useEffect, useState } from "react";

const LanguagesInfo = ({ languageData, save }) => {
  const [languageDetail, setLanguageDetail] = useState([]);
  const setUserLanguage = useStore((state) => state.setUserLanguage);

  useEffect(() => {
    if (languageData?.length) {
      setLanguageDetail([...languageData]);
    }
  }, [languageData]);

  useEffect(() => {
    if (save == true) {
      whenSave();
    }
  }, [save]);

  const whenSave = () => {
    setUserLanguage(languageDetail);
  };
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

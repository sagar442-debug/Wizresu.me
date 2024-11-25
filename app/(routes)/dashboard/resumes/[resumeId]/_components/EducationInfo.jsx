"use client";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import useStore from "@/store/useStore";
import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const EducationInfo = () => {
  const setUserDegree = useStore((state) => state.setUserDegree);
  const setUserLanguage = useStore((state) => state.setUserLanguage);
  const [secondInstitution, setSecondInstitution] = useState(false);

  const [degreeName1, setDegreeName1] = useState("");
  const [degreeInstitution1, setDegreeInstitution1] = useState("");
  const [degreeEndDate1, setDegreeEndDate1] = useState("");
  const [shortDesc1, setShortDesc1] = useState("");

  const [degreeName2, setDegreeName2] = useState("");
  const [degreeInstitution2, setDegreeInstitution2] = useState("");
  const [degreeEndDate2, setDegreeEndDate2] = useState("");
  const [shortDesc2, setShortDesc2] = useState("");

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
          <CardTitle>Education</CardTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="phone">
                Degree Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Degree Name"
                type="text"
                id="phone"
                onChange={(e) => setDegreeName1(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Institution Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Institution Name"
                type="text"
                id="phone"
                onChange={(e) => setDegreeInstitution1(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Completion Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Completion Date"
                type="text"
                id="phone"
                onChange={(e) => setDegreeEndDate1(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Short Description
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Short Description"
                type="text"
                id="phone"
                onChange={(e) => setShortDesc1(e.target.value)}
              />
            </div>
          </div>
          {!secondInstitution && (
            <Button
              onClick={() => setSecondInstitution(true)}
              className="hover:bg-gray-100 gap-2"
            >
              <IoAddCircleOutline className="text-lg" />
              <span>Add More</span>
            </Button>
          )}
        </form>
      </section>
      <section className={`mt-4 ${secondInstitution ? "" : "hidden"}`}>
        <form action="#" className="space-y-4">
          <CardTitle>Second Education</CardTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="phone">
                Degree Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Degree Name"
                type="text"
                id="phone"
                onChange={(e) => setDegreeName2(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Institution Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Institution Name"
                type="text"
                id="phone"
                onChange={(e) => setDegreeInstitution2(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Completion Date
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Completion Date"
                type="text"
                id="phone"
                onChange={(e) => setDegreeEndDate2(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Short Description
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Short Description"
                type="text"
                id="phone"
                onChange={(e) => setShortDesc2(e.target.value)}
              />
            </div>
          </div>
        </form>
        <Button
          onClick={() => setSecondInstitution(false)}
          className="bg-red-600 hover:bg-red-700 text-white gap-2 mt-2"
        >
          <IoAddCircleOutline className="text-lg" />
          <span>Discard</span>
        </Button>
      </section>
    </div>
  );
};

export default EducationInfo;

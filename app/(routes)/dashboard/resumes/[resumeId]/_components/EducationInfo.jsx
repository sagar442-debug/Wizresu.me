"use client";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import useStore from "@/store/useStore";
import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const EducationInfo = ({ educationData, save }) => {
  const setUserDegree = useStore((state) => state.setUserDegree);
  const setUserLanguage = useStore((state) => state.setUserLanguage);
  const [userEducationInfo, setUserEducationInfo] = useState([]);
  const [secondInstitution, setSecondInstitution] = useState(false);

  const [degreeName1, setDegreeName1] = useState("");
  const [degreeInstitution1, setDegreeInstitution1] = useState("");
  const [degreeEndDate1, setDegreeEndDate1] = useState("");
  const [shortDesc1, setShortDesc1] = useState("");

  const [degreeName2, setDegreeName2] = useState("");
  const [degreeInstitution2, setDegreeInstitution2] = useState("");
  const [degreeEndDate2, setDegreeEndDate2] = useState("");
  const [shortDesc2, setShortDesc2] = useState("");

  useEffect(() => {
    setUserEducationInfo(educationData);
  }, []);
  useEffect(() => {
    if (save == true) {
      whenSave();
    }
  }, [save]);

  const whenSave = () => {
    setUserDegree(userEducationInfo);
    console.log(userEducationInfo);
  };

  return (
    <div>
      <section className="mt-4">
        <form action="#" className="space-y-4">
          <CardTitle>Education</CardTitle>
          {userEducationInfo?.map((item, index) => (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" key={index}>
              <div>
                <label className="sr-only" htmlFor={`degreeName-${index}`}>
                  Degree Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Degree Name"
                  type="text"
                  id={`degreeName-${index}`}
                  onChange={(e) =>
                    setUserEducationInfo((prev) =>
                      prev.map((edu, eduIndex) =>
                        eduIndex === index
                          ? { ...edu, degreeName: e.target.value }
                          : edu
                      )
                    )
                  }
                  value={item.degreeName || ""}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor={`institutionName-${index}`}>
                  Institution Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Institution Name"
                  type="text"
                  id={`institutionName-${index}`}
                  onChange={(e) =>
                    setUserEducationInfo((prev) =>
                      prev.map((edu, eduIndex) =>
                        eduIndex === index
                          ? { ...edu, degreeInstitution: e.target.value }
                          : edu
                      )
                    )
                  }
                  value={item.degreeInstitution || ""}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor={`completionDate-${index}`}>
                  Completion Date
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Completion Date"
                  type="text"
                  id={`completionDate-${index}`}
                  onChange={(e) =>
                    setUserEducationInfo((prev) =>
                      prev.map((edu, eduIndex) =>
                        eduIndex === index
                          ? { ...edu, degreeEndDate: e.target.value }
                          : edu
                      )
                    )
                  }
                  value={item.degreeEndDate || ""}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor={`shortDesc-${index}`}>
                  Short Description
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Short Description"
                  type="text"
                  id={`shortDesc-${index}`}
                  onChange={(e) =>
                    setUserEducationInfo((prev) =>
                      prev.map((edu, eduIndex) =>
                        eduIndex === index
                          ? { ...edu, shortDesc: e.target.value }
                          : edu
                      )
                    )
                  }
                  value={item.shortDesc || ""}
                />
              </div>
            </div>
          ))}
        </form>
      </section>
    </div>
  );
};

export default EducationInfo;

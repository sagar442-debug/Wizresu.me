"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useStore from "@/store/useStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { IoAddCircleOutline } from "react-icons/io5";
import { toast } from "sonner";
import { useRouter, usePathname } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
export const runtime = "edge";

const Page = () => {
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);
  const router = useRouter();
  const pathname = usePathname();
  const [secondInstitution, setSecondInstitution] = useState(false);
  const setPreviousPage = useStore((state) => state.setPreviousPage);
  const setUserFullName = useStore((state) => state.setUserFullName);
  const setUserEmailAddress = useStore((state) => state.setUserEmailAddress);
  const setUserPhoneNumber = useStore((state) => state.setUserPhoneNumber);
  const setUserWebsite = useStore((state) => state.setUserWebsite);
  const setUserAddress = useStore((state) => state.setUserAddress);
  const setUserDegree = useStore((state) => state.setUserDegree);
  const setUserLanguage = useStore((state) => state.setUserLanguage);

  const userFullName = useStore((state) => state.userFullName);
  const userEmailAddress = useStore((state) => state.userEmailAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const userPhoneNumber = useStore((state) => state.userPhoneNumber);

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

  useEffect(() => {
    setPreviousPage("/dashboard/create-new-resume/");
    setLoading(false);
  }, []);

  const onProceed = (e) => {
    e.preventDefault();
    setLoading(true);

    // empty fields validation

    if (userFullName.length < 3) {
      toast.error("Full Name should be at least 3 characters", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
      setLoading(false);
      return;
    } else if (userEmailAddress.length < 3) {
      toast.error("Email should be at least 3 characters", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
      setLoading(false);
      return;
    } else if (userPhoneNumber.length < 3) {
      toast.error("Phone Number should be at least 10 characters", {
        style: {
          background: "red",
          border: "none",
          color: "#fff",
          boxShadow: "0 5px 10px #00000040",
        },
        className: "class",
      });
      setLoading(false);
      return;
    } else if (languageName1.length < 3 || languagePercentage1.length === "0") {
      toast.error(
        "Language Name should be at least 3 characters or language percentage should be more than 0",
        {
          style: {
            background: "red",
            border: "none",
            color: "#fff",
            boxShadow: "0 5px 10px #00000040",
          },
          className: "class",
        }
      );
      setLoading(false);
      return;
    } else {
    }

    setUserDegree({
      degreeName: degreeName1,
      degreeInstitution: degreeInstitution1,
      degreeEndDate: degreeEndDate1,
      shortDesc: shortDesc1,
    });
    secondInstitution
      ? setUserDegree({
          degreeName: degreeName2,
          degreeInstitution: degreeInstitution2,
          degreeEndDate: degreeEndDate2,
          shortDesc: shortDesc2,
        })
      : null;

    languageName1.length > 0 && languagePercentage1.length > 0
      ? setUserLanguage({
          languageName: languageName1,
          languagePercentage: languagePercentage1,
        })
      : null;

    languageName2.length > 0 && languagePercentage2.length > 0
      ? setUserLanguage({
          languageName: languageName2,
          languagePercentage: languagePercentage2,
        })
      : null;

    languageName3.length > 0 && languagePercentage3.length > 0
      ? setUserLanguage({
          languageName: languageName3,
          languagePercentage: languagePercentage3,
        })
      : null;
    languageName4.length > 0 && languagePercentage4.length > 0
      ? setUserLanguage({
          languageName: languageName4,
          languagePercentage: languagePercentage4,
        })
      : null;

    router.push(`${pathname}/job-details/`);
  };

  return (
    <div className="rounded min-w-[40rem] min-h-[80vh]">
      <Card>
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Full Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Full Name"
                    type="text"
                    id="full-name"
                    onChange={(e) => setUserFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    onChange={(e) => setUserEmailAddress(e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm no-spinner"
                    placeholder="Phone Number"
                    type="text"
                    id="phone"
                    onChange={(e) => setUserPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Wesbite
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Website"
                    type="tel"
                    id="phone"
                    onChange={(e) => setUserWebsite(e.target.value)}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Address
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Address"
                    type="tel"
                    id="phone"
                    onChange={(e) => setUserAddress(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>
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
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/create-new-resume/personal-details">
            <Button
              disabled={loading}
              className="mt-6 hover:bg-blue-400 rounded hover:text-white shadow border"
              variant="ghost"
              onClick={onProceed}
            >
              {loading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                ""
              )}
              Proceed
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;

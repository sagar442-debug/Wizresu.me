"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";
import useStore from "@/store/useStore";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const ResumeTemplatePage = forwardRef((props, ref) => {
  const params = useParams();
  const { user, isLoaded } = useUser();
  const resumeRef = useRef();
  const initialTap = useStore((state) => state.initialTap);
  const setResumeRef = useStore((state) => state.setResumeRef);
  const userFullName = useStore((state) => state.userFullName);
  const userEmailAddress = useStore((state) => state.userEmailAddress);
  const userPhoneNumber = useStore((state) => state.userPhoneNumber);
  const userWebsite = useStore((state) => state.userWebsite);
  const userAddress = useStore((state) => state.userAddress);
  const userDegree = useStore((state) => state.userDegree);
  const userLanguage = useStore((state) => state.userLanguage);
  const jobTitle = useStore((state) => state.jobTitle);
  const jobDescription = useStore((state) => state.jobDescription);
  const jobExperience = useStore((state) => state.jobExperience);
  const chatOutput = useStore((state) => state.chatOutput);
  const [loader, setLoader] = useState(false);

  const [dataJobExperience, setDataJobExperience] = useState();
  const objective = useStore((state) => state.objective);
  const setObjective = useStore((state) => state.setObjective);
  const skills = useStore((state) => state.skills);
  const setSkills = useStore((state) => state.setSkills);

  const [resumeDetail, setResumeDetail] = useState();

  useEffect(() => {
    fetchResumeDetails();
    console.log(user);
  }, [user, isLoaded]);

  const fetchResumeDetails = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${params.resumeId}&clerkId=${user?.id}`
      );
      if (!response.ok) {
        console.log("Error fetching the data!!");
        router.push("/not-found");
        return;
      }
      const data = await response.json();
      setResumeDetail(data.resumeDetails);
      console.log("Success fetching the resume!!", data.resumeDetails);
      setLoader(false);
    } catch (error) {
      console.log("Server error", error.message);
    }
  };

  return (
    <div className="max-w-[40rem]">
      <div
        ref={ref}
        className={!initialTap ? "resume-template" : "hidden resume-template"}
      >
        <div className="title pb-5 mb-2 border-b text-center mt-2">
          <h1 className="text-2xl tracking-widest">
            {userFullName.length > 3 ? userFullName : "Sagar Sapkota"}
          </h1>
          <p className="text-xs font-medium mt-2 tracking-wide">
            {jobTitle.length > 3 ? jobTitle : "Software developer"}
          </p>
        </div>
        <div className="flex border-b pb-4">
          {/* Left side */}
          <div className="left-side min-w-48  xl:min-w-52 bg-[#dbdbdb] pl-4 pr-6 py-2">
            <section className="contact section text-left border-b border-[#adadad] h-36">
              <h1 className="font-bold mb-2 tracking-widest text-sm xl:text-base">
                Contact
              </h1>
              <ul className="text-xs space-y-2 ">
                <li className="flex gap-2 items-center">
                  <FaPhone size={10} className="" />
                  <span className="text-[8px] xl:text-[10px]  2xl:text-xs">
                    {userPhoneNumber.length > "3"
                      ? userPhoneNumber
                      : "403-123-1234"}
                  </span>
                </li>
                <li className="flex gap-2 items-center ">
                  <IoIosMail />
                  <span className="text-[10px] break-words">
                    {userEmailAddress.length > 3
                      ? userEmailAddress
                      : "sagarsapkota0987@gmail.com"}
                  </span>
                </li>
                {userWebsite.length > 3 ? (
                  <li className="flex gap-2 ">
                    <CiGlobe className="" />

                    <span className="text-[8px] xl:text-[10px]  2xl:text-xs">
                      {userWebsite}
                    </span>
                  </li>
                ) : (
                  ""
                )}

                {userAddress.length > 3 ? (
                  <li className="flex gap-2 ">
                    <FaMapMarker size={10} className="mt-0.5" />

                    <span className="text-[8px] xl:text-[10px]  2xl:text-xs">
                      {" "}
                      {userAddress}
                    </span>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </section>
            <section className="skills-section text-left my-3 border-b pb-3 mb-2 border-[#adadad]">
              <h1 className="font-bold mb-2 tracking-widest text-sm 2xl:text-base">
                Skills
              </h1>
              <p className="w-44 text-[8px] xl:text-[10px] 2xl:text-[10px] space-x-2">
                {skills?.map((skill, i) => (
                  <span>
                    {skill}
                    {i < skills.length - 1 && ", "}{" "}
                  </span>
                ))}
              </p>
              {Object.keys(chatOutput).length == 0 ? (
                <ul className="text-[8px] xl:text-[10px] 2xl:text-xs grid gap-1 grid-cols-3">
                  <li className="flex ">
                    <span>Sql</span>
                  </li>
                  <li className="">
                    <span>React</span>
                  </li>
                  <li className="">
                    <span>TailwindCss</span>
                  </li>
                  <li className="">
                    <span>NextJs</span>
                  </li>
                  <li className="">
                    <span>Testing</span>
                  </li>
                  <li className="">
                    <span>ExpressJs</span>
                  </li>
                  <li className="">
                    <span>C#</span>
                  </li>
                  <li className="">
                    <span>Java</span>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </section>
            <section className="skills-section text-left mt-3 border-b border-[#adadad] pb-4">
              <h1 className="font-bold mb-2 text-sm xl:text-base tracking-widest">
                Education
              </h1>
              <ul className="text-xs space-y-6 ">
                {userDegree.map((degree, i) => (
                  <li key={i} className="flex flex-col ">
                    <span className="text-[10px] 2xl:text-xs">
                      {degree.degreeName}
                    </span>
                    <span className="text-xs 2xl:text-sm font-bold tracking-tighter">
                      {degree.degreeInstitution}
                    </span>
                    <span className="text-[10px] 2xl:text-xs">
                      {degree.degreeEndDate}
                    </span>
                    <p className="text-[10px] 2xl:text-xs mt-1">
                      {degree.shortDesc}
                    </p>
                  </li>
                ))}

                {userDegree.length === 0 ? (
                  <li className="flex flex-col ">
                    <span className="text-[10px] 2xl:text-xs">Degree Name</span>
                    <span className="text-xs 2xl:text-sm font-bold tracking-tighter">
                      Institution Name
                    </span>
                    <span className="text-[10px] 2xl:text-xs">2024-08-08</span>
                    <p className="text-[10px] 2xl:text-xs mt-1">
                      You will be able to see the updated degree in next page!
                    </p>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </section>
            <section className="language-section text-left mt-3  border-[#adadad] pb-2 ">
              <h1 className="font-bold mb-2 tracking-widest text-sm xl:text-base">
                Language
              </h1>
              <ul className="text-xs space-y-2 ">
                {userLanguage.map((language, i) => (
                  <li className="flex gap-2 items-center justify-between  ">
                    <span>{language.languageName}</span>
                    <div className="w-full bg-gray-700/20 rounded-full h-2">
                      <div
                        className="bg-gray-500 h-2 rounded-full transition-all duration-500 ease-in-out"
                        style={{ width: `${language.languagePercentage}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* Right side */}
          <div className="other-details ml-2 py-2">
            <div className="profile h-36 text-left border-b">
              <h1 className="text-base font-semibold tracking-wider mb-2">
                Profile
              </h1>
              <p className="text-[9px] xl:text-[9px] 2xl:text-xs">
                {objective?.length > 3
                  ? objective
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sit! Porro dolorum reprehenderit eius nulla, eligendi facere reiciendis distinctio, assumenda cupiditate earum voluptatibus placeat! Mollitia nihil aspernatur voluptas saepe animi, reiciendis voluptatum nemo eveniet voluptates dolorum? Natus nihil reiciendis adipisci?"}
              </p>
            </div>
            <div className="profile mt-3 text-left  ml-4">
              <h1 className="text-xs xl:text-sm font-semibold tracking-wider ">
                Work Experience
              </h1>

              {dataJobExperience?.map((exp, i) => (
                <div className="experience-1 mb-10">
                  <h1 className="text-xs 2xl:text-sm my-2">{exp.jobTitle}</h1>
                  <span className="flex justify-between my-1  xl:my-2 mr-4">
                    <h1 className="text-[10px] xl:text-xs tracking-tighter">
                      {exp.companyName}
                    </h1>
                    <h1 className="text-[10px] 2xl:text-xs">
                      {exp.startDate} - {exp.endDate}
                    </h1>
                  </span>
                  <ol className="text-[10px] 2xl:text-xs tracking-tighter  pr-5">
                    {exp?.userRoleDescription?.map((jobExp, i) => (
                      <li>
                        <span className="text-sm p-0 m-0"> &#8226; </span>
                        {jobExp}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}

              {Object.keys(chatOutput).length == 0 ? (
                <>
                  <div className="experience-1 mb-10">
                    <h1 className="text-xs 2xl:text-sm my-1  xl:my-2">
                      Your Job Position Here
                    </h1>
                    <span className="flex justify-between my-1 xl:my-2 mr-4">
                      <h1 className="text-[10px] xl:text-xs tracking-tighter">
                        Company Name
                      </h1>
                      <h1 className="text-[10px] 2xl:text-xs">2020-2024</h1>
                    </span>
                    <ol className="text-[10px] 2xl:text-xs tracking-tighter space-y-0 xl:space-y-1">
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Iure vitae
                        praesentium quis ab quod veniam optio tenetur quam fuga.
                        Est?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Iure,
                        accusamus obcaecati eaque ex dolorum
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span> Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Voluptatum,
                        molestiae harum provident nostrum incidunt suscipit
                        dolorem, repellat animi veniam similique?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eaque, qui!
                      </li>
                    </ol>
                  </div>
                  <div className="experience-1 mb-10">
                    <h1 className="text-xs 2xl:text-sm my-1  xl:my-2">
                      Your Job Position Here
                    </h1>
                    <span className="flex justify-between my-1 xl:my-2 mr-4">
                      <h1 className="text-[10px] xl:text-xs tracking-tighter">
                        Company Name
                      </h1>
                      <h1 className="text-[10px] 2xl:text-xs">2020-2024</h1>
                    </span>
                    <ol className="text-[10px] 2xl:text-xs tracking-tighter space-y-0 xl:space-y-1">
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Iure vitae
                        praesentium quis ab quod veniam optio tenetur quam fuga.
                        Est?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Iure,
                        accusamus obcaecati eaque ex dolorum
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span> Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Voluptatum,
                        molestiae harum provident nostrum incidunt suscipit
                        dolorem, repellat animi veniam similique?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eaque, qui!
                      </li>
                    </ol>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div ref={resumeRef} className={initialTap ? "" : "hidden"}>
        <div className="title py-5 mb-2  border-b">
          <h1 className="text-2xl tracking-widest">
            {" "}
            {userFullName.length > 3 ? userFullName : "Sagar Sapkota"}
          </h1>
          <p className="text-xs font-medium mt-2 tracking-wide">
            {jobTitle.length > 3 ? jobTitle : "Software developer"}
          </p>
        </div>
        <div className="flex pb-4 border-b">
          {/* Left side */}
          <div className="left-side min-w-52 bg-[#dbdbdb] pl-4 pr-6 py-2">
            <section className="contact section text-left  h-36">
              <h1 className="font-bold mb-2 tracking-widest">Contact</h1>
              <ul className="text-xs space-y-2 ">
                <li className="flex gap-2 justify-start items-center">
                  <span className="h-4 w-4 pt-2">
                    <FaPhone className="" />
                  </span>
                  <span>
                    {userPhoneNumber.length > "3"
                      ? userPhoneNumber
                      : "403-123-1234"}
                  </span>
                </li>
                <li className="flex gap-2 ">
                  <span className="h-4 w-4 pt-2">
                    <IoIosMail className="" />
                  </span>
                  <span className="w-40 break-words">
                    {userEmailAddress.length > 3
                      ? userEmailAddress
                      : "sagarsapkota0987@gmail.com"}
                  </span>
                </li>
                {userWebsite.length > 3 ? (
                  <li className="flex gap-2 ">
                    <span className="h-4 w-4 pt-2">
                      <CiGlobe className="" />
                    </span>
                    <span>{userWebsite}</span>
                  </li>
                ) : (
                  ""
                )}

                {userAddress.length > 3 ? (
                  <li className="flex gap-2 ">
                    <span className="h-4 w-4 pt-2">
                      <FaMapMarker className="" />
                    </span>
                    <span>{userAddress}</span>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </section>
            <section className="skills-section text-left my-3 border-b pb-3 mb-2 border-[#adadad]">
              <h1 className="font-bold mb-2 tracking-widest">Skills</h1>
              <p className="w-44 text-[10px] ">
                {skills?.map((skill, i) => (
                  <span className="">
                    {skill}
                    {i < skills.length - 1 && ", "}
                  </span>
                ))}
              </p>
              {Object.keys(chatOutput).length == 0 ? (
                <ul className="text-xs grid gap-1 grid-cols-3">
                  <li className="flex ">
                    <span>Sql</span>
                  </li>
                  <li className="">
                    <span>React</span>
                  </li>
                  <li className="">
                    <span>TailwindCss</span>
                  </li>
                  <li className="">
                    <span>NextJs</span>
                  </li>
                  <li className="">
                    <span>Testing</span>
                  </li>
                  <li className="">
                    <span>ExpressJs</span>
                  </li>
                  <li className="">
                    <span>C#</span>
                  </li>
                  <li className="">
                    <span>Java</span>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </section>
            <section className="skills-section text-left mt-3 border-b border-[#adadad] pb-4">
              <h1 className="font-bold mb-2 tracking-widest">Education</h1>
              <ul className="text-xs space-y-6 ">
                {userDegree.map((degree, i) => (
                  <li key={i} className="flex flex-col ">
                    <span>{degree.degreeName}</span>
                    <span className="text-sm font-bold tracking-tighter">
                      {degree.degreeInstitution}
                    </span>
                    <span>{degree.degreeEndDate}</span>
                    <p className="mt-1">{degree.shortDesc}</p>
                  </li>
                ))}

                {userDegree.length === 0 ? (
                  <li className="flex flex-col ">
                    <span>Degree Name</span>
                    <span className="text-sm font-bold tracking-tighter">
                      Institution Name
                    </span>
                    <span>2024-08-08</span>
                    <p className="mt-1">
                      You will be able to see the updated degree in next page!
                    </p>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </section>
            <section className="language-section text-left mt-3  border-[#adadad] pb-2 ">
              <h1 className="font-bold mb-2 tracking-widest">Language</h1>
              <ul className="text-xs space-y-2 ">
                {userLanguage.map((language, i) => (
                  <li className="flex gap-2 items-center justify-between  ">
                    <span>{language.languageName}</span>
                    <div className="w-full bg-gray-700/20 rounded-full h-2  relative flex flex-col items-center justify-center ">
                      <div
                        className="bg-gray-500 h-2 absolute top-1 left-0  rounded-full transition-allduration-500 ease-in-out"
                        style={{ width: `${language.languagePercentage}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/* Right side */}
          <div className="other-details ml-2 py-2">
            <div className="profile h-36 text-left border-b">
              <h1 className="text-base font-semibold tracking-wider mb-2">
                Profile
              </h1>
              <p className="text-xs">
                {objective?.length > 3
                  ? objective
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sit! Porro dolorum reprehenderit eius nulla, eligendi facere reiciendis distinctio, assumenda cupiditate earum voluptatibus placeat! Mollitia nihil aspernatur voluptas saepe animi, reiciendis voluptatum nemo eveniet voluptates dolorum? Natus nihil reiciendis adipisci?"}
              </p>
            </div>
            <div className="profile mt-3 text-left ">
              <h1 className="text-base font-semibold tracking-wider ">
                Work Experience
              </h1>

              {dataJobExperience?.map((exp, i) => (
                <div key={i} className="experience-1 mb-10">
                  <h1 className="text-base my-2">{exp.jobTitle}</h1>
                  <span className="flex justify-between my-2 mr-4">
                    <h1 className="text-sm tracking-tighter">
                      {exp.companyName}
                    </h1>
                    <h1 className="text-xs">
                      {exp.startDate} - {exp.endDate}
                    </h1>
                  </span>
                  <ol className="text-xs tracking-tighter space-y-1  pr-5">
                    {exp?.userRoleDescription?.map((jobExp, i) => (
                      <li key={i}>
                        <span className="text-sm">&#8226; </span>
                        {jobExp}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
              {Object.keys(chatOutput).length == 0 ? (
                <>
                  <div className="experience-1 mb-10">
                    <h1 className="text-base my-2">Your Job Position Here</h1>
                    <span className="flex justify-between my-2 mr-4">
                      <h1 className="text-sm tracking-tighter">Company Name</h1>
                      <h1 className="text-xs">2020-2024</h1>
                    </span>
                    <ol className="text-xs tracking-tighter space-y-1">
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure vitae praesentium quis ab quod veniam optio tenetur
                        quam fuga. Est?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iure, accusamus obcaecati eaque ex dolorum
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, molestiae harum provident nostrum incidunt
                        suscipit dolorem, repellat animi veniam similique?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eaque, qui!
                      </li>
                    </ol>
                  </div>
                  <div className="experience-1 mb-4">
                    <h1 className="text-base my-2">Your Job Position Here</h1>
                    <span className="flex justify-between my-2 mr-4">
                      <h1 className="text-sm tracking-tighter">Company Name</h1>
                      <h1 className="text-xs">2020-2024</h1>
                    </span>
                    <ol className="text-xs tracking-tighter space-y-1">
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure vitae praesentium quis ab quod veniam optio tenetur
                        quam fuga. Est?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iure, accusamus obcaecati eaque ex dolorum
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, molestiae harum provident nostrum incidunt
                        suscipit dolorem, repellat animi veniam similique?
                      </li>
                      <li>
                        <span className="text-sm"> &#8226;</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eaque, qui!
                      </li>
                    </ol>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumeTemplatePage;

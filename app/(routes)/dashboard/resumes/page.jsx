"use client";
import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { useUser } from "@clerk/nextjs";
import { ClipLoader } from "react-spinners";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { RefreshCcw } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
export const runtime = "edge";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [resumeDetails, setResumeDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    fetchUserResume();
  }, [isLoaded, user]);

  const fetchUserResume = async () => {
    try {
      if (!user?.id) {
        return;
      }

      const response = await fetch(
        `${apiUrl}users/get-user?clerkId=${user.id}`
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error fetching user details:", errorMessage);
        return;
      }

      const data = await response.json();
      console.log("User details fetched successfully:", data.userData.resumes);

      const resumeArr = data.userData.resumes;
      if (!resumeArr || resumeArr.length === 0) {
        console.error("No resumes available to fetch.");
        return;
      }
      const resumePromises = resumeArr.map((resumeId) => fetchResume(resumeId));
      const results = await Promise.all(resumePromises);
      setResumeDetails(results);
      console.log("All resumes fetched successfully:", results);
    } catch (error) {
      console.error("Error running the function:", error.message || error);
    }
  };

  const fetchResume = async (resumeId) => {
    try {
      const response = await fetch(
        `${apiUrl}resume/detail?resumeId=${resumeId}&clerkId=${user?.id}`
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error fetching user details:", errorMessage);
        return;
      }
      const data = await response.json();
      return data.resumeDetails;
    } catch (error) {
      console.error("Error fetching resumes:", error.message || error);
    }
  };

  const totalPages = resumeDetails
    ? Math.ceil(resumeDetails.length / itemsPerPage)
    : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResumes = resumeDetails
    ? resumeDetails.slice(startIndex, startIndex + itemsPerPage)
    : [];

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto max-w-[1000px] rounded-lg  mr-2 ">
      <div className="border border-gray-200">
        <div className="relative">
          <label for="Search" className="sr-only">
            Search
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border-gray-200 py-2.5 px-4 pe-10 shadow-sm sm:text-sm"
          />
        </div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm border">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900">
                Created
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap text-start px-4 py-2 font-medium text-gray-900">
                Edit
              </th>
            </tr>
          </thead>
          {resumeDetails === null ? (
            // While loading, show the ClipLoader
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4">
                  <ClipLoader size={20} />
                </td>
                <td className="px-4">
                  <ClipLoader size={20} />
                </td>
                <td className="px-4">
                  <ClipLoader size={20} />
                </td>
                <td className="px-4">
                  <ClipLoader size={20} />
                </td>
              </tr>
            </tbody>
          ) : resumeDetails.length === 0 ? (
            // If no resumes are available, display a message
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td colSpan="4" className="px-4 text-center text-gray-700">
                  No resumes available
                </td>
              </tr>
            </tbody>
          ) : (
            // If resumes are available, show the resume details
            <tbody className="divide-y divide-gray-200">
              {currentResumes.map((resume) => (
                <tr key={resume.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {resume.resumeTitle || "Unknown"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {resume.createdAt
                      ? format(new Date(resume.createdAt), "yyyy-MM-dd")
                      : "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {resume.jobTitle || "N/A"}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex space-x-2">
                    <Link href={`/dashboard/resumes/${resume?._id}`}>
                      <RefreshCcw width={20} />
                    </Link>
                    <button>
                      <Trash2 width={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        {/* Pagination Section */}
        <div className="flex justify-center  py-2">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`${
                    currentPage === 1
                      ? "text-gray-500 cursor-pointer" // Keep pointer for disabled
                      : "text-gray-900 cursor-pointer hover:text-gray-700"
                  }`}
                />
              </PaginationItem>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                      className={`border border-gray-600 rounded-[10%]`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              {/* Ellipsis (if needed) */}
              {totalPages > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`${
                    currentPage === totalPages
                      ? "text-gray-500 cursor-pointer" // Keep pointer for disabled
                      : "text-gray-900 cursor-pointer hover:text-gray-700"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

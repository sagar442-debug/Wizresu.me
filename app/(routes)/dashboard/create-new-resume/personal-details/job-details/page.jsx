import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  return (
    <div>
      <div className="rounded min-w-[40rem] min-h-[80vh]">
        <Card>
          <CardHeader>
            <CardTitle>Previous Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 1
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title 1"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 1
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 1"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Date
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Date"
                    type="text"
                    id="full-name"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                ></textarea>
              </div>
            </form>
            <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Job Title/ Project title 2
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Job title"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Company Name 2
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Company Name 2"
                    type="text"
                    id="full-name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Date
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Date"
                    type="text"
                    id="full-name"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <textarea
                  className="w-full rounded-lg border resize-none border-gray-200 p-3 text-sm"
                  placeholder="Job Description"
                  rows="10"
                  id="Job Description"
                ></textarea>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;

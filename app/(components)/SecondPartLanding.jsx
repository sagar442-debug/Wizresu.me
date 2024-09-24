import React from "react";
import { Wand } from "lucide-react";

function SecondPartLanding() {
  return (
    <div className="h-[100vh] mt-20">
      <div className="flex justify-center items-center">
        <Wand
          height={100}
          width={100}
          color="#2a2663"
          className="-rotate-90 "
        />
        <h1 className="text-4xl font-bold text-[#2a2663]">
          How's The Magic Done?
        </h1>
      </div>
    </div>
  );
}

export default SecondPartLanding;

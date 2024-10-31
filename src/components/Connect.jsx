import { Mail } from "lucide-react";
import React from "react";

const Connect = () => {
  return (
    <section
      id="connect"
      className="flex items-center justify-center 
        transition-all duration-300 ease-out  pb-20 "
    >
      <a
        href="mailto:shahidshaikh065347@gmail.com?subject=Hi Shahid"
        className="transition-transform duration-300 hover:-translate-y-0.5"
      >
        <button className="px-6 py-3 border rounded-lg bg-black/50 flex gap-3 justify-center items-center font-itims text-2xl">
          <Mail />
          Let's get in touch!
        </button>
      </a>
    </section>
  );
};

export default Connect;

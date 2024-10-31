import React from "react";
import { Code2, Blocks, Cpu } from "lucide-react";

const Home = () => {
  return (
    <section id="/">
      <div className="flex flex-col justify-center mt-[5rem] text-center px-2 ">
        <h1 className="text-3xl font-itims">
          Hi I'am,{" "}
          <span className="text-6xl md:text-8xl font-[font-1]">Shahid</span>
        </h1>{" "}
        <br />
        <h3 className="text-3xl md:text-5xl font-[font-2]">
          Frontend Developer & Web3 Engineer
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  px-[2rem] mt-[8rem]">
        <SkillCard
          icon={<Code2 className="w-8 h-8" color="#A78BFA" />}
          title="Frontend Development"
          description="React, TypeScript, Tailwind CSS, Next.js and all other tools"
        />
        <SkillCard
          icon={
            <div className="flex gap-3">
              <Blocks className="w-8 h-8" color="#F472B6" />
              <Cpu className="w-8 h-8" color="#60A5FA" />
            </div>
          }
          title="Web3 Development"
          description="Solidity, wagmi, Foundry, IPFS, DeFi, NFTs, Security"
        />
      </div>
    </section>
  );
};

function SkillCard({ icon, title, description }) {
  return (
    <div className="p-6  rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl  mb-2 text-white font-[font-3]  tracking-normal  md:text-4xl border-b-2 pb-1 w-fit font-light">
        {title}
      </h3>
      <p className="text-gray-400 font-mono mt-[1rem]">{description}</p>
    </div>
  );
}

export default Home;

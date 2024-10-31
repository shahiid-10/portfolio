import { ExternalLink, Github } from "lucide-react";
import NFT_DAPP from "../assets/NFT_dapp.png";
import NEON_NFT from "../assets/Landing_NEON_NFT.png";
import ASTROL_LANDING from "../assets/Astrol_Landing.png";
import React from "react";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="py-20 font-poppins ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl md:text-5xl font-bold  bg-clip-text flex items-center justify-center gap-3 text-transparent  bg-custom-radial-gradient h-fit  mb-16">
          Featured Projects 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProjectCard
            title="Landing Page NEON NFT"
            description="Explore NEON NFT — a vibrant digital space to discover and collect unique art, enhanced with smooth GSAP animations."
            image={NEON_NFT}
            tags={["React", "GSAP"]}
            projectUrl="https://landing-neon-nft.vercel.app/"
            githubUrl="https://github.com/shahiid-10/landing_neon_nft"
          />
          <ProjectCard
            title="NFT dapp"
            description="100x NFT dApp — a seamless platform on the Sepolia chain to mint, view, and manage NFTs. Built with React and Tailwind CSS for a fast, responsive experience."
            image={NFT_DAPP}
            tags={["React.js", "Tailwind Css", "IPFS", "NFT"]}
            projectUrl="https://100x-nftdapp.vercel.app/"
            githubUrl="https://github.com/shahiid-10/100xNFT-dapp"
          />
          <ProjectCard
            title="Landing Page Astrol protocol"
            description="Astrol protocol — a dynamic landing page powered by React, Tailwind CSS, and Framer Motion for smooth, engaging interactions."
            image={ASTROL_LANDING}
            tags={["React.js", "TypeScript", "Tailwind Css"]}
            projectUrl="https://astrol-protocol-landing-page.vercel.app/"
            githubUrl="https://github.com/shahiid-10/Astrol-protocol-landing-page"
          />
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  title,
  description,
  image,
  tags,
  projectUrl,
  githubUrl,
}) {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1E293B]/50 border border-[#334155] hover:border-white/55 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden group h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-medium mb-3 text-[#E2E8F0]">{title}</h3>
        <p className="text-[#94A3B8] mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#60A5FA]/10 text-[#93C5FD] border border-[#60A5FA]/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={projectUrl}
            className="flex items-center gap-2 text-[#60A5FA] hover:text-[#93C5FD] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">Live Link</span>
          </a>
          <a
            href={githubUrl}
            className="flex items-center gap-2 text-[#60A5FA] hover:text-[#93C5FD] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub   />
            <span className="text-sm font-medium">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;

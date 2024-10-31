import React from "react";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      Icon: Code2,
      title: "Clean Code",
      description: "Crafting elegant, maintainable solutions",
    },
    {
      Icon: Users,
      title: "Collaborative",
      description: "Working effectively in team environments",
    },
    {
      Icon: Rocket,
      title: "Innovation",
      description: "Exploring cutting-edge technologies",
    },
  ];
  return (
    <section data-scroll id="about" className="py-20 px-6 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl bg-black/50  text-white mb-8 tracking-tight font-poppins font-medium border-2 w-fit rounded-[25px] px-4 py-2">
          About Me
        </h2>

        <div className="space-y-8 font-itims text-2xl">
          <p className="text-[1.3rem]  leading-relaxed animate-fade-in ">
            I'm a frontend developer dedicated to crafting beautiful and
            user-friendly interfaces. With expertise in modern frameworks like
            React and Next.js, I excel at creating responsive and dynamic web
            applications that deliver a seamless user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
                className="animate-fade-in"
              />
            ))}
          </div>

          <p
            className="text-[1.3rem] text-white leading-relaxed animate-fade-in "
            style={{ animationDelay: "600ms" }}
          >
            I thrive on turning complex ideas into simple, elegant designs and
            am passionate about staying updated with the latest industry trends
            and best practices. My curiosity also drives my interest in WEB3
            technologies, where I see incredible potential for decentralized
            applications and innovations in the digital landscape.
          </p>

          <p
            className="text-[1.3rem] leading-relaxed animate-fade-in "
            style={{ animationDelay: "800ms" }}
          >
            Whether working independently or collaborating with a team, I love
            tackling challenges and delivering high-quality results. Let's
            connect and create something amazing together!
          </p>
        </div>

        <CallToAction />
      </div>
    </section>
  );
};

const CallToAction = () => (
  <div className="mt-12 p-6 bg-gray-800/50 rounded-2xl border border-purple-500/20 transform transition-all duration-300 hover:border-purple-500/40 hover:bg-gray-800/80">
    <h3 className="text-xl font-semibold text-purple-300 mb-3">
      Let's Build Something Together
    </h3>
    <p className="text-gray-300">
      I'm always open to discussing new projects and opportunities.
    </p>
  </div>
);

const FeatureCard = ({ Icon, title, description, style, className }) => (
  <div
    className={`p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    style={style}
  >
    <Icon className="w-8 h-8 text-purple-400 mb-4" />
    <h3 className="font-semibold text-white mb-2 font-poppins text-lg">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;

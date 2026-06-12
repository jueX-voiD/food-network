import { useState } from "react";
import Footer from "@/components/Footer";
import goodgovernance from "@/assets/good-governance.svg";
import ecological from "@/assets/ecological.svg";
import livelihoods from "@/assets/livelihoods.svg";
import sociallearning from "@/assets/social-learning.svg";
import aboutHero from "@/assets/about-hero.png";
import patrickHonauer from "@/assets/Patrick Honauer.png";
import tulsiGiri from "@/assets/Tulsi Giri.jpg";
import murielFischer from "@/assets/Muriel Fischer.png";
import sarvagunaAcademy from "@/assets/Sarvaguna Academy.png";
import potImg from "@/assets/pot.png";
import bachsermart from "@/assets/bachsermart.png";
import kheti from "@/assets/kheti.png";
import theBazaar from "@/assets/the-bazaar.png";
import socialGastronomyMovement from "@/assets/social-gastronomy-movement.png";
import opnSfsp from "@/assets/logo OPN SFSP 1.png";
import image14 from "@/assets/image 14.png";

function ArrowIcon({ color = "#fff" }: { color?: string }) {
  return (
    <svg
      width="33"
      height="14"
      viewBox="0 0 33 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 7H30M24 1L30 7L24 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Principle = {
  svg: string;
  title: string;
  subtitle?: string;
  items: string[];
};

const principles: Principle[] = [
  {
    svg: goodgovernance,
    title: "Good Governance",
    subtitle: "New rules for an increased collaboration",
    items: [
      "Permanent Stakeholder Dialogue and Participation",
      "Stakeholder Empowerment, Equality, and Shared Responsibility",
      "Fairness, Transparency and Accountability of Processes and Products",
      "Associative Economics",
    ],
  },
  {
    svg: ecological,
    title: "Ecological Sustainability",
    subtitle: "Resilient and diversified food system",
    items: [
      "Production methods following agro-ecological principles",
      "Processing to preserve food in resource efficient way",
      "Efficient & ecological distribution enabling direct linkage between producers and consumers",
      "Responsibility in Consumption",
    ],
  },
  {
    svg: livelihoods,
    title: "Sustainable Livelihoods",
    subtitle: "A collaborative relationship",
    items: [
      "Contributing to community building",
      "Strengthening the local economy",
      "Respect existing and create new cultural dimensions in food",
      "Fostering innovation and facilitating transformation",
    ],
  },
  {
    svg: sociallearning,
    title: "Social Learning & Innovation Exchange",
    items: [
      "Developing and maintaining instruments for social learning and innovation",
      "Creating innovations in production, processing, retailing",
      "Vocational education/skill development and entrepreneurial training",
      "Research of new methods and techniques",
    ],
  },
];

function PrincipleCard({ svg, title, subtitle, items }: Principle) {
  return (
    <div className="bg-[#E5EAEC] rounded-2xl px-8 py-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {svg && <img src={svg} alt="" aria-hidden="true" className="w-8 h-8" />}
        <h3 className="text-32 text-fn-dark uppercase tracking-wide">
          {title}
        </h3>
      </div>
      {subtitle && <p className="text-20 font-bold text-fn-dark">{subtitle}</p>}
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="text-16 text-fn-dark flex gap-2">
            <span className="flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-fn-bg mt-[120px]">
      <main>
        {/* ── Hero ── */}
        <section className="max-w-[1200px] mx-auto px-5 pt-12 pb-16">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 justify-between">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-24 lg:max-w-[524px]">
              <h1 className="text-80 text-fn-dark uppercase text-center lg:text-left">
                About Us
              </h1>
              <div className="flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start">
                {/* large decorative quote mark */}
                <svg
                  width="71"
                  height="56"
                  viewBox="0 0 71 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.6281 0V11.8629H59.8079C54.445 11.8629 51.7636 14.5379 51.7636 19.8878V25.4704H54.7365C59.3998 25.4704 63.2471 26.866 66.2783 29.6573C69.4261 32.4486 71 35.9958 71 40.2991C71 44.9512 69.4261 48.731 66.2783 51.6386C63.2471 54.5462 59.3998 56 54.7365 56C49.9565 56 46.0509 54.5462 43.0197 51.6386C39.9885 48.6147 38.4729 44.6023 38.4729 39.6012V19.5389C38.4729 6.51298 45.0016 0 58.0591 0H66.6281ZM28.1552 0V11.8629H21.335C15.9721 11.8629 13.2906 14.5379 13.2906 19.8878V25.4704H16.2635C20.9269 25.4704 24.7742 26.866 27.8054 29.6573C30.9532 32.4486 32.5271 35.9958 32.5271 40.2991C32.5271 44.9512 30.9532 48.731 27.8054 51.6386C24.7742 54.5462 20.9269 56 16.2635 56C11.4836 56 7.578 54.5462 4.5468 51.6386C1.5156 48.6147 0 44.6023 0 39.6012V19.5389C0 6.51298 6.52874 0 19.5862 0H28.1552Z"
                    fill="#E5EAEC"
                  />
                </svg>

                <p className="text-32 text-fn-dark text-center lg:text-left">
                  We can change a village and society through food, as food is
                  the basis of every community
                </p>
              </div>
            </div>
            {/* Right – team photo */}
            <div className="lg:w-[480px] flex-shrink-0 w-full justify-center flex">
              <div className="rounded-2xl overflow-hidden w-full bg-fn-section max-w-[572px] ">
                <img
                  src={aboutHero}
                  alt="Food Networks team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Description ── */}
        <section className="max-w-[1036px] mx-auto px-5 py-10">
          <div className="w-full mx-auto flex flex-col gap-6 text-center">
            <p className="text-20 text-fn-dark">
              Food Networks is a global initiative aiming at replacing the
              commodified food systems with Sustainable Regional Food Networks
              (SRFN). By replicating successful SRFN models around the globe, we
              accelerate the bottom-up transition towards equitable and
              resilient food systems and contribute to achieving UN's
              Sustainable Development Goals 2 and 12.
            </p>
            <p className="text-20 text-fn-dark">
              Because we believe in real food as collaborative commons
            </p>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="max-w-[1200px] mx-auto px-5 py-14">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 justify-between">
            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-5 flex-1 w-auto">
              <div className="bg-[#E5EAEC] rounded-2xl p-8 border max-w-[384px]">
                <p className="text-24 font-bold uppercase text-fn-dark mb-4">
                  Vision
                </p>
                <p className="text-20 text-fn-dark">
                  We envision interconnected Regional Food Networks (SRNF)
                  become the common food systems: "Food is a Collaborative
                  Commons"
                </p>
              </div>
              <div className="bg-[#E5EAEC] rounded-2xl p-8 border max-w-[384px]">
                <p className="text-24 font-bold uppercase text-fn-dark mb-4">
                  Mission
                </p>
                <p className="text-20 text-fn-dark">
                  We take care of relationships between interconnected living
                  examples of Sustainable Regional Food Networks (SRNF) around
                  the world
                </p>
              </div>
            </div>
            {/* Big heading */}
            <div className="w-auto flex-shrink-0 max-w-full lg:max-w-[241px]">
              <h2 className="text-72 text-fn-dark uppercase">
                Mission &amp; Vision
              </h2>
            </div>
          </div>
        </section>

        {/* ── Core Principles intro ── */}
        <section className="max-w-[1200px] mx-auto px-5 py-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Big heading left */}
            <div className="lg:w-[382px] w-full flex-shrink-0">
              <h2 className="text-80 text-fn-dark uppercase">
                Our Core Principles &amp; Values
              </h2>
            </div>
            {/* Description right – two columns */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <p className="text-18 text-fn-dark">
                Tomorrow's food system calls for a system of regional connected
                food networks beyond the industrialized and commodified food
                supply chains.
                <br />
                <br />
                The basis for this shift is an understanding of food as a
                "collaborative common" which implies value-generating,
                collaborative and reciprocal partnerships between equal actors.
              </p>
              <p className="text-18 text-fn-dark">
                We aim at creating working-models based on the combination of
                academic research, vocational training, entrepreneurial
                activities, and public actor support and consumer engagement.
                <br />
                <br />
                Our Sustainable Regional Food Networks (SRFN) are based on these
                four principles:
              </p>
            </div>
          </div>
        </section>

        {/* ── Principles Grid ── */}
        <section className="max-w-[1200px] mx-auto px-5 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((principle) => (
              <PrincipleCard key={principle.title} {...principle} />
            ))}
          </div>
        </section>

        {/* ── The Team ── */}
        <section className="max-w-[1200px] mx-auto px-5 py-14">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Team photos */}
            <div className="flex flex-col sm:flex-row gap-5 flex-1 w-full">
              {[
                {
                  name: "Patrick Honauer",
                  role: "Co-Facilitator",
                  img: patrickHonauer,
                },
                {
                  name: "Tulsi Giri",
                  role: "Co-Facilitator",
                  img: tulsiGiri,
                },
                {
                  name: "Muriel Fischer",
                  role: "Co-Facilitator",
                  img: murielFischer,
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex-1 relative rounded-2xl overflow-hidden min-h-[260px]"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top absolute inset-0"
                  />
                  {/* name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-fn-dark/80 to-transparent px-5 pt-10 pb-5">
                    <p className="font-grotesk font-medium text-[15px] text-white">
                      {member.name}
                    </p>
                    <p className="font-grotesk font-normal text-[12px] text-white/70 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Heading */}
            <div className="lg:w-[280px] flex-shrink-0 text-right lg:text-right">
              <h2 className="text-80 text-fn-dark uppercase">The Team</h2>
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="max-w-[1200px] mx-auto px-5 py-14">
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-80 text-fn-dark uppercase">Partners</h2>
              <p className="text-20 text-fn-dark max-w-[792px] mx-auto">
                Food Networks is a member of the Multi-stakeholder Advisory
                Committee (MAC) of the One Planet (10YFP) Sustainable Food
                Systems (SFS) Programme
              </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Grassroot */}
              <div className="flex flex-col gap-6 bg-[#E5EAEC] rounded-2xl p-8 border">
                <h3 className="text-32 uppercase text-fn-dark text-center">
                  Grassroot Food Network Models
                </h3>
                <div className="flex flex-col gap-5 items-center justify-center">
                  <img
                    src={sarvagunaAcademy}
                    alt=""
                    className="h-[45px]"
                  />
                  <img
                    src={potImg}
                    alt=""
                    className="h-[40px]"
                  />
                </div>
              </div>

              {/* Stakeholders */}
              <div className="flex flex-col gap-6 bg-[#E5EAEC] rounded-2xl p-8 border">
                <h3 className="text-32 uppercase text-fn-dark text-center">
                  Stakeholders Around FN
                </h3>
                <div className="grid grid-cols-2 gap-4 justify-center items-center self-center w-full">
                  {[
                    bachsermart,
                    kheti,
                    theBazaar,
                    socialGastronomyMovement,
                  ].map((logo) => (
                    <div key={logo}>
                      <img
                        src={logo}
                        alt="Partner logo"
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy Makers */}
              <div className="flex flex-col gap-6 bg-[#E5EAEC] rounded-2xl p-8 border">
                <h3 className="text-32 uppercase text-fn-dark text-center">
                  Policy Makers
                </h3>
                <div className="flex flex-col gap-5 items-center justify-center">
                  <img
                    src={opnSfsp}
                    alt=""
                    className="h-[40px]"
                  />
                  <img
                    src={image14}
                    alt=""
                    className="h-[60px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

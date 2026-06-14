import footerLogo from "@/assets/site-logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-fn-dark">
      <div className="max-w-[1200px] mx-auto px-5 pt-[50px] pb-[40px]">
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-8">
          <div className="flex flex-col gap-[14px]">
            <img
              src={footerLogo}
              alt="Food Networks"
              className="w-[131px] h-auto"
            />
            <p className="font-grotesk font-normal text-[14px] text-white leading-[140%]">
              info@foodnetworks.ch
            </p>
            <p className="font-grotesk font-normal text-[14px] text-white leading-[140%]">
              patrick.honauer@rundumkultur.ch
              <br />
              Food Networks c/o Patrick Honauer
              <br />
              Haldenbachstrasse 17
              <br />
              CH-8006 Zürich
            </p>
          </div>
        </div>
        <div className="border-t border-white pt-6">
          <p className="font-grotesk font-normal text-[14px] text-white leading-[140%]">
            © 2024 Food Networks. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

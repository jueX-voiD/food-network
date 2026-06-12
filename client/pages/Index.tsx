import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.svg";
import foodascommodity from "@/assets/food-commodity.svg";
import foodascollaborativecommons from "@/assets/food-collaborative.svg";
import masscatering from "@/assets/mass-catering.svg";
import foodhub from "@/assets/food-hub.svg";
import foodcoop from "@/assets/food-coop.svg";
import publicprocurement from "@/assets/public-procurement.svg";
import education from "@/assets/education.svg";
import consulting from "@/assets/consulting.svg";

function ArrowIcon({ color = "#E67C00" }: { color?: string }) {
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

function HeroSection() {
  return (
    <section className="w-full mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-8 py-10 md:py-14">
        <div className="flex flex-col gap-5 flex-1 w-[689px] max-w-full">
          <h1 className="text-80 text-fn-dark uppercase tracking-[-1px] text-center lg:text-left">
            From Food-Chains to Food Network
          </h1>
          <p className="text-24 text-fn-dark text-center lg:text-left w-[433px] max-w-full self-center lg:self-start">
            from food as a commodity to food as collaborative commons
          </p>
        </div>

        <div className="relative max-w-full w-[420px] lflex-shrink-0  overflow-hidden">
          <img
            src={heroIllustration}
            alt="Farmers illustration"
            className="h-full w-full max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="w-full my-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row md:justify-between gap-8 justify-center items-center">
        <div className="max-w-[586px] h-[205px]">
          <svg
            viewBox="0 0 586 205"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-70"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.2827 88.44V201H72.5655V88.44H110V58.5771H72.5655V38.4771C72.5655 32.7343 75.2531 29.8629 80.6283 29.8629H105.393V0H67.9581C58.5515 0 50.8726 2.96714 44.9215 8.90143C39.1623 14.6443 36.2827 22.3971 36.2827 32.16V58.5771H0V88.44H36.2827ZM468.471 196.674C478.433 202.225 489.065 205 500.368 205C513.395 205 523.261 202.799 529.966 198.396C536.862 193.994 541.939 189.113 545.195 183.753H550.368V200.98H586V0H549.793V74.937H544.621C542.705 71.4916 539.927 68.2376 536.287 65.1751C532.648 62.1125 527.858 59.6242 521.92 57.7101C516.172 55.6046 508.989 54.5518 500.368 54.5518C488.874 54.5518 478.241 57.423 468.471 63.1653C458.701 68.7161 450.847 76.9468 444.908 87.8571C438.969 98.7675 436 111.975 436 127.479V132.073C436 147.577 438.969 160.784 444.908 171.695C450.847 182.605 458.701 190.931 468.471 196.674ZM148.635 195.412C159.981 201.137 172.769 204 187 204C201.231 204 214.019 201.137 225.365 195.412C236.712 189.687 245.654 181.385 252.192 170.508C258.731 159.63 262 146.557 262 131.29V126.71C262 111.443 258.731 98.3702 252.192 87.4924C245.654 76.6145 236.712 68.313 225.365 62.5878C214.019 56.8626 201.231 54 187 54C172.769 54 159.981 56.8626 148.635 62.5878C137.288 68.313 128.346 76.6145 121.808 87.4924C115.269 98.3702 112 111.443 112 126.71V131.29C112 146.557 115.269 159.63 121.808 170.508C128.346 181.385 137.288 189.687 148.635 195.412ZM349 205C334.769 205 321.981 202.137 310.635 196.412C299.288 190.687 290.346 182.385 283.808 171.508C277.269 160.63 274 147.557 274 132.29V127.71C274 112.443 277.269 99.3702 283.808 88.4924C290.346 77.6145 299.288 69.313 310.635 63.5878C321.981 57.8626 334.769 55 349 55C363.231 55 376.019 57.8626 387.365 63.5878C398.712 69.313 407.654 77.6145 414.192 88.4924C420.731 99.3702 424 112.443 424 127.71V132.29C424 147.557 420.731 160.63 414.192 171.508C407.654 182.385 398.712 190.687 387.365 196.412C376.019 202.137 363.231 205 349 205Z"
              fill="#F9E3BD"
            />
          </svg>
        </div>
        {/* Vision text */}
        <div className="flex flex-col gap-5 max-w-[486px] w-full">
          <h2 className="text-32 text-fn-dark uppercase text-center md:text-left">
            Our Vision
          </h2>
          <p className="text-24 text-fn-dark text-center md:text-left">
            "We envision interconnected regional Food Networks replacing the
            commodified food system."
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="max-w-[1036px] mx-auto px-6 md:px-[20px] py-8 flex flex-col items-center gap-12">
      <h2 className="text-32 text-fn-dark text-center uppercase">
        Traditional Food Chains (market driven)
        <br />
        vs Food Network Model (inter-relationship driven)
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
        <div className="flex flex-col items-center gap-6">
          <img
            src={foodascommodity}
            alt="Food as a commodity"
            className="w-full max-w-[502px] h-auto object-contain"
          />
          <p className="text-20 text-black text-center">Food as a commodity</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <img
            src={foodascollaborativecommons}
            alt="Food as a collaborative commons"
            className="w-full max-w-[469px] h-auto object-contain"
          />
          <p className="text-20 text-black text-center">
            Food as a collaborative commons
          </p>
        </div>
      </div>
    </section>
  );
}

function ModelItem({
  title,
  imgSrc,
  imgAlt,
  description,
}: {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-12">
      <h3 className="text-48 text-fn-dark uppercase ">{title}</h3>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full max-w-[1200px] h-auto object-contain"
      />
      <p className="text-24 text-fn-dark text-center max-w-[996px]">
        {description}
      </p>
    </div>
  );
}

function ModelsSection() {
  return (
    <section className="w-full bg-fn-section py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center gap-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-72 text-fn-dark uppercase ">
            Our Food Network Models
          </h2>
          <p className="text-24 text-fn-dark text-center max-w-[996px]">
            We map successful Food Network models, implement them, and
            facilitate their replication around the globe. Doing so we
            accelerate the bottom-up transition towards equitable and resilient
            food systems and contribute to achieving UN's Sustainable
            Development Goals 2 and 12.
          </p>
        </div>

        {/* Models */}
        <div className="flex flex-col items-center gap-[100px] w-full">
          <ModelItem
            title="Mass Catering"
            imgSrc={masscatering}
            imgAlt="Mass Catering model"
            description="The mass catering model connects farmers with a purchaser of their products, which are then cooked and distributed as menus in a central kitchen for satellite canteens and catering services. At the centre of this model is a private company assuming the key role of net-weaver by establishing the corresponding relationships. The more the producers and consumers are involved as co-owners in the company structure and decision-making, the better the model approximates the vision of food as 'collaborative commons'."
          />
          <ModelItem
            title="Food Hub"
            imgSrc={foodhub}
            imgAlt="Food Hub model"
            description="A food hub is a centralised facility that serves as a distribution point for locally produced food within a specific geographic region. At the centre of this model is a community organisation or an NGO assuming the key role of net-weaver by establishing the corresponding relationships. Crucial to this model are strong shared values focused on sustainability, resilience, healthy products and local farming."
          />
          <ModelItem
            title="Food Coop"
            imgSrc={foodcoop}
            imgAlt="Food Coop model"
            description="At the centre of this model is a Food Cooperative organised by a group of consumers assuming the key role of net-weaver by establishing the corresponding relationships. Crucial to this model are rural-urban connections, the absence of profit margins, voluntarism, solidarity between farms and consumers, direct marketing and transparency. A Food Coop can be considered as a practice of commoning."
          />
          <ModelItem
            title="Public Procurement"
            imgSrc={publicprocurement}
            imgAlt="Public Procurement model"
            description="An enabling public procurement policy holds great potential to transform food supply. At the center of this model is a government agency that adapts a Policy on Public Procurement and takes on the key role of net-weaver, building the relevant relationships by setting rules and values. Crucial to this model is the public interest of the government institution taking the lead on food security issues to provide better livelihoods for smallholder farmers and strengthen the resilience of local food systems especially in the fast-growing cities."
          />
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[50px] flex flex-col items-center gap-10">
      <p className="text-28 text-center max-w-[800px]">
        <span className="text-fn-dark">
          All the Food Network Models are based on our 4 Principles:{" "}
        </span>
        <span className="text-fn-orange">Good Governance</span>
        <span className="text-fn-dark">, </span>
        <span className="text-fn-orange">Ecological Sustainability</span>
        <span className="text-fn-dark">, </span>
        <span className="text-fn-orange">Sustainable Livelihood</span>
        <span className="text-fn-dark"> and </span>
        <span className="text-fn-orange">
          Social Learning Innovation Exchange
        </span>
        <span className="text-fn-dark">
          .<br />
          Read more about it here.
        </span>
      </p>
      <button className="flex items-center gap-[18px] px-6 py-[18px] rounded-[60px] border border-fn-dark text-fn-dark text-20 font-medium  hover:bg-fn-dark hover:text-fn-bg transition-colors">
        LEARN HOW
        <ArrowIcon color="#E67C00" />
      </button>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-[50px] flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-5 max-w-[996px] text-center">
        <h2 className="text-72  text-fn-dark uppercase">Our Offers</h2>
        <p className="text-24 text-fn-dark ">
          Do you want to initiative your own Food Network Model in your
          community? Are you a stakeholder or policy maker looking for practical
          solutions to make our food system more sustainable? We are here to
          support!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 w-full ">
        {/* Education card */}
        <div className="flex-1 bg-fn-card rounded-2xl sm:p-[30px] p-5 flex flex-col items-center gap-5 overflow-hidden max-w-[568px]">
          <div className="flex flex-col items-center gap-[10px]">
            <img
              src={education}
              alt="Education"
              className="w-[275px] h-[150px] object-contain"
            />
            <h3 className="text-32 text-fn-blue leading-[42px]">Education</h3>
          </div>
          <p className="text-20 text-black text-center leading-[30px] max-w-[528px]">
            We work as lecturers, facilitators/speakers in forums and events to
            raise awareness on network models, social sustainability in food
            systems and food as collaborative commons. We established "
            <strong>WorldSchool.catering</strong>" with a program that includes
            dual-vocational education and training on 'professional chef on mass
            catering'. We map best practices and communicate about their
            concepts and insight wherever relevant.
          </p>
        </div>

        {/* Consulting card */}
        <div className="flex-1 bg-fn-card rounded-2xl sm:p-[30px] p-5 flex flex-col items-center gap-5 overflow-hidden max-w-[568px]">
          <img
            src={consulting}
            alt="Consulting"
            className="w-auto max-h-[200px] object-contain"
          />
          <h3 className="text-32 text-fn-blue leading-[42px]">Consulting</h3>
          <p className="text-20 text-black text-center leading-[30px] max-w-[528px]">
            We support companies and initiatives in their sustainability
            transformation. We facilitate entrepreneurs and initiators in the
            replication of models around food networks, also establishing
            vocational training in local networks. We also actively take
            participate in interdisciplinary and trans-disciplinary research
            together with like-minded partners.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured yet.");
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          first_name: form.firstName,
          last_name: form.lastName,
          reply_to: form.email,
          email: form.email,
          message: form.message,
          to_email: "shrestha.jenish2000@gmail.com",
        },
        { publicKey },
      );
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-5 py-[50px]">
      <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-[228px]">
        {/* Left text */}
        <div className="flex flex-col gap-6 lg:w-[383px] flex-shrink-0 self-center">
          <h2 className="text-72 text-fn-dark uppercase">Contact Us</h2>
          <p className="text-20 md:text-[24px] text-fn-dark leading-[140%]">
            Do you want to know more? Are you interested in collaborating with
            us? Contact us now!
          </p>
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full flex flex-col gap-[30px]"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 relative">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full h-[56px] rounded-xl border border-fn-dark bg-transparent px-[30px] text-20 text-fn-dark placeholder-[#B0B0AF] focus:outline-none focus:ring-1 focus:ring-fn-orange"
              />
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full h-[56px] rounded-xl border border-fn-dark bg-transparent px-[30px] text-20 text-fn-dark placeholder-[#B0B0AF] focus:outline-none focus:ring-1 focus:ring-fn-orange"
              />
            </div>
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full h-[56px] rounded-xl border border-fn-dark bg-transparent px-[30px] text-20 text-fn-dark placeholder-[#B0B0AF] focus:outline-none focus:ring-1 focus:ring-fn-orange"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message..."
            rows={7}
            required
            className="w-full rounded-xl border border-fn-dark bg-transparent px-[30px] py-[18px] text-20 text-fn-dark placeholder-[#B0B0AF] focus:outline-none focus:ring-1 focus:ring-fn-orange resize-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-[18px] px-6 py-[18px] rounded-[60px] bg-fn-orange text-20 text-white leading-[100%] hover:bg-fn-orange/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "SENDING..." : "CONTACT US"}
              <ArrowIcon color="#fff" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-fn-bg font-grotesk">
      <main className="flex flex-col gap-[50px]">
        <HeroSection />
        <VisionSection />
        <ComparisonSection />
        <ModelsSection />
        <PrinciplesSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

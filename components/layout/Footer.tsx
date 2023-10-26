import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between max-w-7xl mx-auto p-5 lg:p-8 lg:py-12">
        <div className="flex flex-col space-y-5 lg:space-y-8">
          <div className="inter text-[1.5rem] lg:text-[2rem] font-semibold uppercase leading-tight">
            Dinfluence
          </div>
          <div>
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="flex flex-col md:flex-row md:rounded-xl overflow-hidden border w-full md:w-fit">
            <input
              className="outline-none p-3"
              placeholder="Enter your email here"
            />
            <button className="p-3 px-5 text-white bg-primary mt-5 md:mt-0">
              Subscribe
            </button>
          </div>
          <div className="flex items-center space-x-5 text-[1.5rem]">
            {socials.map((x) => {
              return (
                <a
                  className="hover:translate-y-[-5%] transition-all"
                  key={x.link}
                  href={x.link}
                  target="_blank"
                >
                  {x.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-24">
          <div className="flex flex-col space-y-5">
            <div className="fredoka text-[1.25rem] lg:text-[1.5rem] font-bold">
              Sitemap
            </div>
            {sitemap.map((x) => {
              return (
                <a className="hover:text-primary transition-all" href={`#${x}`}>
                  {x}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col space-y-5 mt-5 lg:mt-0">
            <div className="fredoka text-[1.25rem] lg:text-[1.5rem] font-bold">
              Follow Us
            </div>
            {socials.map((x) => {
              return (
                <a
                  className="hover:text-primary transition-all"
                  target="_blank"
                  href={x.link}
                >
                  {x.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const socials = [
  {
    label: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com",
  },
  {
    label: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    label: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com",
  },
];

const sitemap = ["Categories", "Experiences", "Creators", "Reviews"];

export default Footer;

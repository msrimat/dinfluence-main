function FindCreators() {
  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-8">
      <div className="fredoka font-bold text-[1.5rem] text-center md:text-left">
        Find creators from:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {creators.map((x) => {
          return (
            <a
              target="_blank"
              href={x.link}
              key={x.label}
              className="group py-3 px-5 rounded-lg hover:bg-primary hover:text-white border border-primary text-primary flex justify-center items-center space-x-5 transition-all"
            >
              <div className="group-hover:bg-white bg-primary/[0.1] rounded-full p-1 w-[40px] h-[40px] flex items-center justify-center">
                <img src={x.icon} />
              </div>
              <div>{x.label}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

const creators = [
  {
    label: "Twitch",
    link: "https://www.twitch.com",
    icon: "/icons/twitch.png",
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com",
    icon: "/icons/youtube.png",
  },
  {
    label: "Tiktok",
    link: "https://www.tiktok.com",
    icon: "/icons/tiktok.png",
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com",
    icon: "/icons/facebook.png",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com",
    icon: "/icons/instagram.png",
  },
];

export default FindCreators;

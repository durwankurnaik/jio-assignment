import Image from "next/image";

import HeroIMG from "../public/images/hero-img.png";

const Hero = () => {
  return (
    <header className="pt-8 md:pt-14" id="home">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 flex justify-center">
          <Image src={HeroIMG} alt="Hero Image" width={450} />
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div>
            <span className="text-[var(--complementary-color)] text-sm">
              My name is
            </span>
            <h1>Durwankur S. Naik</h1>
          </div>
          <div>
            <h2>- Full-Stack Web Developer</h2>
            <h2>- Linux G33k</h2>
            <h2>- Tech Enthusiast</h2>
          </div>
          <p>
            I am a Fullstack Web Developer who writes production ready code that
            is clicks away from providing your huge ideas with great UI/UX
            experience establishing your identity on this vast space known as{" "}
            <span>Internet</span>
          </p>
          <button>
            <a href="/resume.pdf" download="resume.pdf">Get my Resume</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;

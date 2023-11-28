import data from "../data/WorkData";
import WorkCards from "./WorkCard";

const Work = () => {
  return (
    <section className="pt-8 md:pt-16" id="work">
      <h1 className="text-center mb-10 md:mb-16">My Work</h1>
      <div className="flex flex-col gap-16 lg:gap-32">
        {data.map((info, idx) => {
          return (
            <WorkCards
              key={idx}
              idx={idx}
              title={info.title}
              techStack={info.techStack}
              description={info.description}
              image={info.image}
              siteUrl={info.siteUrl}
              codeUrl={info.codeUrl}
            />
          );
        })}
      </div>
      <div className="span pt-10 md:pt-16 pb-2 text-center text-[var(--complementary-color)]">
        Note: To see more of my work, head over to my{" "}
        <a
          href="https://github.com/durwankurnaik?tab=repositories"
          target="_blank"
          className="underline underline-offset-8"
        >
          github
        </a>
      </div>
    </section>
  );
};

export default Work;

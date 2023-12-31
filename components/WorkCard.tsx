import Image from "next/image";

interface WorkCardProps {
  idx: number;
  title: string;
  techStack: string;
  description: string;
  image: any;
  siteUrl: string;
  codeUrl: string;
}

const WorkCards: React.FC<WorkCardProps> = ({
  idx,
  title,
  techStack,
  description,
  image,
  siteUrl,
  codeUrl,
}) => {
  return (
    <article
      className={`
        flex
        flex-col-reverse
        gap-5
        lg:gap-10
        w-full
        justify-center
        lg:items-center
        ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
      `}
    >
      <div className="flex-1 flex flex-col gap-3 lg:gap-6">
        <h1>{title}</h1>
        <h2>Techstack: {techStack}</h2>
        <p>{description}</p>
        <div className="flex gap-8">
          <a
            href={siteUrl}
            className="font-semibold hover:underline underline-offset-8"
            target="_blank"
          >
            Live Site &#10140; {/* A little arrow sign using HTML element code */}
          </a>
          <a
            href={codeUrl}
            className="font-semibold hover:underline underline-offset-8"
            target="_blank"
          >
            Code &#10140; {/* A little arrow sign using HTML element code */}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Image className="rounded-md" src={image} alt="project-image" width={600} />
      </div>
    </article>
  );
};

export default WorkCards;
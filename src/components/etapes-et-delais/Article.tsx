import { etapesDelaisContent } from "@/data/etapes-delais";
import { Section } from "./Section";

function Article() {
  return (
    <article className="px-5 lg:px-20 pt-10 mb-10 lg:w-2/3">
      {etapesDelaisContent.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </article>
  );
}

export default Article;

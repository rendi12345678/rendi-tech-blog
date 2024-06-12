import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      repo="rendi12345678/rendi-tech-blog"
      repoId="R_kgDOMHyCIQ"
      category="General"
      categoryId="DIC_kwDOMHyCIc4CgCtg"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="dark"
      loading="lazy"
    />
  );
}

import { type ReactElement } from "react";

export interface HeroProps {}

export default function Hero(): ReactElement {
  return (
    <section className="pt-2xl">
      <div className="container flex flex-col gap-xs sm:gap-sm">
        <div>
          <img
            src="/images/rendi1-650px.webp"
            alt="Rendi Virgantara Setiawan"
            title="My photo at school"
            className="size-[6.25rem] sm:size-[7.5rem] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-xs sm:gap-sm">
          <h1>Hey! Welcome to my blog :)</h1>
          <p className="max-w-text">
            In this blog, I want to share my tips and tricks in web development
            that I've gathered along my journey. I like to help you enhance your
            skills and keep up with the latest advancements in the field
          </p>
        </div>
      </div>
    </section>
  );
}

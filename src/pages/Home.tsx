import { type ReactElement } from "react";
import { BlogPost, Hero } from "../sections";

export interface HomeProps {}

export default function Home(): ReactElement {
  return (
    <main className="pt-navbar1 sm:pt-navbar2 ">
      <Hero />
      <BlogPost />
    </main>
  );
}

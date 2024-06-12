export type Color = "red" | "blue" | "green";

export type BlogPost = {
  readonly id: number;
  title: string;
  author: string;
  datePublished: string;
  content: string;
  imageUrl: string;
  language: string;
};

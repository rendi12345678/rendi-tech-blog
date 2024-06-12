import { type ReactElement, ReactNode } from "react";
import { createContext } from "use-context-selector";
import { type BlogPost } from "../lib/types";
import { post1, post2 } from "../assets/markdown";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${monthNames[date.getMonth()]} ${date
    .getDate()
    .toString()
    .padStart(2, "0")}, ${date.getFullYear()}`;
  return formattedDate;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why i love Neovim and Tmux ?",
    author: "Rendi Virgantara Setiawan",
    datePublished: formatDate("2024-06-11"),
    content: post1,
    imageUrl: "/images/neovim-tmux.png",
    language: "english",
  },
  {
    id: 2,
    title: "Kenapa aku suka Neovim dan Tmux ?",
    author: "Rendi Virgantara Setiawan",
    datePublished: formatDate("2024-06-12"),
    content: post2,
    imageUrl: "/images/neovim-tmux.png",
    language: "indonesian",
  },
];

// Define the type for the context value (customize according to your actual context value)
type AppContextValue = {
  blogPosts: BlogPost[];
};

// Define the initial value for the context
const initialContextValue: AppContextValue = {
  blogPosts,
};

// Create the context with the initial value
export const AppContext = createContext<AppContextValue>(initialContextValue);

export type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({
  children,
}: AppProviderProps): ReactElement {
  return (
    <AppContext.Provider value={initialContextValue}>
      {children}
    </AppContext.Provider>
  );
}

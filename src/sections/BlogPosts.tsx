import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { Button } from "../components";
import useMoveRoute from "../hooks/useMoveRoute";
import { BlogPost } from "../lib/types";
import useFilterPosts from "../hooks/useFilterPosts";
import useExtractWords from "../hooks/useExtractWords";

export interface BlogPostsProps {}

type Option = {
  value: string;
  label: string;
};

export default function BlogPosts(): ReactElement {
  const moveRoute = useMoveRoute();
  const filterPosts = useFilterPosts();
  const [filteredBlogPosts, setFilteredBlogPosts] = useState<BlogPost[] | []>(
    []
  );
  const [selectedOption, setSelectedOption] = useState<string>("indonesian");
  const extractWords = useExtractWords();

  const options: Option[] = [
    { value: "english", label: "English" },
    { value: "indonesian", label: "Indonesian" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const filteredPosts = filterPosts({ language: selectedOption });

    setFilteredBlogPosts(filteredPosts);
  }, [selectedOption]);

  return (
    <section className="pt-2xl sm:pt-3xl">
      <div className="container">
        <header className="flex justify-between mb-lg sm:xl">
          <h2>My Blog</h2>
          <select
            name="filter"
            id="filter"
            value={selectedOption}
            onChange={handleChange}
            className="bg-primary px-xs sm:sm border-2 border-secondary"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </header>
        <section>
          <ul className="flex flex-col gap-lg box-border sm:gap-xl">
            {filteredBlogPosts.length === 0 ? (
              <li>
                <p>I haven't created it yet..</p>
              </li>
            ) : (
              filteredBlogPosts?.map((post, index) => {
                return (
                  <React.Fragment key={index}>
                    {post && (
                      <li className="w-full">
                        <div className="grid gap-md sm:card-cols-2 sm:gap-lg box-border">
                          <img
                            src={post.imageUrl}
                            alt="Thumbnail"
                            className="rounded-md"
                          />
                          <div className="flex flex-col w-full gap-xs sm:gap-sm items-start">
                            <div>
                              <p className="text-xs sm:text-sm mb-2xs">
                                Published: {`${post.datePublished}`}
                              </p>
                              <p className="text-heading line-clamp-1">
                                {post.title}
                              </p>
                            </div>
                            <div className="line-clamp-2 box-border">
                              <p>{`${extractWords(post.content, 25)}`}</p>
                            </div>
                            <Button
                              onClick={() =>
                                moveRoute(
                                  `posts/${encodeURIComponent(post.title)}`
                                )
                              }
                              className="text-heading underline"
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </ul>
        </section>
      </div>
    </section>
  );
}

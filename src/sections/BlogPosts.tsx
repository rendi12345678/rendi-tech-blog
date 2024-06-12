import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { Button } from "../components";
import useMoveRoute from "../hooks/useMoveRoute";
import { BlogPost } from "../lib/types";
import useFilterPosts from "../hooks/useFilterPosts";

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
  const [selectedOption, setSelectedOption] = useState<string>("english");

  const options: Option[] = [
    { value: "english", label: "English" },
    { value: "indonesian", label: "Indonesian" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const filteredPosts = filterPosts({ language: selectedOption });
    console.log(filteredPosts);

    setFilteredBlogPosts(filteredPosts);
  }, [selectedOption]);

  return (
    <section className="pt-2xl">
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
          <ul className="flex flex-col gap-lg">
            {filteredBlogPosts.length === 0 ? (
              <li>
                <p>I haven't created it yet..</p>
              </li>
            ) : (
              filteredBlogPosts?.map((post, index) => {
                return (
                  <React.Fragment key={index}>
                    {post && (
                      <li>
                        <article className="grid gap-md sm:card-cols-2 box-border">
                          <img src={post.imageUrl} alt="Thumbnail" />
                          <div className="flex flex-col gap-xs items-start">
                            <div>
                              <p className="text-xs mb-2xs">
                                Published: {`${post.datePublished}`}
                              </p>
                              <p className="text-heading">{post.title}</p>
                            </div>
                            <div className="line-clamp-2 sm:max-w-[45ch] box-border">
                              {post.content}
                            </div>
                            <Button
                              onClick={() => moveRoute(`posts/${post.id}`)}
                              className="text-heading underline"
                            >
                              Read More
                            </Button>
                          </div>
                        </article>
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

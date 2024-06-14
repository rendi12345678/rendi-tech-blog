import { useEffect, useState } from "react";
import { type BlogPost } from "../lib/types";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import useAppProvider from "../hooks/useAppProvider";
import { Comment } from "../components";

function Posts() {
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { title } = useParams<{ title: string }>();
  const { blogPosts } = useAppProvider();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (title) {
          const post = blogPosts.find((post) => post.title === title);

          if (post === undefined) throw new Error("No post Title provided");
          setPost(post);
        }
      } catch (error) {
        setError(error as Error); // Cast to Error type for clarity
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [title]);

  return (
    <section className="pt-navbar1">
      <main className="pt-2xl sm:pt-3xl container">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          post && (
            <article className="post-article mb-2xl sm:mb-3xl">
              <img
                className="aspect-video shadow-md shadow-heading/15 w-full sm:max-w-[100%]"
                src={post.imageUrl}
                alt="Main image"
              />
              <div>
                <div className="mt-2xl sm:mt-3xl mb-md sm:mb-lg">
                  <h1>{post.title}</h1>
                  <p className="text-xs sm:text-sm mt-2xs">
                    Published: {`${post.datePublished}`}
                  </p>
                </div>
                <Markdown>{post.content}</Markdown>
              </div>
            </article>
          )
        )}
        <Comment />
      </main>
    </section>
  );
}

export default Posts;

import useAppProvider from "./useAppProvider";

// Define a more descriptive type for filter options
export type FilterPostsOptions = {
  language: string;
};

export default function useFilterPosts() {
  const { blogPosts } = useAppProvider();

  const filterPosts = (options: FilterPostsOptions) => {
    const { language } = options;

    let filteredPosts = blogPosts;

    // Apply language filter
    if (language) {
      filteredPosts = filteredPosts.filter(
        (post) => post.language === language
      );
    }

    return filteredPosts;
  };

  return filterPosts;
}

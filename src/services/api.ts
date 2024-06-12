import axios from "axios";
import { BlogPost } from "../lib/types";

const BASE_URL = "http://localhost:3000";

export const getBlogPosts = async (): Promise<BlogPost[] | null> => {
  try {
    const response = await axios.get<{ posts: BlogPost[] }>(BASE_URL);
    if (response.status !== 200) {
      console.error(`Error: Received status code ${response.status}`);
      return null;
    }
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return null;
  }
};

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await axios.get<BlogPost>(`${BASE_URL}/posts/${id}`);
    if (response.status !== 200) {
      console.error(`Error: Received status code ${response.status}`);
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog post with id ${id}:`, error);
    return null;
  }
};

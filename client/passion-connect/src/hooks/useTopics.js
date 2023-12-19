import { useQuery } from "react-query";
import { getAllTopics } from "../services/apiCalls";

export const useTopics = () => {
  return useQuery("topics", getAllTopics);
};

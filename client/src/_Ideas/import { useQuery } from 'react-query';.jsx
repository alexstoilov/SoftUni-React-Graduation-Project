import { useQuery } from "react-query";
import {
  fetchArticlesByCreators,
  fetchRecommendedArticles,
} from "./util/http.js";

function HomePage() {
  // Fetch articles by creators
  const {
    data: creatorArticles,
    isError: isCreatorError,
    error: creatorError,
  } = useQuery({
    queryKey: ["creatorArticles"],
    queryFn: () => fetchArticlesByCreators(),
    staleTime: 10000,
  });

  // Fetch recommended articles
  const {
    data: recommendedArticles,
    isError: isRecommendedError,
    error: recommendedError,
  } = useQuery({
    queryKey: ["recommendedArticles"],
    queryFn: () => fetchRecommendedArticles(),
    staleTime: 10000,
  });

  // Error state
  if (isCreatorError || isRecommendedError) {
    return <div>An error occurred</div>;
  }

  // Render articles
  return (
    <div>
      <h1>Articles by Creators</h1>
      {creatorArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}

      <h1>Recommended Articles</h1>
      {recommendedArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}

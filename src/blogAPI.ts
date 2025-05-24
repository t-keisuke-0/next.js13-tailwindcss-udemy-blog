import Error from "./app/error";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
    const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"}); //SSR
    
    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const articles = await res.json();
    return articles;
};
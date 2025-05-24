import { notFound } from "next/navigation";
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

export const getDetailArticles = async (id: string): Promise<Article> => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        next: { revalidate: 60 },
    }); //SSR

    if (res.status == 404) {
        notFound();
    }
    
    if (!res.ok) {
        throw new Error("エラーが発生しました。");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const articles = await res.json();
    return articles;
};
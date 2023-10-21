import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
const postsDirectory = path.join(process.cwd(), "posts");

// const posts = [
//     {
//         title: "This is a heading of my block",
//         description:
//             "Lorem impums is underrated i don’t understand why people hate it so much",
//         tags: ["Go"],
//         date: "2023-10-07",
//     },
// ];

export function getPostData() {
    const fileNames = fs.readdirSync(postsDirectory);

    const contents = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        matterResult.data.id = fileName.replace(/\.md$/, "");
        return matterResult;
    });
    return contents;
}

export function getAllPostId() {
    const fileNames = fs.readdirSync(postsDirectory);

    const ids = fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.md$/, ""),
        };
    });
    return ids;
}

export async function getPost(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const content = matter(fileContents);
    const processedContent = await remark().use(html).process(content.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...content.data,
    };
}

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
const postsDirectory = path.join(process.cwd(), "posts");

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
    const modifiedHtml = contentHtml
        .replace(/<p>/g, '<p class="your-class-name">')
        .replace(/<h1>/g, '<h1 class="your-class-name">')
        .replace(/<h2>/g, '<h2 class="your-class-name">')
        .replace(/<h3>/g, '<h3 class="your-class-name">')
        .replace(/<li>/g, '<li class="your-class-name">')
        .replace(/<ul>/g, '<ul class="your-class-name">')
        .replace(/<pre>/g, '<pre class="your-class-name">')
        .replace(/<code>/g, '<code class="your-class-name">')
        .replace(/<img/g, '<img class="your-class-name"')
        .replace(/<a/g, '<a class="your-class-name"');
    return {
        id,
        contentHtml: modifiedHtml,
        ...content.data,
    };
}

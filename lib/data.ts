import dirfPreview from "@/public/dirf_preview.png";
import medspherePreview from "@/public/medsphere_preview.png";
import todoPreview from "@/public/todo_preview.png";
export const projects = [
    {
        title: "Dirf",
        description:
            "Dirf is simple command line utility to make multiple,nested, recursive directory and files inside them",
        tags: ["golang"],
        image: dirfPreview,
    },

    {
        title: "Medsphere",
        description: "A webapp to manage medical organisation",
        tags: ["React js", "Express js", "Postgres"],
        image: medspherePreview,
    },

    {
        title: "Todo Rest Api",
        description: "A CRUD rest api for todo list",
        tags: ["golang", "Postgres"],
        image: todoPreview,
    },
] as const;

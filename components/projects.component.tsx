"use client";
import { projects } from "@/lib/data";
import React, { useRef } from "react";
import Project from "./project.component";

export default function Projects() {
    return (
        <section className="w-full px-[20px]">
            {projects.map((items, index) => {
                return (
                    <React.Fragment key={`${index}-project`}>
                        <Project {...items} />
                    </React.Fragment>
                );
            })}
        </section>
    );
}

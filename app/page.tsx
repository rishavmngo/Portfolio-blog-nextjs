import About from "@/components/about.component";
import Header from "@/components/header.component";
import HeroSection from "@/components/hero.component";
import Projects from "@/components/projects.component";

export default function Home() {
    return (
        <main className="flex flex-col items-center max-w-[900px] m-4 sm:m-auto">
            <div className="h-screen flex flex-col items-center mb-10">
                <Header />
                <HeroSection />
            </div>
            <About />
            <Projects />
        </main>
    );
}

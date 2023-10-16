import Header from "@/components/header.component";
import HeroSection from "@/components/hero.component";

export default function Home() {
    return (
        <main className="flex flex-col items-center ">
            <Header />
            <HeroSection />
        </main>
    );
}

import Image from "next/image";
import Hero from "@/components/Hero"
import Partners from "@/components/Partners";
import SearchCourses from "@/components/SearchCourses";
import PopularCourses from "@/components/PopularCourses";
import FinalCTA from "@/components/FinalCTA";


export default function Home() {
  return (
    <>
    <Hero />
    <Partners />
    <SearchCourses />
    <PopularCourses />
    <FinalCTA />
    
    </>
  );
}

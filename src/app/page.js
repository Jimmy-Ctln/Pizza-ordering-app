
import { Hero } from "@/components/layout/Hero";
import { HomeMenu } from "@/components/layout/HomeMenu";
import { SectionHeader } from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>
 
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet. In autem eaque non internos quos aut
            quos aliquam ut delectus.Lorem ipsum dolor sit amet. In autem eaque
            non internos quos aut quos aliquam ut delectus.Lorem ipsum dolor sit
            amet. In autem eaque non internos quos aut quos
          </p>
          <p>
            Lorem ipsum dolor sit amet. In autem eaque non internos quos aut
            quos aliquam ut delectus.Lorem ipsum dolor sit amet. In autem eaque
            non internos quos aut quos t delectus.Lorem ipsum dolor sit amet. In
            autem eaque non internos quos aut quos
          </p>
          <p>
            Lorem ipsum dolor sit amet. In autem eaque non internos quos aut
            quos aliquam ut delectus.Lorem ipsum dolor sit amet. In autem eaque
            non internos quos aut quos
          </p>
        </div>
      </section>
      <section className="text-center"> 
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+0908457052">
            +09 08 45 70 52
          </a>
        </div>
      </section>
      
    </>
  );
}

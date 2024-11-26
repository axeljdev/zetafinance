import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/contact/Hero";
import Contact from "@/components/contact/Contact";
import Commitments from "@/components/contact/Commitments";

function page() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <section className="flex flex-col lg:flex-row lg:justify-center lg:gap-10 lg:pb-8 lg:px-16 animate-fade-down animate-ease-in-out">
          <ContactForm />
          <Contact />
        </section>
        <Commitments />
      </main>
    </>
  );
}

export default page;

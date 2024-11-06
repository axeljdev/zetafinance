import Hero from "@/components/Hero";
import Article from "@/components/etapes-et-delais/Article";
import Summary from "@/components/etapes-et-delais/Summary";
function page() {
  return (
    <>
      <Hero title="Les étapes et délais" bg="hero-section-et-delais" />
      <h2 className="text-2xl lg:text-4xl font-bold uppercase px-5 lg:px-20 pt-10"><span className="text-secondary">Les étapes</span> d’un regroupement de crédits</h2>
      <Summary />
      <Article />
    </>
  )
}

export default page
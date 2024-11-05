import Hero from "@/components/Hero"
import Definition from "@/components/regroupement-credit/Definition"
import Bento from "@/components/regroupement-credit/Bento"
import Benefits from "@/components/regroupement-credit/Benefits"
import Situations from "@/components/regroupement-credit/Situations"
import CreditsTypes from "@/components/regroupement-credit/Credits-types"

function page() {
  return (
    <>
      <Hero title="Regroupement de crédit" bg="hero-section-regroupement" />
      <Definition />
      <Bento />
      <Benefits />
      <Situations />
      <CreditsTypes />
    </>
  )
}

export default page
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
      <div className="flex flex-col lg:flex-row lg:px-32 2xl:px-52 lg:py-10">
        <Bento />
        <div className="divider divider-horizontal before:bg-secondary before:w-[5px] after:bg-secondary after:w-[5px]"></div>
        <Benefits />
      </div>
      <Situations />
      <CreditsTypes />
    </>
  )
}

export default page
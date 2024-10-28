import HeroSection from '@/components/home/HeroSection'
import Simulator from '@/components/home/simulator/Simulator';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Simulator />
      <article className="p-4 flex flex-col pb-10">
        <h2 className="text-xl font-semibold uppercase"><span className="text-secondary">Zeta</span> Finance, votre regroupement de crédits</h2>
        <aside>
          <h3 className="text-lg uppercase font-semibold">Qui sommes-nous ?</h3>
        </aside>
      </article>
    </main>
  );
}

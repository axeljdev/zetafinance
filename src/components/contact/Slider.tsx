"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "./Cards";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { Mousewheel, EffectCards } from "swiper/modules";

export default function Slider() {
  return (
    <div className="swiper-container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Mousewheel]}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 0.5,
          invert: true,
        }}
        className="mySwiper"
        cardsEffect={{
          slideShadows: true,
          perSlideOffset: 8,
          perSlideRotate: 2,
        }}
      >
        <SwiperSlide>
          <Cards
            number="01"
            title="Un interlocuteur unique à vos cotés"
            items1="L’expertise d’un spécialiste du regroupement de crédits"
            items2="Une relation privilégiée avec le même interlocuteur tout au long de la procédure de votre dossier"
            items3="Une relation de conseil et de confiance, sans vous juger"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            number="02"
            title="Proposer l’offre la plus adaptée à votre situation"
            items1="Nous vous écoutons, chaque situation est différente"
            items2="Nous étudions avec vous une solution sur mesure"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            number="03"
            title="Réduire fortement vos mensualités et votre taux d’endettement"
            items1="Une véritable opportunité pour alléger les mensualités des crédits"
            items2="Un prêt unique pour regrouper tous vos crédits et réduire vos mensualités"
            items3="Un budget équilibré"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            number="04"
            title="Une étude de faisabilité immédiate sur simple appel"
            items1="Une réponse de principe en quelques minutes de votre conseiller personnel"
            items2="À l’issue de votre appel, vous connaîtrez les possibilités ou non de constituer votre dossier"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            number="05"
            title="Les meilleures conditions pour vos crédits"
            items1="Rechercher pour vous les offres bancaires les plus avantageuses"
            items2="Bénéficier du meilleur taux et des meilleures conditions"
            items3="Simplifier toutes vos démarches"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

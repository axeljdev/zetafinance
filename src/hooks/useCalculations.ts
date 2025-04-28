export const useCalculations = () => {
  const calculer = (
    creditCapital: number,
    consoCapital: number,
    debtCapital: number,
    treso: number,
    newLast: number,
    p0: number,
    isLocataire: boolean = false,
    loyer: number = 0
  ) => {
    // Étape 1 : Calcul du montant total emprunté
    const amount = creditCapital + consoCapital + debtCapital + treso;

    // Étape 2 : Paramètres financiers
    const taegAvant = 9;
    const taegApres = 3;

    // Étape 3 : Calcul PMT (équivalent de VPM en Excel)
    const mensualiteApres =
      Math.round(
        (PMT(
          taegApres / 100 / 12, // 3% / 12 = 0.0025 par mois
          newLast * 12, // 24 mois
          amount // 1000€
        ) *
          100) /
          2
      ) / 100; // Arrondi à 2 décimales
    const mensualiteAvant = creditCapital + consoCapital + debtCapital;

    // Calcul des restes à vivre en tenant compte du loyer pour les locataires
    const revenusDisponibles = isLocataire ? p0 - loyer : p0;
    const resteAVivreAvant = revenusDisponibles - mensualiteAvant;
    const resteAVivreApres = revenusDisponibles - mensualiteApres;

    return {
      mensualiteAvant,
      mensualiteApres,
      resteAVivreAvant,
      resteAVivreApres,
      dureeAvant: newLast,
      dureeApres: newLast,
      taegAvant,
      taegApres,
    };
  };

  // Fonction utilitaire PMT modifiée pour plus de précision
  const PMT = (rate: number, nper: number, pv: number) => {
    if (rate === 0) return -pv / nper;
    const x = Math.pow(1 + rate, nper);
    return (pv * x * rate) / (x - 1);
  };

  return { calculer };
};

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
    const monthlyInterestRate = taegApres / 100 / 12;
    const totalPayments = newLast * 12;

    // Étape 3 : Calculs
    const x = Math.pow(1 + monthlyInterestRate, totalPayments);
    const mensualiteApres = (amount * x * monthlyInterestRate) / (x - 1);
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

  return { calculer };
};

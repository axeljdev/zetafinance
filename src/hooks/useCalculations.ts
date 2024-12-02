export const useCalculations = () => {
  const calculer = (
    creditCapital: number,
    consoCapital: number,
    debtCapital: number,
    treso: number,
    newLast: number,
    p0: number
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

    // Calcul des restes à vivre
    const resteAVivreAvant = p0 - mensualiteAvant;
    const resteAVivreApres = p0 - mensualiteApres;

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

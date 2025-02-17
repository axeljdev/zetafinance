function ContactInfo() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <p className="uppercase pb-2 font-semibold">Nous contacter</p>
      <a href="tel:0972606443" className="hoverRed font-normal">
        09 72 12 14 01
      </a>
      <a href="tel:0769762636" className="hoverRed font-normal">
        07 69 76 26 36
      </a>
      <a href="mailto:contact@zetafinance.fr" className="hoverRed font-normal">
        contact@zetafinance.fr
      </a>
    </div>
  );
}

export default ContactInfo;

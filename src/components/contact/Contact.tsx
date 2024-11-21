import phone from "@/images/phone.svg";
import email from "@/images/mail.svg";
import location from "@/images/location.svg";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col p-4 lg:mt-6">
      <h2 className="text-2xl font-bold uppercase">
        Besoin <span className="text-secondary">d&apos;aide ?</span>
      </h2>
      <p className="text-base uppercase">Retrouvez toute nos coordonnées</p>
      <ul className="flex mt-4 gap-4">
        <li>
          <Image
            src={phone}
            alt="Téléphone"
            width={24}
            height={24}
            className="bg-gradient-card-light w-20 h-20 p-4 rounded-xl"
          />
        </li>
        <li>
          <p className="text-lg font-semibold mb-1">
            Contacter nos interlocuteurs
          </p>
          <p>+33 09 73 60 64 43</p>
          <p>+33 07 69 76 26 36</p>
        </li>
      </ul>
      <ul className="flex mt-4 gap-4">
        <li>
          <Image
            src={email}
            alt="Email"
            width={24}
            height={24}
            className="bg-gradient-card-light w-20 h-20 p-4 rounded-xl"
          />
        </li>
        <li>
          <p className="text-lg font-semibold mb-1">Nous écrire par mail</p>
          <p>contact@zetafinance.fr</p>
        </li>
      </ul>
      <ul className="flex mt-4 gap-4">
        <li>
          <Image
            src={location}
            alt="Adresse"
            width={24}
            height={24}
            className="bg-gradient-card-light w-20 h-20 p-4 rounded-xl"
          />
        </li>
        <li>
          <p className="text-lg font-semibold mb-1">Envoyer un courrier</p>
          <p>26 avenue Gustave Eiffel - CS 70101</p>
          <p>33701 Mérignac Cedex</p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;

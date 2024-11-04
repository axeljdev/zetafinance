import { FaAngleRight } from "react-icons/fa6";

function Form() {
  return (
    <>
      <div className="flex flex-col pt-10 lg:w-2/5">
        <h2 className="text-2xl font-bold uppercase px-2">
          Laissez-nous votre <span className="text-secondary">message</span>
        </h2>
        <p className="text-base uppercase px-2">
          Nous vous recontactons dans les plus brefs délais !
        </p>
        <form className="flex flex-col gap-4 p-2">
          <label className="input input-bordered h-10 flex items-center gap-2 rounded-full shadow-md bg-[#F9F9F9] border-none">
            <input
              type="text"
              className="grow placeholder:text-gray-500 placeholder:uppercase"
              placeholder="Nom"
            />
          </label>
          <label className="input input-bordered h-10 flex items-center gap-2 rounded-full shadow-md bg-[#F9F9F9] border-none">
            <input
              type="email"
              className="grow placeholder:text-gray-500 placeholder:uppercase"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered h-10 flex items-center gap-2 rounded-full shadow-md bg-[#F9F9F9] border-none">
            <input
              type="phone"
              placeholder="Téléphone"
              className="grow placeholder:text-gray-500 placeholder:uppercase"
            />
          </label>
          <textarea
            className="textarea textarea-bordered placeholder:text-base placeholder:uppercase lg:h-32 placeholder:text-gray-500 rounded-xl shadow-md bg-[#F9F9F9] border-none"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="btn rounded-full bg-gradient-button-light lg:w-1/2 hover:bg-gradient-button-dark hover:scale-105 transition-all duration-300 ease-in-out text-white uppercase"
          >
            Envoyer votre message <FaAngleRight />
          </button>
        </form>
      </div>
      
    </>
  );
}

export default Form;

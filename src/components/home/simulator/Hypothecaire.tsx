"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  hypothecaireSchema,
  type HypothecaireFormData,
} from "@/schemas/simulatorSchema";

function Hypothecaire() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<HypothecaireFormData>({
    resolver: zodResolver(hypothecaireSchema),
    defaultValues: {
      revenu: undefined,
      type: "locataire",
      loyer: undefined,
    },
  });

  const type = watch("type");

  const onSubmit = (data: HypothecaireFormData) => {
    console.log(data);
    // Ajoutez ici la logique de navigation ou de traitement
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center lg:pt-5"
    >
      <p className="lg:text-lg font-medium">Revenu mensuel du foyer</p>
      <div className="flex gap-4 justify-center pt-3 w-full">
        <input
          type="range"
          min={0}
          max={10000}
          {...register("revenu", { valueAsNumber: true })}
          onChange={(e) => setValue("revenu", parseInt(e.target.value))}
          className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
        />
        <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            placeholder="1400"
            {...register("revenu", { valueAsNumber: true })}
            className="grow w-14 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
          />
          €/mois
        </label>
      </div>
      {errors.revenu && (
        <p className="text-red-500 text-sm mt-1">{errors.revenu.message}</p>
      )}

      <p className="lg:text-lg font-medium">Vous êtes :</p>
      <div className="flex gap-4 justify-center my-4 lg:my-5 lg:pb-5 lg:gap-10">
        {["locataire", "proprietaire", "heberge"].map((typeOption) => (
          <label
            key={typeOption}
            className={`btn text-textColor rounded-full hover:bg-gradient-button-light hover:border-none ${
              type === typeOption
                ? "bg-gradient-button-light border-none"
                : "bg-transparent"
            }`}
          >
            <input
              type="radio"
              value={typeOption}
              {...register("type")}
              className="hidden"
            />
            {typeOption.charAt(0).toUpperCase() + typeOption.slice(1)}
          </label>
        ))}
      </div>
      {errors.type && (
        <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
      )}

      {type === "locataire" && (
        <>
          <p>Montant de votre loyer</p>
          <div className="flex gap-4 justify-center pt-3 w-full">
            <input
              type="range"
              min={0}
              max={10000}
              {...register("loyer", { valueAsNumber: true })}
              onChange={(e) => setValue("loyer", parseInt(e.target.value))}
              className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
            />
            <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
              <input
                type="number"
                min="0"
                placeholder="600"
                {...register("loyer", { valueAsNumber: true })}
                className="grow w-14 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              />
              €/mois
            </label>
          </div>
          {errors.loyer && (
            <p className="text-red-500 text-sm mt-1">{errors.loyer.message}</p>
          )}
        </>
      )}

      <button
        type="submit"
        className="btn mt-10 w-[94%] border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
      >
        Passez à l&apos;étape suivante
      </button>
    </form>
  );
}

export default Hypothecaire;

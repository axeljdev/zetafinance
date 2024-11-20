"use client";

import { useState } from "react";
import { useNotificationStore } from "@/stores/notificationStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addNotification } = useNotificationStore();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData: data, template: "contact" }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      addNotification({
        type: "success",
        message: "Message envoyé avec succès",
      });
      form.reset();
      setIsSubmitted(true);
    } catch {
      addNotification({
        type: "error",
        message: "Une erreur est survenue lors de l'envoi du message",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    isSubmitted,
    onSubmit: form.handleSubmit(onSubmit),
  };
};

const ContactForm = () => {
  const { form, isLoading, isSubmitted, onSubmit } = useContactForm();

  return (
    <div className="flex flex-col p-4 lg:mt-6 max-w-2xl w-full">
      {isSubmitted ? (
        <div className="text-center p-8">
          <h3 className="text-xl font-bold text-secondary mb-4">
            Merci pour votre message !
          </h3>
          <p className="text-base">
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold uppercase">
            Formulaire de <span className="text-secondary">contact</span>
          </h2>
          <p className="text-base uppercase">Envoyez-nous un message</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Nom*
              </label>
              <input
                {...form.register("name")}
                type="text"
                className="input input-bordered w-full"
                placeholder="Votre nom"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email*
              </label>
              <input
                {...form.register("email")}
                type="email"
                className="input input-bordered w-full"
                placeholder="exemple@email.com"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">
                Téléphone
              </label>
              <input
                {...form.register("phone")}
                type="tel"
                className="input input-bordered w-full"
                placeholder="06 00 00 00 00"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Message*
              </label>
              <textarea
                {...form.register("message")}
                className="textarea textarea-bordered w-full h-32"
                placeholder="Votre message"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn mt-4 border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;

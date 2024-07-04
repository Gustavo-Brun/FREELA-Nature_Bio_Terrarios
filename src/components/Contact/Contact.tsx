"use client";

import React from "react";

import * as S from "./styles";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = (): React.JSX.Element => {
  interface FormProps {
    name: string;
    surname: string;
    contact: string;
    subject: string;
    message: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>();

  const onSubmitFx = async (data: FormProps): Promise<void> => {
    const templateParams = {
      name: data.name,
      surname: data.surname,
      contact: data.contact,
      subject: data.subject,
      message: data.message
    };

    try {
      emailjs
        .send("service_028lgif", "template_r0ej1sg", templateParams, {
          publicKey: "iTQLB1cLXnxeIK51y"
        })
        .then(
          () => {
            toast.success(
              "Recebemos sua mensagem, logo entraremos em contato! :)"
            );
          },
          () => {
            toast.error(
              "Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato."
            );
          }
        );
    } catch (error) {
      window.alert(
        "Ops! Houve um problema. Entre em contato através do nosso WhatsApp! Aguardamos seu contato."
      );
    }
  };

  return (
    <S.ContactContainer>
      <Toaster richColors />

      <S.SideText>Ou se preferir</S.SideText>

      <S.Container>
        <div>
          <S.Title>Fale conosco!</S.Title>
          <S.Description>
            Tem alguma dúvida? Entre em contato, estamos sempre à disposição
            para te ajudar.
          </S.Description>
        </div>
        <form
          className="grid max-w-md gap-4 mx-auto"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmitFx)}
        >
          <div className="grid grid-cols-2 gap-4 items-center">
            <Input
              className={`${errors?.name != null ? "border-[#CF2C20]" : ""}`}
              placeholder="Nome"
              type="text"
              {...register("name", { required: true })}
            />

            <Input
              placeholder="Sobrenome"
              type="text"
              {...register("surname")}
            />
            {errors.name?.type === "required" && (
              <p className="text-xs text-[#CF2C20]">Informe seu nome.</p>
            )}
          </div>
          <Input
            className={`${errors.contact != null ? "border-[#CF2C20]" : ""}`}
            placeholder="Email ou Telefone"
            type="text"
            {...register("contact", { required: true })}
          />
          {errors.contact?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              Informe seu e-mail ou telefone.
            </p>
          )}
          <Input
            placeholder="Assunto (Opcional)"
            type="text"
            {...register("subject")}
          />
          <Textarea
            className={`${
              errors.message != null ? "border-[#CF2C20]" : ""
            } min-h-[150px] w-full`}
            placeholder="Sua mensagem."
            {...register("message", { required: true })}
          />
          {errors.message?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">Escreva uma mensagem.</p>
          )}
          <Button
            className="w-full"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </S.Container>
    </S.ContactContainer>
  );
};

export default Contact;

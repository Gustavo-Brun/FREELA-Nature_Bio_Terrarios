"use client";

import React from "react";

import * as S from "./styles";

import Link from "next/link";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosReturnLeft } from "react-icons/io";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";

const Form = (): React.JSX.Element => {
  interface FormProps {
    name: string;
    contact: string;
    animal: string;
    product:
      | "default"
      | "Terrario Completo"
      | "Terrario Horizontal"
      | "Terrario Arborícola"
      | "Terrario Completo"
      | "Decoracao de Terrario"
      | "Outro";
    cep: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormProps>();

  const onSubmitFx = async (data: FormProps): Promise<void> => {
    const templateParams = {
      name: data.name,
      contact: data.contact,
      animal: data.animal,
      product: data.product,
      cep: data.cep
    };

    try {
      emailjs
        .send("service_028lgif", "template_smppy7p", templateParams, {
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
    <S.FormContainer>
      <Toaster richColors />

      <Link
        href="/"
        className="w-fit p-2 bg-white border-2 rounded-2xl font-bold"
      >
        <p>Voltar</p>
        <IoIosReturnLeft style={{ fontSize: 22 }} />
      </Link>

      <form
        className="flex flex-col max-w-lg gap-4 space-y-2 mx-auto my-14 border-2 rounded-lg p-4 bg-white lg:text-2xl lg:gap-6"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmitFx)}
      >
        <S.Title>
          Preencha o formulário para receber seu orçamento personalizado 🌿🍃
        </S.Title>
        <div>
          <label>Nome completo</label>
          <Input
            placeholder="Seu nome aqui."
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <S.ErrorMessage>Informe seu nome.</S.ErrorMessage>
          )}
        </div>
        <div>
          <label>Celular/WhatsApp</label>
          <Input
            placeholder="+55 (99) 99999-9999"
            type="text"
            {...register("contact", { required: true })}
          />
          {errors.contact?.type === "required" && (
            <S.ErrorMessage>Informe um telefone para contato.</S.ErrorMessage>
          )}
        </div>
        <div>
          <label>Espécie do seu animal</label>
          <Input
            placeholder="Insira a espécie do seu animal aqui"
            type="text"
            {...register("animal", { required: true })}
          />
          {errors.animal?.type === "required" && (
            <S.ErrorMessage>Informe a espécie do seu pet.</S.ErrorMessage>
          )}
        </div>
        <div>
          <label>O que está buscando?</label>
          <select
            defaultValue={"default"}
            className="text-sm lg:text-xl"
            {...register("product", {
              required: true,
              validate: (value) => value !== "default"
            })}
          >
            <option
              value="default"
              disabled={true}
            >
              Selecione uma opção.
            </option>
            <option value="Terrario Completo">Terrário Completo</option>
            <option value="Terrario Horizontal">Terrário Horizontal</option>
            <option value="Terrario Arborícola">Terrário Arborícola</option>
            <option value="Terrario Completo">Aquaterrários</option>
            <option value="Decoracao de Terrario">Decoração de terrário</option>
            <option value="outro">Outro</option>
          </select>
          {errors.product?.type === "validate" && (
            <S.ErrorMessage>Selecione uma das opções acima.</S.ErrorMessage>
          )}
        </div>
        <div>
          <label>Insira seu CEP para calcularmos o frete.</label>
          <Input
            placeholder="EX: 01001-000."
            type="text"
            {...register("cep", { required: true })}
          />
          {errors.cep?.type === "required" && (
            <p className="text-xs text-[#CF2C20]">
              O CEP é necessário para realizarmos o cálculo do frete.
            </p>
          )}
        </div>
        <Button
          className="w-full"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </S.FormContainer>
  );
};

export default Form;

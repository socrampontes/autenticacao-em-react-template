import React from "react";
import { FormPost, Input, TextArea } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import useForms from "../../hooks/useForms";

export default function CriarPost() {
  const { form, onChange ,limparCampos } = useForms({
    title: "",
    body: ""
  });
  
  const body = {
    title: form.title,
    body: form.body,
  };

  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: token,
    },
  };

  const enviarPost = (e) => {
    e.preventDefault()
    console.log("entrou");

    axios
      .post(`${BASE_URL}/posts`, body, headers)
      .then((res) => {
        console.log("resposta post", res.data.token);
        limparCampos()
      })
      .catch((error) => {
        console.log("error post", error);
      });
  };

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor="tituloPost">Título:</label>
      <Input
        placeholder="digite um título para o seu post"
        value={form.title}
        onChange={onChange}
        name="title"
        id="title"
      />
      <label htmlFor="textoPost">Texto:</label>
      <TextArea placeholder="crie um post!"onChange={onChange} value={form.body}
      name="body"
      id="body" />
      <button>Enviar</button>
    </FormPost>
  );
}

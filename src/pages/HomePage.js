import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 5px;
`;
function HomePage() {
  const [form, setForm] = useState({ email: "", senha: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <input
          id="email"
          name="email"
          type="text"
          input="form.email"
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          name="senha"
          type="password"
          input="form.senha"
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button>Login</button>
      </Form>
    </main>
  );
}

export default HomePage;

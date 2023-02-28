import { useState } from "react";
import axios from "axios"
import { navigateToAdmin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, Input, LoginButton } from "./styleCreateTripPage";

function CreateTripPage() {

    const submitForm = (event) => {
        event.preventDefault();
    };
    return (
        <FormContainer>

            <h1>Criar Viagem</h1>
            <Form onSubmit={submitForm}>
                <label htmlFor="nome">Nome</label>
                <Input
                    id="nome"
                    placeholder="Nome da Viagem"
                    required
                />
                <label htmlFor="planeta">Planeta</label>
                <Input
                    id="planeta"
                    placeholder="Planeta"
                    required
                />
                <label htmlFor="data">Data</label>
                <Input
                    id="data"
                    type='date'
                    placeholder="data"
                    required
                />
                <label htmlFor="descricao">Descricao</label>
                <Input
                    id="descricao"
                    placeholder="Descrição da viagem: ao menos 30 caracteres"
                    pattern="/^([A-Za-z]\s?){30,}$\g"
                    required
                />
                <label htmlFor="duracao">Duração</label>
                <Input
                    id="duracao"
                    type="number"
                    placeholder="Duração da viagem em dias"
                    required
                />
                <LoginButton>Criar Viagem </LoginButton>
            </Form>
        </FormContainer>
    );
}

export default CreateTripPage;

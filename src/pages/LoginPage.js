import { useState } from "react";
import { Form, FormContainer, Input, LoginButton } from "./styleLoginPage";


function LoginPage() {
    
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
        <FormContainer>

            <h1>Login Page</h1>
            <Form onSubmit={submitForm}>
                <label htmlFor="email">Login</label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={onChange}
                    placeholder="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <label htmlFor="senha">Senha</label>
                <Input
                    id="senha"
                    name="senha"
                    type="password"
                    value={form.senha}
                    onChange={onChange}
                    placeholder="senha"
                    required
                />
                <LoginButton>Login</LoginButton>
            </Form>
        </FormContainer>
    );
}

export default LoginPage;

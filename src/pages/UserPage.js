import { useParams } from "react-router-dom";
import Header from "../components/Header";

function UserPage() {
  const { id } = useParams();

  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {id}</h1>
    </main>
  );
}

export default UserPage;

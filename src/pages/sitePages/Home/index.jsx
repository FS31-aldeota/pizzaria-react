import { useEffect, useState } from "react";
import { styled } from "styled-components";


const HomeContainer = styled.section`
    padding: 60px;
    & h1{
        font-size: 36px;
        margin-bottom: 16px;
    }
    & .cards{
        display: flex;
        gap: 20px;
        & li {
            width: calc(20% - 16px);
            box-shadow: 0 5px 10px #00000025;
            border-radius: 10px;
            padding: 10px;
            & h5{
                font-size: 16px;
                font-weight: bold;
                color: #6B0504;
            }
            & .preco{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;

const Home = () => {

    const [pizzas, setPizzas] = useState([]);

    async function buscarSabores(){
        const request = await fetch("http://localhost:3000/sabores");
        const response = await request.json();
        setPizzas(response);
    }

    useEffect(() => {
        buscarSabores();
    }, [])


    return (
        <HomeContainer>
            <h1>Pizzas em destaque</h1>
            <ul className="cards">
                {
                    pizzas && pizzas.filter(p => p.promocao).map(p => (
                        <li>
                            <img src="" alt="" />
                            <h5>{p.nome}</h5>
                            <p>{p.descricao}</p>
                            <div className="preco">
                                <h6>{p.preco}</h6>
                                <button>adicionar</button>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <h1>Todos os sabores</h1>
            {
                pizzas && pizzas.map(p => (
                    <div>
                        {p.nome}
                    </div>
                ))
            }
        </HomeContainer>
    );
}
 
export default Home;
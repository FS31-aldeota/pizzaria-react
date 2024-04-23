import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
    
`;

const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <h1>LOGO</h1>
                <ul>
                    <li>
                        <NavLink to={'/'}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cardapio'}>Cardápio</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/promocoes'}>Promoções</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="acoes">
                <NavLink to={'entrar'}>Entrar</NavLink>
                <button>Carrinho</button>
            </div>
        </HeaderContainer>
    );
}
 
export default Header;
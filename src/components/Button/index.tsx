import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
    return <ButtonContainer onClick={onClick}>{title} disabled={disabled}</ButtonContainer>;
};

export default Button;


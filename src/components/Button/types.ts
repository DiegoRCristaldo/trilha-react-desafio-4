import { MouseEventHandler, ReactNode } from "react";

export interface IButtonProps {
    title: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

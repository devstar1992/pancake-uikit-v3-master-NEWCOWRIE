import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    network: number;
    onDismiss?: () => void;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;

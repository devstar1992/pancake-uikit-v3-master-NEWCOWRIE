import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string, network?: number): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} network={network || 56} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} network={network || 56} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;

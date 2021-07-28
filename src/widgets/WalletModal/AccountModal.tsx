/* eslint-disable no-nested-ternary */
import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { connectorLocalStorageKey } from "./config";

interface Props {
  account: string;
  network: number;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, network, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </Text>
    <Flex mb="32px">
      {network === 56 ? (
        <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
          View on BscScan
        </LinkExternal>
      ) : network === 97 ? (
        <LinkExternal small href={`https://testnet.bscscan.com/address/${account}`} mr="16px">
          View on BscScan (Testnet)
        </LinkExternal>
      ): network === 1 ? (
        <LinkExternal small href={`https://etherscan.io/address/${account}`} mr="16px">
          View on EtherScan
        </LinkExternal>
      ) : network === 3 ? (
        <LinkExternal small href={`https://ropsten.etherscan.io/address/${account}`} mr="16px">
          View on RostenScan
        </LinkExternal>
      ) : network === 137 ? (
        <LinkExternal small href={`https://polygonscan.com/address/${account}`} mr="16px">
          View on PolygonScan
        </LinkExternal>
      ) : network===80001 ? (
        <LinkExternal small href={`https://mumbai.polygonscan.com/address/${account}`} mr="16px">
          View on PolygonScan (Testnet)
        </LinkExternal>
      ) : (
        <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
          View on BscScan
        </LinkExternal>
      )}

      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <Button
        scale="sm"
        variant="secondary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(connectorLocalStorageKey);
          onDismiss();
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
);

export default AccountModal;

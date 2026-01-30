import { Contract } from "ethers";
import abi from "./abi/AssignmentHashingABI.json";
import { connectWallet } from "./wallet";

const CONTRACT_ADDRESS = "0x2AF4EAb79f906daC48efd486eBA74ceeE990C56F";

export const getContract = async (): Promise<Contract> => {
  const signer = await connectWallet();

  return new Contract(CONTRACT_ADDRESS, abi, signer);
};

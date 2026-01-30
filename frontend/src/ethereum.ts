import { ethers } from "ethers";

export const getProvider = (): ethers.BrowserProvider => {
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }
  return new ethers.BrowserProvider(window.ethereum);
};

export const getSigner = async (): Promise<ethers.JsonRpcSigner> => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  return await provider.getSigner();
};

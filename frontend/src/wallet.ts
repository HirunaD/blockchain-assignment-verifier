import { BrowserProvider, JsonRpcSigner } from "ethers";

let signer: JsonRpcSigner | null = null;

export const connectWallet = async (): Promise<JsonRpcSigner> => {
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  if (signer) return signer;

  const provider = new BrowserProvider(window.ethereum);

  // 🔑 REQUEST ACCOUNT ONLY ONCE
  await provider.send("eth_requestAccounts", []);

  signer = await provider.getSigner();
  return signer;
};

import { getContract } from "../contract";
import { hashFile } from "../utils/hashFile";

export const submitAssignment = async (
  file: File,
  assignmentId: string
): Promise<string> => {

  const fileHash = await hashFile(file);
  const contract = await getContract();

  const tx = await contract.submitAssignment(assignmentId, fileHash);
  await tx.wait();

  return tx.hash;
};

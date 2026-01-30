import { getContract } from "../contract";
import { hashFile } from "../utils/hashFile";

export const verifyAssignment = async (
  studentAddress: string,
  assignmentId: string,
  file: File
): Promise<boolean> => {

  const contract = await getContract();
  const [storedHash] = await contract.getSubmission(
    studentAddress,
    assignmentId
  );

  const uploadedHash = await hashFile(file);

  return storedHash === uploadedHash;
};

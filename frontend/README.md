# Assignment Hash Chain DApp

A **decentralized application (DApp)** to securely store and verify assignment submissions using **Ethereum blockchain**. Each assignment file is hashed with **SHA-256**, and the hash is stored on a **local Ethereum blockchain (Ganache)**, ensuring **tamper-proof proof of submission**.

---

## **Project Goal**

- Allow students to submit assignments with integrity verification.
- Store assignment hashes and student wallet addresses on-chain.
- Provide a frontend interface to submit and verify assignments.

---

## **Tech Stack**

**Blockchain / Smart Contract**  
- Ethereum (local)  
- Ganache (local blockchain)  
- Solidity (Smart Contracts)  
- Hardhat (Smart Contract development & deployment)  
- MetaMask (wallet integration)  
- Ethers.js (v6)

**Backend**  
- Node.js  
- TypeScript  
- Hardhat runtime  

**Frontend**  
- React + Vite  
- TypeScript  
- Ethers.js (v6)  
- MetaMask integration  

---

## **System Design**

1. Student selects an assignment file.  
2. Frontend computes **SHA-256 hash** of the file.  
3. MetaMask signs the transaction.  
4. Smart contract stores:
   - Student wallet address  
   - Assignment hash  
   - Timestamp  
5. Blockchain ensures **tamper-proof submission proof**.

---

## **Features**

- ✅ Submit assignment and store hash on blockchain  
- ✅ View all submitted assignments (student address, hash, timestamp)  
- ✅ Verify assignment file against stored hash (optional / future)  
- ✅ Wallet connection via MetaMask  

---

## **Setup Instructions**

### **Backend**
1. Install dependencies:

```bash
cd backend
npm install

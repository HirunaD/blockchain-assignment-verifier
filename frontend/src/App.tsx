import { useState } from "react";
import { submitAssignment } from "./services/submitAssignment";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [assignmentId, setAssignmentId] = useState("");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file || !assignmentId) {
      alert("Please select a file and enter Assignment ID");
      return;
    }

    try {
      setLoading(true);
      const hash = await submitAssignment(file, assignmentId);
      setTxHash(hash);
      alert("Assignment submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Assignment Submission Hashing System</h1>

      <input
        type="text"
        placeholder="Assignment ID"
        value={assignmentId}
        onChange={(e) => setAssignmentId(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ marginBottom: "1rem" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Submit Assignment"}
      </button>

      {txHash && (
        <p style={{ marginTop: "1rem" }}>
          <strong>Transaction Hash:</strong> {txHash}
        </p>
      )}
    </div>
  );
}

export default App;

export function analyzeIssue(input: string) {
  const text = input.toLowerCase();

  if (
    text.includes("temperature") ||
    text.includes("hi")
  ) {
    return {
      issue: "Temperature Sensor Fault",

      confidence: "High",

      nextSteps: [
        "Reconnect extension cable",
        "Replace extension cable",
        "Replace catheter"
      ]
    };
  }

  if (
    text.includes("communication") ||
    text.includes("offline")
  ) {
    return {
      issue: "Loss of Communication",

      confidence: "High",

      nextSteps: [
        "Verify CIU power",
        "Reseat communication cables",
        "Check Remote ↔ RFG connection"
      ]
    };
  }

  return {
    issue: "Unknown",

    confidence: "Low",

    nextSteps: [
      "Collect more information"
    ]
  };
}
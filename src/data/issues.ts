export interface Issue {
  id: string;
  title: string;
  trust: string;
  category: string;
  summary: string;
}

export const issues: Issue[] = [
  {
    id: "0048",
    title: "Temperature Sensor Fault",
    trust: "Official Guidance",
    category: "Temperature",
    summary:
      "Irregular temperature rise visualized on sensor globe and ablation graphs.",
  },

  {
    id: "0061",
    title: "Temperature Spread Too High",
    trust: "Official Guidance",
    category: "Temperature",
    summary:
      "Temperature spread exceeds acceptable limits and terminates energy delivery.",
  },

  {
    id: "0052",
    title: "Pump Communication Failure",
    trust: "Official Guidance",
    category: "Pump",
    summary:
      "Communication between the irrigation pump and generator is interrupted.",
  },

  {
    id: "0032",
    title: "High Frequency Leakage",
    trust: "Official Guidance",
    category: "Ablation",
    summary:
      "High frequency leakage detected during energy delivery.",
  },

  {
    id: "0103",
    title: "Foot Pedal Not Fully Pressed",
    trust: "Official Guidance",
    category: "Workflow",
    summary:
      "Energy delivery interrupted because the pedal was partially released.",
  },

  {
    id: "1207",
    title: "Location Reference Moved",
    trust: "Official Guidance",
    category: "Mapping",
    summary:
      "Magnetic reference location shifted due to patient movement or system drift.",
  },

  {
    id: "COMM",
    title: "Loss of Communication",
    trust: "Official Guidance",
    category: "Connectivity",
    summary:
      "Workstation appears frozen because communication between devices has been lost.",
  },

  {
    id: "MAG",
    title: "Magnetic Interference",
    trust: "Official Guidance",
    category: "Mapping",
    summary:
      "Magnetic distortion causing poor location quality and hashed geometry.",
  },

  {
    id: "GROUND",
    title: "Ground Patches Not Turning Green",
    trust: "Field Validated",
    category: "Grounding",
    summary:
      "Ground patches fail validation and do not achieve acceptable system status.",
  },

  {
    id: "TEMPLATE",
    title: "Template Corruption",
    trust: "Emerging Pattern",
    category: "Software",
    summary:
      "Templates become unstable resulting in signal loading or workflow issues.",
  },

  {
    id: "MAGNET",
    title: "Magnet Instability",
    trust: "Emerging Pattern",
    category: "Hardware",
    summary:
      "Magnetic field system repeatedly initializes, disconnects, or loses tracking.",
  },

  {
    id: "CPU",
    title: "Generator CPU Warning",
    trust: "Emerging Pattern",
    category: "Performance",
    summary:
      "Generator responsiveness degrades due to high CPU utilization.",
  },

  {
    id: "COLLECT",
    title: "Collection Quality Degradation",
    trust: "Field Validated",
    category: "Mapping",
    summary:
      "Geometry collection quality deteriorates or tracking becomes unreliable.",
  },

  {
    id: "VISUAL",
    title: "Diagnostic Catheter Visualization Failure",
    trust: "Field Validated",
    category: "Visualization",
    summary:
      "Diagnostic catheter appears striped, incomplete, misplaced, or absent.",
  },
];
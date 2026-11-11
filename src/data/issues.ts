export interface Issue {
  id: string;
  title: string;
  trust: string;
  category: string;
  summary: string;
  symptoms: string[];
  actions: string[];
  versions: string[];
}

export const issues: Issue[] = [
  {
    id: "0048",
    title: "Temperature Sensor Fault",
    trust: "Official Guidance",
    category: "Temperature",
    summary:
      "Irregular temperature rise visualized on sensor globe and ablation graphs.",

    symptoms: [
      "Irregular temperature rise",
      "Abnormal sensor globe readings",
      "Unexpected temperature behavior",
      "Ablation interruption",
    ],

    actions: [
      "Fully disconnect and reconnect catheter extension cable",
      "Replace catheter extension cable",
      "Replace catheter",
      "Keep all catheter connections dry",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0061",
    title: "Temperature Spread Too High",
    trust: "Official Guidance",
    category: "Temperature",

    summary:
      "Temperature spread exceeds acceptable limits and energy delivery terminates.",

    symptoms: [
      "Temperature spread alert",
      "Energy delivery terminates",
      "Repeated delivery failures",
    ],

    actions: [
      "Move catheter to a new area",
      "Reconnect extension cable",
      "Power cycle RFG and PFG",
      "Replace extension cable",
      "Replace catheter",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0052",
    title: "Pump Communication Failure",
    trust: "Official Guidance",
    category: "Pump",

    summary:
      "Communication between pump and generator is interrupted.",

    symptoms: [
      "Pump communication warning",
      "Irrigation system unavailable",
      "Pump disconnect alert",
    ],

    actions: [
      "Verify communication cable",
      "Verify pump power",
      "Power cycle pump",
      "Power cycle RFG",
      "Power cycle PFG",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0032",
    title: "High Frequency Leakage",
    trust: "Official Guidance",
    category: "Ablation",

    summary:
      "High frequency leakage detected during energy delivery.",

    symptoms: [
      "HF leakage alert",
      "Premature termination of delivery",
      "Repeated leakage events",
    ],

    actions: [
      "Power cycle RFG",
      "Power cycle PFG",
      "Retry lesion delivery",
      "Try alternate therapy mode",
      "Verify return electrodes are not connected during RF transseptal work",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0103",
    title: "Foot Pedal Not Fully Pressed",
    trust: "Official Guidance",
    category: "Workflow",

    summary:
      "Energy delivery interrupted because the foot pedal was partially released.",

    symptoms: [
      "Ablation interrupted",
      "Foot pedal alert",
      "Unexpected termination of delivery",
    ],

    actions: [
      "Clear alert",
      "Press pedal firmly",
      "Maintain constant pedal pressure during delivery",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "1207",
    title: "Location Reference Moved",
    trust: "Official Guidance",
    category: "Mapping",

    summary:
      "Location reference shifted during mapping.",

    symptoms: [
      "Location Reference Moved alert",
      "Unexpected map shift",
      "Reference patch movement",
    ],

    actions: [
      "Open magnetic visualization screen",
      "Inspect reference patch location",
      "Recalibrate system",
      "Create a new map if necessary",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0000",
    title: "Ablation Current Too High",
    trust: "Official Guidance",
    category: "Ablation",

    summary:
      "Ablation current exceeds allowable limits and delivery stops.",

    symptoms: [
      "Current too high alert",
      "Immediate delivery termination",
      "Repeated lesion failure",
    ],

    actions: [
      "Verify impedance",
      "Verify catheter stability",
      "Move catheter to new location",
      "Replace extension cable",
      "Replace catheter",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "0007",
    title: "Bubble Detected",
    trust: "Official Guidance",
    category: "Irrigation",

    summary:
      "Pump detected air in irrigation pathway and stopped flow.",

    symptoms: [
      "Bubble detected alarm",
      "Pump stopped",
      "Irrigation interrupted",
    ],

    actions: [
      "Remove catheter from patient",
      "Verify tubing setup",
      "Verify saline source",
      "Purge bubbles",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "COMM",
    title: "Loss of Communication",
    trust: "Official Guidance",
    category: "Connectivity",

    summary:
      "Workstation appears frozen because communication between system components has been lost.",

    symptoms: [
      "Frozen workstation",
      "Unresponsive system",
      "Communication loss",
      "Generator offline",
    ],

    actions: [
      "Verify CIU power",
      "Reseat communication cables",
      "Check Remote to RFG connection",
      "Replace communication cables",
      "Power cycle CIU",
      "Power cycle PFG",
      "Power cycle RFG",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "MAG",
    title: "Magnetic Interference",
    trust: "Official Guidance",
    category: "Mapping",

    summary:
      "Magnetic distortion causing poor location quality and hashed geometry.",

    symptoms: [
      "Gray geometry",
      "Hashed geometry",
      "Poor tracking quality",
      "Location instability",
    ],

    actions: [
      "Identify magnetic interference source",
      "Move interference source away from field",
      "Verify location quality improves",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "ECG",
    title: "12 Lead ECG Noise",
    trust: "Official Guidance",
    category: "Signals",

    summary:
      "Excessive ECG noise observed on Bard recording systems.",

    symptoms: [
      "Noisy ECG",
      "Poor signal quality",
      "Baseline artifact",
    ],

    actions: [
      "Avoid carbon ECG leads",
      "Prep skin",
      "Bundle ECG leads",
      "Keep leads away from field generator",
      "Apply recommended Bard settings",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "GROUND",
    title: "Ground Patches Not Turning Green",
    trust: "Field Validated",
    category: "Grounding",

    summary:
      "Ground patches fail validation and do not achieve acceptable status.",

    symptoms: [
      "Ground validation failure",
      "Patches remain yellow",
      "Unable to proceed",
    ],

    actions: [
      "Replace ground patch",
      "Replace ground block connector",
      "Verify return link",
      "Reseat GenLink",
      "Test alternate PFG",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "TEMPLATE",
    title: "Template Corruption",
    trust: "Emerging Pattern",
    category: "Software",

    summary:
      "Template instability causing workflow or signal issues.",

    symptoms: [
      "Signals fail to load",
      "Unexpected template behavior",
      "Workflow instability",
    ],

    actions: [
      "Create new template",
      "Start with unmodified template",
      "Wait for catheter recognition",
      "Retire problematic template",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "MAGNET",
    title: "Magnet Instability",
    trust: "Emerging Pattern",
    category: "Hardware",

    summary:
      "Magnetic field system repeatedly initializes or loses tracking.",

    symptoms: [
      "Magnet reconnects repeatedly",
      "Tracking instability",
      "Initialization loop",
    ],

    actions: [
      "Inspect cabling",
      "Check CIU connections",
      "Use known-good magnet cable",
      "Restart affected component",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "CPU",
    title: "Generator CPU Warning",
    trust: "Emerging Pattern",
    category: "Performance",

    summary:
      "Generator responsiveness degraded by elevated CPU utilization.",

    symptoms: [
      "System lag",
      "Slow response",
      "CPU warning",
    ],

    actions: [
      "Reboot affected system",
      "Restart stack between cases",
      "Monitor recurrence",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "COLLECT",
    title: "Collection Quality Degradation",
    trust: "Field Validated",
    category: "Mapping",

    summary:
      "Geometry collection quality degrades or tracking becomes unreliable.",

    symptoms: [
      "Poor collection",
      "Tracking degradation",
      "Geometry instability",
    ],

    actions: [
      "Verify rings are exposed",
      "Check reference movement",
      "Remove interference",
      "Restart CIU",
      "Swap magnet or CIU if needed",
    ],

    versions: ["Prism 2.4"],
  },

  {
    id: "VISUAL",
    title: "Diagnostic Catheter Visualization Failure",
    trust: "Field Validated",
    category: "Visualization",

    summary:
      "Diagnostic catheter appears missing, striped, incomplete, or displaced.",

    symptoms: [
      "Missing catheter",
      "Striped catheter",
      "Incorrect location",
      "Partial visualization",
    ],

    actions: [
      "Check GenLink",
      "Verify model quality",
      "Reset magnet",
      "Re-add catheter definition",
      "Exit and resume study",
    ],

    versions: ["Prism 2.4"],
  },
];
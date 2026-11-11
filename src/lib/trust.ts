export function trustColor(trust: string) {
  switch (trust) {
    case "Official Guidance":
      return "bg-green-100 text-green-800";

    case "Field Validated":
      return "bg-blue-100 text-blue-800";

    case "Emerging Pattern":
      return "bg-yellow-100 text-yellow-800";

    case "Community Observation":
      return "bg-orange-100 text-orange-800";

    default:
      return "bg-red-100 text-red-800";
  }
}
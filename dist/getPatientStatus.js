"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "General patient";
    }
    if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2) {
            return "Serious emergency";
        }
        return "Moderate emergency";
    }
    return "";
};
const patient = { name: "Rahim", age: 35, type: "general" };
console.log(getPatientStatus(patient));
const patient2 = { name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 };
console.log(getPatientStatus(patient2));
const patient3 = { name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 };
console.log(getPatientStatus(patient3));
//# sourceMappingURL=getPatientStatus.js.map
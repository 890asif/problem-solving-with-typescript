interface GrneralPatient {
    name:string,
    age: number,
    type: "general"
}

interface EmergencyPatient {
    name:string,
    age: number,
    type:"emergency"
    emergencyLevel: 1 | 2| 3
}

const getPatientStatus = (patient: GrneralPatient | EmergencyPatient):string =>{
    if(patient.type === "general"){
        return "General patient";
    }
     if(patient.type === "emergency")  {
        if(patient.emergencyLevel === 1){
            return "Critical emergency";
        }
        else if (patient.emergencyLevel === 2){
            return "Serious emergency";
        }
        return "Moderate emergency";
    }
    return ""
}

const patient:GrneralPatient ={ name: "Rahim", age: 35, type: "general" }
 console.log(getPatientStatus(patient))

 const patient2:EmergencyPatient ={ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }
 console.log(getPatientStatus(patient2))

 const patient3:EmergencyPatient ={ name: "Hasan", age: 45, type: "emergency", emergencyLevel: 3 }
 console.log(getPatientStatus(patient3))
 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return totalMarks;
};
getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
});
//# sourceMappingURL=getStudentResult.js.map
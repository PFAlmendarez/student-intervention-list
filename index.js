import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";

const starBandOptions = [
  "Urgent Intervention",
  "Intervention",
  "On Watch",
  "At/Above Grade Level",
];

const interventionOptions = ["None", "Tier 1", "Tier 2", "Tier 3"];

const students = [
  {
    id: "12345",
    grade: "7",
    firstName: "John",
    lastName: "Doe",
    q1Fs: 2,
    q2Fs: 1,
    q3Fs: 3,
    q4Fs: 0,
    elaStarBand: "On Watch",
    mathStarBand: "Intervention",
    referrals: 3,
    suspensions: 1,
    academicIntervention: "None",
    behavioralIntervention: "None",
    attendanceIntervention: "None",
    iep: false,
    elStudent: false,
    costReferral: false,
    comments: "",
  },
  {
    id: "67890",
    grade: "6",
    firstName: "Jane",
    lastName: "Smith",
    q1Fs: 1,
    q2Fs: 2,
    q3Fs: 0,
    q4Fs: 1,
    elaStarBand: "At/Above Grade Level",
    mathStarBand: "On Watch",
    referrals: 2,
    suspensions: 0,
    academicIntervention: "Tier 1",
    behavioralIntervention: "None",
    attendanceIntervention: "Tier 2",
    iep: true,
    elStudent: true,
    costReferral: true,
    comments: "Needs extra tutoring support.",
  },
];

export default function StudentConcernsInterventionList() {
  const [search, setSearch] = useState("");
  const [studentData, setStudentData] = useState(students);
  
  const handleSelectChange = (id, field, value) => {
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.id === id ? { ...student, [field]: value } : student
      )
    );
  };

  const handleCommentChange = (id, value) => {
    handleSelectChange(id, "comments", value);
  };

  const filteredStudents = studentData.filter((student) =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700">Student Concerns Intervention List</h1>
      <div className="flex justify-center gap-2">
        <Input
          className="w-1/2 p-2 border rounded-md"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline">
          <Search className="w-5 h-5" />
        </Button>
      </div>
      <Card className="shadow-lg p-4 bg-white">
        <CardContent className="overflow-x-auto">
          {filteredStudents.map((student) => (
            <Table key={student.id} className="mb-6 border border-gray-300 rounded-md w-full">
              <TableBody>
                <TableRow><TableCell className="font-bold bg-blue-100">Name</TableCell><TableCell>{student.firstName} {student.lastName}</TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">Student ID</TableCell><TableCell>{student.id}</TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">Grade</TableCell><TableCell>{student.grade}</TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">Quarter F's</TableCell><TableCell>{student.q1Fs + student.q2Fs + student.q3Fs + student.q4Fs}</TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">ELA STAR Band</TableCell>
                  <TableCell>
                    <select value={student.elaStarBand} onChange={(e) => handleSelectChange(student.id, "elaStarBand", e.target.value)} className="w-full border p-2 rounded-md">
                      {starBandOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </TableCell>
                </TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">Math STAR Band</TableCell>
                  <TableCell>
                    <select value={student.mathStarBand} onChange={(e) => handleSelectChange(student.id, "mathStarBand", e.target.value)} className="w-full border p-2 rounded-md">
                      {starBandOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </TableCell>
                </TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">SPED</TableCell><TableCell><input type="checkbox" checked={student.iep} readOnly /></TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">EL Student</TableCell><TableCell><input type="checkbox" checked={student.elStudent} readOnly /></TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">COST Referral Submitted</TableCell><TableCell><input type="checkbox" checked={student.costReferral} readOnly /></TableCell></TableRow>
                <TableRow><TableCell className="font-bold bg-blue-100">Comments</TableCell>
                  <TableCell>
                    <Textarea value={student.comments} onChange={(e) => handleCommentChange(student.id, e.target.value)} placeholder="Enter comments here..." className="w-full p-2 border rounded-md" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

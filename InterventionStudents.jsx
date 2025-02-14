<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Concerns Intervention List</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background-color: #007bff; color: white; }
        select, textarea { width: 100%; padding: 5px; margin-top: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Student Concerns Intervention List</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Student ID</th>
                    <th>Grade</th>
                    <th>Quarter F's</th>
                    <th>ELA STAR Band</th>
                    <th>Math STAR Band</th>
                    <th>Referrals</th>
                    <th>Suspensions</th>
                    <th>Academic Intervention</th>
                    <th>Behavioral Intervention</th>
                    <th>Attendance Intervention</th>
                    <th>SPED</th>
                    <th>EL Student</th>
                    <th>COST Referral</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody id="studentTableBody"></tbody>
        </table>
    </div>

    <script>
        const students = [
            { id: "12345", grade: "7", name: "John Doe", qFs: 6, ela: "On Watch", math: "Intervention", referrals: 3, suspensions: 1, academic: "None", behavioral: "None", attendance: "None", sped: false, el: false, cost: false, comments: "" },
            { id: "67890", grade: "6", name: "Jane Smith", qFs: 4, ela: "At/Above Grade Level", math: "On Watch", referrals: 2, suspensions: 0, academic: "Tier 1", behavioral: "None", attendance: "Tier 2", sped: true, el: true, cost: true, comments: "Needs extra tutoring support." }
        ];
        
        const interventionOptions = ["None", "Tier 1", "Tier 2", "Tier 3"];
        const starBandOptions = ["Urgent Intervention", "Intervention", "On Watch", "At/Above Grade Level"];
        
        function loadStudents() {
            const tableBody = document.getElementById("studentTableBody");
            students.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${student.name}</td>
                    <td>${student.id}</td>
                    <td>${student.grade}</td>
                    <td>${student.qFs}</td>
                    <td><select>${starBandOptions.map(option => `<option ${option === student.ela ? 'selected' : ''}>${option}</option>`).join('')}</select></td>
                    <td><select>${starBandOptions.map(option => `<option ${option === student.math ? 'selected' : ''}>${option}</option>`).join('')}</select></td>
                    <td>${student.referrals}</td>
                    <td>${student.suspensions}</td>
                    <td><select>${interventionOptions.map(option => `<option ${option === student.academic ? 'selected' : ''}>${option}</option>`).join('')}</select></td>
                    <td><select>${interventionOptions.map(option => `<option ${option === student.behavioral ? 'selected' : ''}>${option}</option>`).join('')}</select></td>
                    <td><select>${interventionOptions.map(option => `<option ${option === student.attendance ? 'selected' : ''}>${option}</option>`).join('')}</select></td>
                    <td><input type="checkbox" ${student.sped ? "checked" : ""}></td>
                    <td><input type="checkbox" ${student.el ? "checked" : ""}></td>
                    <td><input type="checkbox" ${student.cost ? "checked" : ""}></td>
                    <td><textarea>${student.comments}</textarea></td>
                `;
                tableBody.appendChild(row);
            });
        }
        document.addEventListener("DOMContentLoaded", loadStudents);
    </script>
</body>
</html>

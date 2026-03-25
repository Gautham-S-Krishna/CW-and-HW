from django.shortcuts import render

def student_list(request):
    # Dummy data for the classroom with pass/fail info
    students = [
        {'name': 'Alice', 'grade': 'A', 'passed': True},
        {'name': 'Bob', 'grade': 'F', 'passed': False},
        {'name': 'Charlie', 'grade': 'B', 'passed': True},
        {'name': 'David', 'grade': 'C', 'passed': True},
        {'name': 'Eve', 'grade': 'F', 'passed': False},
    ]
    
    # Passing the empty list would test "No students found."
    # students = []

    return render(request, 'students/student_list.html', {'students': students})

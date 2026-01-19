
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design login page",
                "description": "Create a clean and responsive login UI",
                "date": "2024-02-20",
                "priority": "High",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix navbar bug",
                "description": "Resolve alignment issue on mobile screens",
                "date": "2024-02-18",
                "priority": "Medium",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update README",
                "description": "Add setup instructions and screenshots",
                "date": "2024-02-15",
                "priority": "Low",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Create API endpoints",
                "description": "Build task CRUD endpoints",
                "date": "2024-02-21",
                "priority": "High",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Database schema update",
                "description": "Modify task table structure",
                "date": "2024-02-17",
                "priority": "Medium",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize queries",
                "description": "Improve database query performance",
                "date": "2024-02-14",
                "priority": "Low",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write unit tests",
                "description": "Add tests for task services",
                "date": "2024-02-22",
                "priority": "High",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Refactor components",
                "description": "Improve code readability",
                "date": "2024-02-19",
                "priority": "Medium",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Remove unused files",
                "description": "Clean up project structure",
                "date": "2024-02-13",
                "priority": "Low",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Deploy frontend",
                "description": "Deploy React app to Vercel",
                "date": "2024-02-23",
                "priority": "High",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix CSS issues",
                "description": "Resolve dark mode contrast issues",
                "date": "2024-02-18",
                "priority": "Medium",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Test deployment",
                "description": "Check production bugs",
                "date": "2024-02-16",
                "priority": "Low",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Create dashboard stats",
                "description": "Show task analytics",
                "date": "2024-02-24",
                "priority": "High",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Integrate auth",
                "description": "Connect login with role-based access",
                "date": "2024-02-20",
                "priority": "Medium",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix logout issue",
                "description": "Clear local storage on logout",
                "date": "2024-02-15",
                "priority": "Low",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

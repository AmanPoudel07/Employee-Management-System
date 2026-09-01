

const employees = [
  {
    "id": 1,
    "firstName": "Kane",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
    }, 
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Make a UI design",
        "taskDescription": "Design a modern dashboard layout for the client using Figma.",
        "taskDate": "2026-02-20",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Navbar Bug",
        "taskDescription": "Resolve alignment issues in the mobile navigation bar.",
        "taskDate": "2026-02-15",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting Preparation",
        "taskDescription": "Prepare wireframes and slide deck for quarterly review.",
        "taskDate": "2026-02-22",
        "category": "Management"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Jude",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize query indexes for faster response times in MongoDB.",
        "taskDate": "2026-02-21",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Connect the frontend state management to backend Auth routes.",
        "taskDate": "2026-02-10",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Unit Testing",
        "taskDescription": "Write end-to-end unit tests using Jest for user routes.",
        "taskDate": "2026-02-12",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation Update",
        "taskDescription": "Document the REST API endpoints in Postman.",
        "taskDate": "2026-02-14",
        "category": "Docs"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Arun",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Promo Video",
        "taskDescription": "Edit and produce a short 60-second video demo of product features.",
        "taskDate": "2026-02-25",
        "category": "Media"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Graphics",
        "taskDescription": "Design Instagram and LinkedIn promotional banners.",
        "taskDate": "2026-02-23",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Logo Redesign",
        "taskDescription": "Export SVG variants of the updated company logo.",
        "taskDate": "2026-02-05",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ramesh",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor React Context",
        "taskDescription": "Migrate custom state handlers into clean custom hooks.",
        "taskDate": "2026-02-24",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Setup CI/CD Pipeline",
        "taskDescription": "Configure GitHub Actions workflow for automatic deployment.",
        "taskDate": "2026-02-26",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Vite Migration",
        "taskDescription": "Upgrade outdated Webpack configuration to Vite 6.",
        "taskDate": "2026-02-08",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Docker Container Setup",
        "taskDescription": "Create multi-stage Dockerfile builds for staging server.",
        "taskDate": "2026-02-18",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Tailwind Setup",
        "taskDescription": "Configure dark mode utilities across common components.",
        "taskDate": "2026-02-11",
        "category": "Design"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Suresh",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "User Testing Feedback",
        "taskDescription": "Gather feedback from 10 beta testers and create a summary report.",
        "taskDate": "2026-02-27",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Competitor Analysis",
        "taskDescription": "Analyze key competitor feature gaps in the EMS market.",
        "taskDate": "2026-02-02",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Security Audit",
        "taskDescription": "Perform vulnerability scan on public authentication endpoints.",
        "taskDate": "2026-02-16",
        "category": "Security"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    // const data = localStorage.getItem('employees')
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}

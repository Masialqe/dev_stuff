db = db.getSiblingDB('asap_db');

// Check if the collection already exists
const collectionExists = db.getCollectionNames().includes("offer_collection");

if (!collectionExists) {
    db.createCollection("offer_collection");

    const jobOffers = [
        {
            "offerPosition": "Senior Software Engineer",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Software Engineer to join our innovative team.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "2400-3300USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Programming",
                    "level": 4
                },
                {
                    "name": "Problem Solving",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "Tech Innovators Inc.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (123) 456-7890",
                "companyEmailAddress": "info@techinnovators.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior Data Analyst",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior Data Analyst. Join our dynamic team!",
            "offerContractType": "INTERNSHIP",
            "offerContract": "Part-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2100-2900USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Data Analysis",
                    "level": 2
                },
                {
                    "name": "Statistics",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "Data Insights Co.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (987) 654-3210",
                "companyEmailAddress": "hr@datainsights.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Mobile App Developer",
            "offerExperienceLevel": "MID",
            "offerDescription": "Exciting opportunity for a Mid-Level Mobile App Developer to contribute to mobile app projects.",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "2600-3500USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Mobile App Development",
                    "level": 4
                },
                {
                    "name": "UI/UX Design",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "Mobile Innovations Ltd.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 987-6543",
                "companyEmailAddress": "info@mobileinnovations.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior AI Researcher",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior AI Researcher. Join our AI research team!",
            "offerContractType": "INTERNSHIP",
            "offerContract": "Part-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "2200-3000USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Machine Learning",
                    "level": 2
                },
                {
                    "name": "Python Programming",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "AI Research Innovations Corp.",
                "companyCountry": "Germany",
                "companyPhoneNumber": "+49 123 456 789",
                "companyEmailAddress": "ai@researchinnovations.de"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior QA Engineer",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior QA Engineer to lead quality assurance initiatives.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2800-3700USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Quality Assurance",
                    "level": 4
                },
                {
                    "name": "Automated Testing",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "QA Solutions Inc.",
                "companyCountry": "United Kingdom",
                "companyPhoneNumber": "+44 20 1234 5678",
                "companyEmailAddress": "hr@qasolutions.co.uk"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level UX/UI Designer",
            "offerExperienceLevel": "MID",
            "offerDescription": "Mid-Level UX/UI Designer position available. Join our creative design team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "2500-3400USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "User Experience Design",
                    "level": 3
                },
                {
                    "name": "Wireframing",
                    "level": 2
                }
            ],
            "offerCompany": {
                "companyName": "Creative Designs Ltd.",
                "companyCountry": "France",
                "companyPhoneNumber": "+33 1 23 45 67 89",
                "companyEmailAddress": "design@creativedesigns.fr"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior Mobile App Developer",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Mobile App Developer to lead mobile app development projects.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "3000-3900USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Mobile App Development",
                    "level": 5
                },
                {
                    "name": "React Native",
                    "level": 4
                }
            ],
            "offerCompany": {
                "companyName": "Mobile Solutions Corp.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 987-6543",
                "companyEmailAddress": "info@mobilesolutions.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior Cloud Engineer",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior Cloud Engineer. Join our cloud solutions team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "2200-3100USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Cloud Computing",
                    "level": 2
                },
                {
                    "name": "AWS",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "Cloud Engineering Innovations Ltd.",
                "companyCountry": "Germany",
                "companyPhoneNumber": "+49 123 456 789",
                "companyEmailAddress": "cloud@engineeringinnovations.de"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Software Architect",
            "offerExperienceLevel": "MID",
            "offerDescription": "Exciting opportunity for a Mid-Level Software Architect to design and implement software solutions.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "2800-3700USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Software Architecture",
                    "level": 4
                },
                {
                    "name": "System Design",
                    "level": 3
                }
            ],
            "offerCompany": {
                "companyName": "Software Solutions Inc.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 987-6543",
                "companyEmailAddress": "info@softwaresolutions.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Entry-Level Data Analyst",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Data Analyst. Join our data analysis team!",
            "offerContractType": "INTERNSHIP",
            "offerContract": "Part-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2000-2800USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Data Analysis",
                    "level": 2
                },
                {
                    "name": "SQL",
                    "level": 2
                }
            ],
            "offerCompany": {
                "companyName": "Data Insights Solutions Ltd.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (123) 456-7890",
                "companyEmailAddress": "hr@datainsightssolutions.ca"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior AI Research Scientist",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior AI Research Scientist to lead cutting-edge research projects.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "3500-4500USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Artificial Intelligence",
                    "level": 5
                },
                {
                    "name": "Machine Learning",
                    "level": 4
                }
            ],
            "offerCompany": {
                "companyName": "AI Research Innovations Corp.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 987-6543",
                "companyEmailAddress": "hr@airesearchinnovations.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior Mobile App Tester",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior Mobile App Tester. Join our quality assurance team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2200-3000USD",
            "applyLink": "https://example.com/apply",
            "skills": [
                {
                    "name": "Mobile App Testing",
                    "level": 2
                },
                {
                    "name": "Test Automation",
                    "level": 2
                }
            ],
            "offerCompany": {
                "companyName": "Quality Assurance Solutions Ltd.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (123) 456-7890",
                "companyEmailAddress": "qa@qualitysolutions.ca"
            },
            "offerApplications": []
        }
    ];

    db.offer_collection.insertMany(jobOffers);

    print("Job offers inserted successfully.");
} else {
    print("Database and collection already exist. Skipping initialization.");
}

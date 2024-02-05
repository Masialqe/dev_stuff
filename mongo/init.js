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
            "offerCompany": {
                "companyName": "Data Insights Co.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (987) 654-3210",
                "companyEmailAddress": "hr@datainsights.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Frontend Developer",
            "offerExperienceLevel": "MID",
            "offerDescription": "Join our team as a Mid-Level Frontend Developer and contribute to exciting projects.",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "2800-3600USD",
            "offerCompany": {
                "companyName": "Web Innovations Ltd.",
                "companyCountry": "United Kingdom",
                "companyPhoneNumber": "+44 20 1234 5678",
                "companyEmailAddress": "info@webinnovations.co.uk"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior Data Scientist",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Data Scientist to lead data-driven initiatives.",
            "offerContractType": "B2B",
            "offerContract": "Contract",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "3200-4200USD",
            "offerCompany": {
                "companyName": "Data Science Solutions Inc.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 123-4567",
                "companyEmailAddress": "hr@datasciencesolutions.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Software Engineering Intern",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Exciting internship opportunity for a Junior Software Engineer.",
            "offerContractType": "INTERNSHIP",
            "offerContract": "Part-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2000-2800USD",
            "offerCompany": {
                "companyName": "Tech Starters Ltd.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (123) 987-6543",
                "companyEmailAddress": "internship@techstarters.ca"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior Backend Developer",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Backend Developer to lead backend architecture projects.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "3000-4000USD",
            "offerCompany": {
                "companyName": "Backend Solutions Corp.",
                "companyCountry": "Germany",
                "companyPhoneNumber": "+49 123 456 789",
                "companyEmailAddress": "hr@backendsolutions.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior UX/UI Designer",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior UX/UI Designer. Join our creative team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "2500-3500USD",
            "offerCompany": {
                "companyName": "Design Innovations Ltd.",
                "companyCountry": "France",
                "companyPhoneNumber": "+33 1 23 45 67 89",
                "companyEmailAddress": "design@innovations.fr"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Data Engineer",
            "offerExperienceLevel": "MID",
            "offerDescription": "Mid-Level Data Engineer position available. Join our growing data team!",
            "offerContractType": "MANDATE-CONTRACT",
            "offerContract": "Contract",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2800-3800USD",
            "offerCompany": {
                "companyName": "Data Engineering Solutions Inc.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 987-6543",
                "companyEmailAddress": "info@dataengsolutions.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior Full Stack Developer",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Full Stack Developer to contribute to cutting-edge projects.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "3200-4200USD",
            "offerCompany": {
                "companyName": "FullStack Innovations Ltd.",
                "companyCountry": "United Kingdom",
                "companyPhoneNumber": "+44 20 9876 5432",
                "companyEmailAddress": "info@fullstackinnovations.co.uk"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior DevOps Engineer",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior DevOps Engineer. Join our DevOps team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2500-3500USD",
            "offerCompany": {
                "companyName": "DevOps Solutions Inc.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (123) 456-7890",
                "companyEmailAddress": "hr@devopssolutions.ca"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Machine Learning Engineer",
            "offerExperienceLevel": "MID",
            "offerDescription": "Mid-Level Machine Learning Engineer position available. Join our AI research team!",
            "offerContractType": "B2B",
            "offerContract": "Contract",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "3000-4000USD",
            "offerCompany": {
                "companyName": "AI Innovations Corp.",
                "companyCountry": "Germany",
                "companyPhoneNumber": "+49 123 456 789",
                "companyEmailAddress": "ai@innovations.de"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Senior Cloud Solutions Architect",
            "offerExperienceLevel": "SENIOR",
            "offerDescription": "Exciting opportunity for a Senior Cloud Solutions Architect to design and implement cloud solutions.",
            "offerContractType": "B2B",
            "offerContract": "Full-time",
            "offerOperatingMode": "REMOTE",
            "offerSalaryRange": "3500-4500USD",
            "offerCompany": {
                "companyName": "Cloud Architects Ltd.",
                "companyCountry": "United States",
                "companyPhoneNumber": "+1 (555) 123-4567",
                "companyEmailAddress": "info@cloudarchitects.com"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Junior Cybersecurity Analyst",
            "offerExperienceLevel": "JUNIOR",
            "offerDescription": "Entry-level position for a Junior Cybersecurity Analyst. Join our cybersecurity team!",
            "offerContractType": "INTERNSHIP",
            "offerContract": "Part-time",
            "offerOperatingMode": "HYBRID",
            "offerSalaryRange": "2400-3400USD",
            "offerCompany": {
                "companyName": "SecureTech Solutions Inc.",
                "companyCountry": "Canada",
                "companyPhoneNumber": "+1 (123) 987-6543",
                "companyEmailAddress": "hr@securetechsolutions.ca"
            },
            "offerApplications": []
        },
        {
            "offerPosition": "Mid-Level Product Manager",
            "offerExperienceLevel": "MID",
            "offerDescription": "Mid-Level Product Manager position available. Join our product management team!",
            "offerContractType": "PERMANENT",
            "offerContract": "Full-time",
            "offerOperatingMode": "ON-SITE",
            "offerSalaryRange": "2900-3900USD",
            "offerCompany": {
                "companyName": "Product Innovators Corp.",
                "companyCountry": "France",
                "companyPhoneNumber": "+33 1 2345 6789",
                "companyEmailAddress": "product@innovators.fr"
            },
            "offerApplications": []
        }
    ];

    db.offer_collection.insertMany(jobOffers);

    print("Job offers inserted successfully.");
} else {
    print("Database and collection already exist. Skipping initialization.");
}

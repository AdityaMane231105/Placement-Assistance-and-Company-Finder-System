const STORAGE_KEYS = {
  applied: 'placementFinderApplied',
  bookmarks: 'placementFinderBookmarks',
  theme: 'placementFinderTheme',
  lastUpdated: 'placementFinderLastUpdated',
  userSkills: 'placementFinderUserSkills',
  userProfile: 'placementFinderUserProfile',
};

const defaultCompanies = [
  {
    "id": 1,
    "name": "TCS",
    "role": "Software Engineer Trainee",
    "package": "3.5 LPA",
    "packageValue": 3.5,
    "skills": ["Java", "SQL", "DSA"],
    "eligibility": "Minimum 60% in 10th, 12th and graduation",
    "location": "Bangalore",
    "description": "Entry-level software development role for campus graduates.",
    "aboutCompany": "Tata Consultancy Services is a global IT services, consulting, and business solutions company.",
    "packageDetails": "Base: 3.5 LPA, training program, medical insurance",
    "internshipAvailable": true
  },
  {
    "id": 2,
    "name": "Infosys",
    "role": "System Engineer",
    "package": "4 LPA",
    "packageValue": 4,
    "skills": ["Python", "DBMS", "Java"],
    "eligibility": "65% overall and no active backlogs",
    "location": "Pune",
    "description": "Fresh graduate hiring with structured training and project allocation.",
    "aboutCompany": "Infosys provides consulting, technology, outsourcing, and next-generation digital services.",
    "packageDetails": "Base: 4 LPA, performance bonus, relocation assistance",
    "internshipAvailable": true
  },
  {
    "id": 3,
    "name": "Wipro",
    "role": "Project Engineer",
    "package": "3.8 LPA",
    "packageValue": 3.8,
    "skills": ["C++", "Data Structures", "Aptitude"],
    "eligibility": "60% in all academics and good problem-solving skills",
    "location": "Hyderabad",
    "description": "Campus role for freshers joining development and support teams.",
    "aboutCompany": "Wipro is a technology services and consulting company focused on digital transformation.",
    "packageDetails": "Base: 3.8 LPA, training benefits, health coverage",
    "internshipAvailable": true
  },
  {
    "id": 4,
    "name": "Cognizant",
    "role": "Associate Software Engineer",
    "package": "4.2 LPA",
    "packageValue": 4.2,
    "skills": ["JavaScript", "React", "SQL"],
    "eligibility": "Minimum 65% in academics, no active backlogs",
    "location": "Chennai",
    "description": "Full-stack training role for agile engineering teams.",
    "aboutCompany": "Cognizant is a professional services company working across technology, operations, and consulting.",
    "packageDetails": "Base: 4.2 LPA, learning benefits, project bonus",
    "internshipAvailable": false
  },
  {
    "id": 5,
    "name": "Accenture",
    "role": "Application Development Associate",
    "package": "4.6 LPA",
    "packageValue": 4.6,
    "skills": ["Java", "Cloud", "Aptitude"],
    "eligibility": "65% in academics with strong communication skills",
    "location": "Mumbai",
    "description": "Technology consulting role with client-facing software delivery exposure.",
    "aboutCompany": "Accenture is a global professional services company with capabilities in cloud, data, AI, and consulting.",
    "packageDetails": "Base: 4.6 LPA, joining bonus, certification support",
    "internshipAvailable": true
  },
  {
    "id": 6,
    "name": "Tech Mahindra",
    "role": "Junior Developer",
    "package": "3.6 LPA",
    "packageValue": 3.6,
    "skills": ["Python", "Machine Learning", "SQL"],
    "eligibility": "60% in academics, internship experience preferred",
    "location": "Noida",
    "description": "Digital engineering role for freshers interested in analytics and automation.",
    "aboutCompany": "Tech Mahindra provides IT services, business process services, and digital transformation solutions.",
    "packageDetails": "Base: 3.6 LPA, performance incentives, training provided",
    "internshipAvailable": true
  },
  {
    "id": 7,
    "name": "Capgemini",
    "role": "Analyst",
    "package": "4 LPA",
    "packageValue": 4,
    "skills": ["Java", "Aptitude", "Communication"],
    "eligibility": "No active backlog and 60%+ academic score",
    "location": "Hyderabad",
    "description": "Graduate analyst role with software development and consulting training.",
    "aboutCompany": "Capgemini is a global consulting, technology services, and digital transformation company.",
    "packageDetails": "Base: 4 LPA, benefits package, career development",
    "internshipAvailable": true
  },
  {
    "id": 8,
    "name": "Google",
    "role": "Software Engineering Intern",
    "package": "8 LPA+ converted",
    "packageValue": 8,
    "skills": ["C++", "Algorithms", "System Design"],
    "eligibility": "Strong coding skills and excellent academic record",
    "location": "Bangalore",
    "description": "Competitive internship for students with strong DSA and problem-solving ability.",
    "aboutCompany": "Google builds search, ads, cloud, Android, YouTube, and AI-driven consumer and enterprise products.",
    "packageDetails": "Intern stipend, conversion opportunity, stock and benefits on full-time offer",
    "internshipAvailable": true
  },
  {
    "id": 9,
    "name": "Microsoft",
    "role": "Software Engineering Intern",
    "package": "7.5 LPA+ converted",
    "packageValue": 7.5,
    "skills": ["C#", "Data Structures", "Problem Solving"],
    "eligibility": "Strong academic performance and coding aptitude",
    "location": "Hyderabad",
    "description": "Engineering internship for students interested in cloud, productivity, and platform products.",
    "aboutCompany": "Microsoft develops software, cloud platforms, developer tools, productivity products, and hardware.",
    "packageDetails": "Intern stipend, housing support, conversion opportunity",
    "internshipAvailable": true
  },
  {
    "id": 10,
    "name": "Zomato",
    "role": "Junior Software Engineer",
    "package": "5 LPA",
    "packageValue": 5,
    "skills": ["React", "Node.js", "SQL"],
    "eligibility": "60%+ in academics and strong JavaScript knowledge",
    "location": "Bangalore",
    "description": "Product engineering role for food delivery and restaurant technology systems.",
    "aboutCompany": "Zomato is a food ordering, restaurant discovery, and quick-commerce technology company.",
    "packageDetails": "Base: 5 LPA, equity, flexible work benefits",
    "internshipAvailable": false
  },
  {
    "id": 11,
    "name": "Swiggy",
    "role": "Software Development Engineer",
    "package": "5.2 LPA",
    "packageValue": 5.2,
    "skills": ["Python", "Data Structures", "APIs"],
    "eligibility": "60%+ academics and strong problem-solving mindset",
    "location": "Bangalore",
    "description": "Engineering role for logistics, marketplace, and delivery product teams.",
    "aboutCompany": "Swiggy operates food delivery, grocery delivery, logistics, and consumer commerce platforms.",
    "packageDetails": "Base: 5.2 LPA, ESOPs, health insurance",
    "internshipAvailable": false
  },
  {
    "id": 12,
    "name": "IBM",
    "role": "Associate System Engineer",
    "package": "4.5 LPA",
    "packageValue": 4.5,
    "skills": ["Java", "Cloud", "Aptitude"],
    "eligibility": "60%+ academics and basic programming knowledge",
    "location": "Pune",
    "description": "Graduate engineering role focused on enterprise software and cloud services.",
    "aboutCompany": "IBM is a technology and consulting company focused on hybrid cloud, AI, infrastructure, and enterprise services.",
    "packageDetails": "Base: 4.5 LPA, training program, certification support",
    "internshipAvailable": true
  },
  {
    "id": 13,
    "name": "HCLTech",
    "role": "Graduate Engineer Trainee",
    "package": "3.75 LPA",
    "packageValue": 3.75,
    "skills": ["Java", "SQL", "Linux"],
    "eligibility": "60%+ academics with no active backlogs",
    "location": "Noida",
    "description": "Campus engineering role for software delivery, cloud, and infrastructure projects.",
    "aboutCompany": "HCLTech is a global technology company offering digital, engineering, cloud, and AI services.",
    "packageDetails": "Base: 3.75 LPA, training, health benefits",
    "internshipAvailable": true
  },
  {
    "id": 14,
    "name": "LTIMindtree",
    "role": "Software Engineer Trainee",
    "package": "4.05 LPA",
    "packageValue": 4.05,
    "skills": ["Java", "JavaScript", "DBMS"],
    "eligibility": "60%+ in 10th, 12th, and graduation",
    "location": "Mumbai",
    "description": "Fresh graduate role for digital engineering and enterprise application teams.",
    "aboutCompany": "LTIMindtree is a technology consulting and digital solutions company formed by Larsen & Toubro Infotech and Mindtree.",
    "packageDetails": "Base: 4.05 LPA, training, project incentives",
    "internshipAvailable": true
  },
  {
    "id": 15,
    "name": "Mphasis",
    "role": "Trainee Software Engineer",
    "package": "3.5 LPA",
    "packageValue": 3.5,
    "skills": ["Java", "Testing", "SQL"],
    "eligibility": "60%+ academics and no current backlogs",
    "location": "Bangalore",
    "description": "Technology trainee role for application development, QA, and support tracks.",
    "aboutCompany": "Mphasis provides cloud and cognitive services for banking, insurance, logistics, and technology clients.",
    "packageDetails": "Base: 3.5 LPA, learning program, health benefits",
    "internshipAvailable": false
  },
  {
    "id": 16,
    "name": "Deloitte",
    "role": "Analyst - Technology Consulting",
    "package": "6.5 LPA",
    "packageValue": 6.5,
    "skills": ["SQL", "Cloud", "Communication"],
    "eligibility": "65%+ academics with strong analytical and communication skills",
    "location": "Hyderabad",
    "description": "Consulting analyst role for technology implementation and business transformation projects.",
    "aboutCompany": "Deloitte provides audit, consulting, tax, risk advisory, and technology services.",
    "packageDetails": "Base: 6.5 LPA, performance bonus, learning budget",
    "internshipAvailable": true
  },
  {
    "id": 17,
    "name": "EY",
    "role": "Technology Risk Consultant",
    "package": "5.8 LPA",
    "packageValue": 5.8,
    "skills": ["Cybersecurity", "SQL", "Communication"],
    "eligibility": "60%+ academics, audit or security fundamentals preferred",
    "location": "Gurugram",
    "description": "Entry-level consulting role for IT risk, controls, cybersecurity, and compliance projects.",
    "aboutCompany": "EY is a professional services firm offering assurance, consulting, strategy, tax, and transactions services.",
    "packageDetails": "Base: 5.8 LPA, certification support, client project exposure",
    "internshipAvailable": true
  },
  {
    "id": 18,
    "name": "KPMG",
    "role": "Technology Analyst",
    "package": "5.5 LPA",
    "packageValue": 5.5,
    "skills": ["Data Analysis", "SQL", "Excel"],
    "eligibility": "60%+ academics with aptitude and communication skills",
    "location": "Gurugram",
    "description": "Analyst role for technology advisory, analytics, and process transformation projects.",
    "aboutCompany": "KPMG provides audit, tax, advisory, technology, and consulting services.",
    "packageDetails": "Base: 5.5 LPA, annual bonus, professional training",
    "internshipAvailable": true
  },
  {
    "id": 19,
    "name": "PwC",
    "role": "Associate - Technology Consulting",
    "package": "6 LPA",
    "packageValue": 6,
    "skills": ["Python", "Data Analysis", "Cloud"],
    "eligibility": "60%+ academics, strong reasoning and communication skills",
    "location": "Mumbai",
    "description": "Consulting associate role for digital transformation and analytics projects.",
    "aboutCompany": "PwC provides assurance, advisory, tax, deals, cloud, and digital transformation services.",
    "packageDetails": "Base: 6 LPA, variable pay, learning allowance",
    "internshipAvailable": true
  },
  {
    "id": 20,
    "name": "Amazon",
    "role": "Software Development Engineer Intern",
    "package": "8 LPA+ converted",
    "packageValue": 8,
    "skills": ["Java", "Data Structures", "System Design"],
    "eligibility": "Strong DSA, coding rounds, and good academic standing",
    "location": "Bangalore",
    "description": "Engineering internship for students interested in distributed systems and customer-scale products.",
    "aboutCompany": "Amazon builds e-commerce, cloud computing, logistics, streaming, devices, and digital services.",
    "packageDetails": "Intern stipend, conversion opportunity, relocation support",
    "internshipAvailable": true
  },
  {
    "id": 21,
    "name": "Flipkart",
    "role": "Software Development Engineer",
    "package": "7 LPA",
    "packageValue": 7,
    "skills": ["Java", "Spring Boot", "Data Structures"],
    "eligibility": "65%+ academics with strong DSA and backend fundamentals",
    "location": "Bangalore",
    "description": "Product engineering role for marketplace, payments, supply chain, and consumer systems.",
    "aboutCompany": "Flipkart is an Indian e-commerce company operating marketplace, logistics, payments, and retail technology platforms.",
    "packageDetails": "Base: 7 LPA, bonus, health benefits",
    "internshipAvailable": true
  },
  {
    "id": 22,
    "name": "PhonePe",
    "role": "Backend Engineer",
    "package": "7.2 LPA",
    "packageValue": 7.2,
    "skills": ["Java", "APIs", "System Design"],
    "eligibility": "Strong programming fundamentals and 65%+ academics",
    "location": "Bangalore",
    "description": "Backend engineering opportunity for digital payments and financial technology systems.",
    "aboutCompany": "PhonePe builds UPI payments, financial services, merchant tools, and consumer fintech products.",
    "packageDetails": "Base: 7.2 LPA, bonus, insurance",
    "internshipAvailable": true
  },
  {
    "id": 23,
    "name": "Razorpay",
    "role": "Frontend Engineer",
    "package": "7 LPA",
    "packageValue": 7,
    "skills": ["JavaScript", "React", "APIs"],
    "eligibility": "Strong frontend projects and 60%+ academics",
    "location": "Bangalore",
    "description": "Frontend role for payments dashboards, merchant tools, and financial workflows.",
    "aboutCompany": "Razorpay provides payment gateway, banking, lending, and financial technology infrastructure.",
    "packageDetails": "Base: 7 LPA, performance bonus, learning allowance",
    "internshipAvailable": true
  },
  {
    "id": 24,
    "name": "Paytm",
    "role": "Software Engineer",
    "package": "5.5 LPA",
    "packageValue": 5.5,
    "skills": ["Java", "Node.js", "MongoDB"],
    "eligibility": "60%+ academics and practical project experience",
    "location": "Noida",
    "description": "Engineering role for payments, commerce, and financial services products.",
    "aboutCompany": "Paytm is a digital payments and financial services platform for consumers and merchants.",
    "packageDetails": "Base: 5.5 LPA, benefits, performance incentive",
    "internshipAvailable": true
  },
  {
    "id": 25,
    "name": "Zoho",
    "role": "Member Technical Staff",
    "package": "6.2 LPA",
    "packageValue": 6.2,
    "skills": ["Java", "JavaScript", "Problem Solving"],
    "eligibility": "Strong coding ability; degree criteria may vary by drive",
    "location": "Chennai",
    "description": "Product engineering role for SaaS applications and platform services.",
    "aboutCompany": "Zoho builds business software for CRM, finance, HR, analytics, collaboration, and developer platforms.",
    "packageDetails": "Base: 6.2 LPA, product training, health benefits",
    "internshipAvailable": true
  },
  {
    "id": 26,
    "name": "Freshworks",
    "role": "Software Engineer",
    "package": "6.8 LPA",
    "packageValue": 6.8,
    "skills": ["JavaScript", "React", "Node.js"],
    "eligibility": "60%+ academics with strong web development projects",
    "location": "Chennai",
    "description": "SaaS product engineering role for customer support, CRM, and IT service products.",
    "aboutCompany": "Freshworks builds cloud software for customer support, sales, marketing, and IT teams.",
    "packageDetails": "Base: 6.8 LPA, bonus, product learning programs",
    "internshipAvailable": true
  },
  {
    "id": 27,
    "name": "ServiceNow",
    "role": "Associate Software Engineer",
    "package": "7.5 LPA",
    "packageValue": 7.5,
    "skills": ["JavaScript", "Java", "Cloud"],
    "eligibility": "65%+ academics and strong programming fundamentals",
    "location": "Hyderabad",
    "description": "Platform engineering role for enterprise workflow automation products.",
    "aboutCompany": "ServiceNow provides a cloud platform for digital workflows across IT, employee, customer, and creator experiences.",
    "packageDetails": "Base: 7.5 LPA, bonus, wellness benefits",
    "internshipAvailable": true
  },
  {
    "id": 28,
    "name": "Salesforce",
    "role": "Associate Member of Technical Staff",
    "package": "8 LPA",
    "packageValue": 8,
    "skills": ["Java", "Cloud", "APIs"],
    "eligibility": "Strong coding skills, 65%+ academics preferred",
    "location": "Hyderabad",
    "description": "Cloud engineering role for CRM, data, AI, and platform services.",
    "aboutCompany": "Salesforce builds CRM, data, AI, marketing, commerce, and low-code cloud platforms.",
    "packageDetails": "Base: 8 LPA, bonus, stock benefits depending on role",
    "internshipAvailable": true
  },
  {
    "id": 29,
    "name": "Adobe",
    "role": "Software Engineer Intern",
    "package": "8 LPA+ converted",
    "packageValue": 8,
    "skills": ["C++", "Java", "Algorithms"],
    "eligibility": "Excellent coding skills and strong academic record",
    "location": "Noida",
    "description": "Internship opportunity for creative cloud, document cloud, and digital experience engineering.",
    "aboutCompany": "Adobe builds software for creativity, documents, marketing, analytics, and digital experiences.",
    "packageDetails": "Intern stipend, conversion opportunity, benefits on full-time offer",
    "internshipAvailable": true
  },
  {
    "id": 30,
    "name": "Oracle",
    "role": "Application Developer",
    "package": "6.5 LPA",
    "packageValue": 6.5,
    "skills": ["Java", "SQL", "Cloud"],
    "eligibility": "60%+ academics with database and programming fundamentals",
    "location": "Bangalore",
    "description": "Developer role for enterprise applications, databases, and cloud services.",
    "aboutCompany": "Oracle builds database, cloud infrastructure, enterprise applications, and developer technologies.",
    "packageDetails": "Base: 6.5 LPA, bonus, learning support",
    "internshipAvailable": true
  },
  {
    "id": 31,
    "name": "SAP Labs",
    "role": "Associate Developer",
    "package": "7 LPA",
    "packageValue": 7,
    "skills": ["Java", "SQL", "Cloud"],
    "eligibility": "65%+ academics and strong software fundamentals",
    "location": "Bangalore",
    "description": "Enterprise product development role for cloud ERP and business applications.",
    "aboutCompany": "SAP builds enterprise software for ERP, finance, supply chain, HR, analytics, and business technology platforms.",
    "packageDetails": "Base: 7 LPA, bonus, product training",
    "internshipAvailable": true
  },
  {
    "id": 32,
    "name": "NVIDIA",
    "role": "Systems Software Intern",
    "package": "8 LPA+ converted",
    "packageValue": 8,
    "skills": ["C++", "Linux", "Algorithms"],
    "eligibility": "Strong C/C++, operating systems, and problem-solving skills",
    "location": "Pune",
    "description": "Internship for students interested in GPU computing, systems, and AI infrastructure.",
    "aboutCompany": "NVIDIA designs GPUs, accelerated computing platforms, AI infrastructure, and developer software.",
    "packageDetails": "Intern stipend, conversion opportunity, hardware and wellness benefits",
    "internshipAvailable": true
  },
  {
    "id": 33,
    "name": "Intel",
    "role": "Graduate Technical Intern",
    "package": "6.5 LPA+ converted",
    "packageValue": 6.5,
    "skills": ["C++", "Linux", "Embedded Systems"],
    "eligibility": "Strong computer architecture or embedded systems basics",
    "location": "Bangalore",
    "description": "Internship for hardware-software, validation, firmware, and systems teams.",
    "aboutCompany": "Intel designs processors, platforms, software, networking, and computing technologies.",
    "packageDetails": "Intern stipend, conversion opportunity, health benefits",
    "internshipAvailable": true
  },
  {
    "id": 34,
    "name": "Cisco",
    "role": "Software Engineer",
    "package": "7 LPA",
    "packageValue": 7,
    "skills": ["Python", "Networking", "Linux"],
    "eligibility": "65%+ academics with networking or systems fundamentals",
    "location": "Bangalore",
    "description": "Engineering role for networking, cloud, security, and collaboration products.",
    "aboutCompany": "Cisco builds networking, security, observability, collaboration, and cloud infrastructure products.",
    "packageDetails": "Base: 7 LPA, bonus, certification support",
    "internshipAvailable": true
  },
  {
    "id": 35,
    "name": "JPMorgan Chase",
    "role": "Software Engineer Program Analyst",
    "package": "7.5 LPA",
    "packageValue": 7.5,
    "skills": ["Java", "Data Structures", "SQL"],
    "eligibility": "Strong coding ability and 60%+ academics",
    "location": "Mumbai",
    "description": "Technology analyst role for banking platforms, risk systems, and data applications.",
    "aboutCompany": "JPMorgan Chase is a global financial services firm with major technology and engineering teams.",
    "packageDetails": "Base: 7.5 LPA, bonus, financial wellness benefits",
    "internshipAvailable": true
  },
  {
    "id": 36,
    "name": "Goldman Sachs",
    "role": "Engineering Analyst",
    "package": "8 LPA",
    "packageValue": 8,
    "skills": ["Java", "Python", "Data Structures"],
    "eligibility": "Strong DSA, aptitude, and academic consistency",
    "location": "Bangalore",
    "description": "Engineering role for trading, risk, data, and financial technology platforms.",
    "aboutCompany": "Goldman Sachs is a global investment banking, securities, and investment management firm with large engineering teams.",
    "packageDetails": "Base: 8 LPA, performance bonus, learning benefits",
    "internshipAvailable": true
  },
  {
    "id": 37,
    "name": "Morgan Stanley",
    "role": "Technology Analyst",
    "package": "7.8 LPA",
    "packageValue": 7.8,
    "skills": ["Java", "SQL", "Problem Solving"],
    "eligibility": "60%+ academics, strong coding and reasoning skills",
    "location": "Mumbai",
    "description": "Technology analyst role for financial platforms, data systems, and enterprise applications.",
    "aboutCompany": "Morgan Stanley is a global financial services firm with engineering teams across trading, wealth, risk, and data platforms.",
    "packageDetails": "Base: 7.8 LPA, bonus, professional training",
    "internshipAvailable": true
  },
  {
    "id": 38,
    "name": "Meesho",
    "role": "Software Development Engineer",
    "package": "6.5 LPA",
    "packageValue": 6.5,
    "skills": ["Java", "Node.js", "Data Structures"],
    "eligibility": "Strong DSA and backend project experience preferred",
    "location": "Bangalore",
    "description": "Marketplace engineering role for seller, catalog, discovery, and order systems.",
    "aboutCompany": "Meesho is an Indian e-commerce marketplace focused on value commerce and seller enablement.",
    "packageDetails": "Base: 6.5 LPA, ESOPs, health benefits",
    "internshipAvailable": true
  },
  {
    "id": 39,
    "name": "Ola Electric",
    "role": "Software Engineer",
    "package": "6 LPA",
    "packageValue": 6,
    "skills": ["Python", "IoT", "Cloud"],
    "eligibility": "60%+ academics with software or embedded project work",
    "location": "Bangalore",
    "description": "Engineering role for mobility, connected vehicle, cloud, and manufacturing software.",
    "aboutCompany": "Ola Electric builds electric vehicles, charging technology, connected mobility software, and manufacturing systems.",
    "packageDetails": "Base: 6 LPA, bonus, mobility benefits",
    "internshipAvailable": true
  },
  {
    "id": 40,
    "name": "MakeMyTrip",
    "role": "Software Engineer",
    "package": "6.4 LPA",
    "packageValue": 6.4,
    "skills": ["React", "Java", "APIs"],
    "eligibility": "60%+ academics and strong web or backend projects",
    "location": "Gurugram",
    "description": "Travel technology engineering role for booking, payments, search, and customer platforms.",
    "aboutCompany": "MakeMyTrip operates travel booking platforms for flights, hotels, holidays, buses, and experiences.",
    "packageDetails": "Base: 6.4 LPA, travel benefits, insurance",
    "internshipAvailable": true
  }
]
;

// ==================== STORAGE FUNCTIONS ====================
function getStoredArray(key) {
  return JSON.parse(localStorage.getItem(key) || '[]').map(item => String(item));
}

function setStoredArray(key, items) {
  localStorage.setItem(key, JSON.stringify(items.map(item => String(item))));
  localStorage.setItem(STORAGE_KEYS.lastUpdated, new Date().toISOString());
}

function getAppliedIds() {
  return getStoredArray(STORAGE_KEYS.applied);
}

function getBookmarkIds() {
  return getStoredArray(STORAGE_KEYS.bookmarks);
}

function toggleItem(key, id) {
  const list = getStoredArray(key);
  const itemId = String(id);
  const index = list.indexOf(itemId);
  if (index === -1) {
    list.push(itemId);
  } else {
    list.splice(index, 1);
  }
  setStoredArray(key, list);
  return list;
}

function isApplied(id) {
  return getAppliedIds().includes(String(id));
}

function isBookmarked(id) {
  return getBookmarkIds().includes(String(id));
}

function getUserProfile() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.userProfile) || '{}');
  } catch (error) {
    return {};
  }
}

// ==================== SKILLS MANAGEMENT ====================
const availableSkills = [
  'Java', 'Python', 'JavaScript', 'C++', 'C#', 'React', 'Node.js', 'SQL',
  'Data Structures', 'Algorithms', 'Machine Learning', 'AI', 'Cloud',
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Git', 'HTML', 'CSS',
  'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Linux', 'DevOps',
  'APIs', 'Cybersecurity', 'Data Analysis', 'Excel', 'Spring Boot',
  'Networking', 'Embedded Systems', 'IoT', 'Testing', 'Communication'
];

function getUserSkills() {
  const profileSkills = getUserProfile().skills;
  if (Array.isArray(profileSkills) && profileSkills.length > 0) {
    return profileSkills;
  }

  return JSON.parse(localStorage.getItem(STORAGE_KEYS.userSkills) || '[]');
}

function setUserSkills(skills) {
  localStorage.setItem(STORAGE_KEYS.userSkills, JSON.stringify(skills));

  const profile = getUserProfile();
  localStorage.setItem(STORAGE_KEYS.userProfile, JSON.stringify({
    ...profile,
    skills,
    lastUpdated: new Date().toISOString(),
  }));

  localStorage.setItem(STORAGE_KEYS.lastUpdated, new Date().toISOString());
}

function renderSkillsProfile() {
  const userSkills = getUserSkills();
  const skillsDisplay = document.getElementById('skillsDisplay');
  const currentSkills = document.getElementById('currentSkills');
  const toggleBtn = document.getElementById('toggleSkills');

  if (currentSkills) {
    currentSkills.innerHTML = userSkills.length > 0
      ? userSkills.map(skill => `<span class="tag">${skill}</span>`).join('')
      : '<p style="color: var(--muted);">No skills selected yet</p>';
  }

  if (skillsDisplay) {
    skillsDisplay.style.display = userSkills.length > 0 ? 'block' : 'none';
  }

  if (toggleBtn) {
    toggleBtn.textContent = userSkills.length > 0 ? 'Edit Skills' : 'Add Skills';
  }
}

function renderSkillsForm() {
  const skillsGrid = document.getElementById('skillsGrid');
  const userSkills = getUserSkills();

  if (skillsGrid) {
    skillsGrid.innerHTML = availableSkills.map(skill => `
      <label class="skill-checkbox" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border: 1px solid var(--border); border-radius: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
        <input type="checkbox" value="${skill}" ${userSkills.includes(skill) ? 'checked' : ''} style="margin: 0;">
        <span>${skill}</span>
      </label>
    `).join('');
  }
}

function toggleSkillsForm() {
  const skillsForm = document.getElementById('skillsForm');
  const skillsDisplay = document.getElementById('skillsDisplay');

  if (skillsForm && skillsDisplay) {
    const isFormVisible = skillsForm.style.display !== 'none';
    skillsForm.style.display = isFormVisible ? 'none' : 'block';
    skillsDisplay.style.display = isFormVisible ? 'block' : 'none';
    renderSkillsForm();
  }
}

function saveSkills() {
  const checkboxes = document.querySelectorAll('#skillsGrid input[type="checkbox"]:checked');
  const selectedSkills = Array.from(checkboxes).map(cb => cb.value);

  setUserSkills(selectedSkills);
  renderSkillsProfile();
  toggleSkillsForm();
  renderCurrentPage(); // Re-render companies with new match percentages
}

function cancelSkills() {
  const skillsForm = document.getElementById('skillsForm');
  if (skillsForm) skillsForm.style.display = 'none';
  renderSkillsProfile();
}

// ==================== SKILLS MANAGEMENT SETUP ====================
function setupSkillsManagement() {
  const toggleBtn = document.getElementById('toggleSkills');
  const saveBtn = document.getElementById('saveSkills');
  const cancelBtn = document.getElementById('cancelSkills');

  
  if (toggleBtn) {
    // Remove any existing listeners to prevent duplicates
    const newToggleBtn = toggleBtn.cloneNode(true);
    toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);
    newToggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSkillsForm();
    });
  }

  if (saveBtn) {
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    newSaveBtn.addEventListener('click', function(e) {
      e.preventDefault();
      saveSkills();
    });
  }

  if (cancelBtn) {
    const newCancelBtn = cancelBtn.cloneNode(true);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
    newCancelBtn.addEventListener('click', function(e) {
      e.preventDefault();
      cancelSkills();
    });
  }

  renderSkillsProfile();
}

function calculateSkillMatch(userSkills, companySkills) {
  if (!userSkills || userSkills.length === 0) return 0;

  const userSkillsLower = userSkills.map(skill => skill.toLowerCase());
  const companySkillsLower = companySkills.map(skill => skill.toLowerCase());

  const matchedSkills = companySkillsLower.filter(skill =>
    userSkillsLower.some(userSkill => userSkill.includes(skill) || skill.includes(userSkill))
  );

  return Math.round((matchedSkills.length / Math.max(companySkillsLower.length, 1)) * 100);
}

function companyNeedsMinimumCgpa(company) {
  const eligibility = String(company.eligibility || '').toLowerCase();
  const percentMatch = eligibility.match(/(\d{2})\s*%/);
  if (percentMatch) {
    return Number(percentMatch[1]) / 10;
  }

  return 6;
}

function scoreTextMatch(preference, target) {
  if (!preference || !target) return 50;

  const left = String(preference).toLowerCase();
  const right = String(target).toLowerCase();
  return left.includes(right) || right.includes(left) ? 100 : 40;
}

function calculateProfileMatch(company) {
  const profile = getUserProfile();
  const userSkills = getUserSkills();
  const skillScore = calculateSkillMatch(userSkills, company.skills || []);

  const cgpa = Number(profile.cgpa);
  const minimumCgpa = companyNeedsMinimumCgpa(company);
  const cgpaScore = Number.isFinite(cgpa) && cgpa > 0
    ? (cgpa >= minimumCgpa ? 100 : Math.max(0, Math.round((cgpa / minimumCgpa) * 100)))
    : 50;

  const locations = Array.isArray(profile.locations) ? profile.locations : [];
  const locationScore = locations.length === 0
    ? 50
    : locations.some(location => String(company.location || '').toLowerCase().includes(String(location).toLowerCase())) ? 100 : 30;

  const roleScore = scoreTextMatch(profile.preferredRole, company.role);
  const packageScore = Number(profile.minPackage) > 0
    ? (Number(company.packageValue) >= Number(profile.minPackage) ? 100 : 45)
    : 50;

  return Math.round(
    (skillScore * 0.45) +
    (cgpaScore * 0.2) +
    (roleScore * 0.15) +
    (locationScore * 0.1) +
    (packageScore * 0.1)
  );
}

function getMatchLevel(percentage) {
  if (percentage >= 80) return { level: 'Excellent', color: '#16a34a', icon: 'Excellent' };
  if (percentage >= 60) return { level: 'Good', color: '#f59e0b', icon: 'Good' };
  if (percentage >= 40) return { level: 'Fair', color: '#f97316', icon: 'Fair' };
  return { level: 'Low', color: '#dc2626', icon: 'Low' };
}

function sortCompaniesByMatch(companies, userSkills) {
  if (!userSkills || userSkills.length === 0) return companies;

  return companies.map(company => ({
    ...company,
    matchPercentage: calculateProfileMatch(company),
    matchLevel: getMatchLevel(calculateProfileMatch(company))
  })).sort((a, b) => b.matchPercentage - a.matchPercentage);
}

function formatSkills(skills) {
  if (!skills || skills.length === 0) return '';
  return skills.map(skill => `<span class="tag">${skill}</span>`).join('');
}

// ==================== RENDER FUNCTIONS ====================
function renderCompanyCard(company) {
  const applied = isApplied(company.id);
  const bookmarked = isBookmarked(company.id);
  const packageLabel = company.package || `${company.packageValue} LPA`;
  const userSkills = getUserSkills();
  const profile = getUserProfile();
  const hasProfileSignal = userSkills.length > 0 || profile.cgpa || profile.preferredRole || (profile.locations || []).length > 0;
  const matchPercentage = hasProfileSignal ? calculateProfileMatch(company) : null;
  const matchInfo = matchPercentage !== null ? getMatchLevel(matchPercentage) : null;

  const matchBadge = matchInfo ? `
    <div class="match-badge" style="background: ${matchInfo.color}; color: white; padding: 0.25rem 0.5rem; border-radius: 0.5rem; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem; margin-bottom: 0.5rem;">
      ${matchInfo.icon} ${matchPercentage}% Profile Match
    </div>
  ` : '';

  const matchBar = matchInfo ? `
    <div class="match-bar" style="width: 100%; height: 4px; background: var(--border); border-radius: 2px; margin: 0.5rem 0; overflow: hidden;">
      <div style="width: ${matchPercentage}%; height: 100%; background: ${matchInfo.color}; transition: width 0.3s ease;"></div>
    </div>
  ` : '';

  return `
    <article class="company-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <div>
          <h3>${company.name}</h3>
          <p style="font-weight: 500; color: var(--primary); margin: 0.25rem 0;">${company.role}</p>
        </div>
        ${matchBadge}
      </div>
      ${matchBar}
      <p style="font-size: 0.9rem; margin: 0.5rem 0;">${company.description}</p>
      <div class="company-meta">
        <div><strong>ðŸ’° Package:</strong> ${packageLabel}</div>
        <div><strong>ðŸ“ Location:</strong> ${company.location}</div>
      </div>
      <div class="tag-row">${formatSkills(company.skills)}</div>
      <div class="card-actions">
        <button type="button" class="btn" data-action="view-details" data-id="${company.id}">View Details</button>
        <button type="button" class="btn-secondary" data-action="apply" data-id="${company.id}" title="Mark as applied">
          ${applied ? 'âœ… Applied' : 'Apply'}
        </button>
        <button type="button" class="btn-secondary" data-action="bookmark" data-id="${company.id}" title="Save for later">
          ${bookmarked ? 'â­ Saved' : 'â˜† Save'}
        </button>
      </div>
    </article>
  `;
}

function renderCompanyDetails(company) {
  const container = document.getElementById('companyDetails');
  if (!container) return;
  const applied = isApplied(company.id);
  const bookmarked = isBookmarked(company.id);
  
  container.innerHTML = `
    <article class="company-card">
      <h2 style="color: var(--primary); margin-bottom: 0.5rem;">${company.name}</h2>
      <p style="color: var(--muted); font-size: 1.05rem; margin: 0 0 1.5rem;">${company.role}</p>
      
      <div class="detail-section">
        <h3>ðŸ“‹ Overview</h3>
        <p>${company.description}</p>
        <p style="margin-top: 1rem;">${company.aboutCompany}</p>
      </div>

      <div class="detail-section">
        <h3>ðŸ’¼ Position Details</h3>
        <div style="display: grid; gap: 0.75rem;">
          <div><strong>Role:</strong> ${company.role}</div>
          <div><strong>Location:</strong> ðŸ“ ${company.location}</div>
          <div><strong>Package:</strong> ðŸ’° ${company.package}</div>
          <div><strong>Details:</strong> ${company.packageDetails}</div>
        </div>
      </div>

      <div class="detail-section">
        <h3>ðŸŽ¯ Eligibility Criteria</h3>
        <div class="eligibility-item">${company.eligibility}</div>
      </div>

      <div class="detail-section">
        <h3>ðŸ“š Required Skills</h3>
        <div class="tag-row">${formatSkills(company.skills)}</div>
      </div>

      ${company.internshipAvailable ? `
      <div class="detail-section" style="padding: 1rem; background: var(--primary-soft); border-radius: 0.75rem;">
        <p style="margin: 0;"><strong style="color: var(--primary);">ðŸŽ“ Internship Available:</strong> Yes, with conversion opportunity</p>
      </div>
      ` : ''}

      <div class="card-actions" style="flex-wrap: nowrap; gap: 1rem; margin-top: 2rem;">
        <button type="button" class="btn" data-action="apply" data-id="${company.id}" style="flex: 1;">
          ${applied ? 'âœ… Already Applied' : 'ðŸ“ Apply Now'}
        </button>
        <button type="button" class="btn-secondary" data-action="bookmark" data-id="${company.id}" style="flex: 1;">
          ${bookmarked ? 'â­ Already Saved' : 'â˜† Save for Later'}
        </button>
      </div>
    </article>
  `;
}

function renderList(container, companies) {
  if (!container) return;
  if (companies.length === 0) {
    container.innerHTML = '<p style="color: var(--muted); text-align: center; padding: 2rem;">ðŸ” No companies found. Try adjusting your filters.</p>';
  } else {
    container.innerHTML = companies.map(renderCompanyCard).join('');
  }
}

function updateCounters(total) {
  const appliedCount = document.getElementById('appliedCount');
  const bookmarkCount = document.getElementById('bookmarkCount');
  const totalCompanies = document.getElementById('totalCompanies');
  const matchRate = document.getElementById('matchRate');
  
  const appliedIds = getAppliedIds().length;
  const bookmarkIds = getBookmarkIds().length;
  const profile = getUserProfile();
  const hasProfileSignal = getUserSkills().length > 0 || profile.cgpa || profile.preferredRole || (profile.locations || []).length > 0;

  if (appliedCount) appliedCount.textContent = appliedIds;
  if (bookmarkCount) bookmarkCount.textContent = bookmarkIds;
  if (totalCompanies) totalCompanies.textContent = total;
  if (matchRate) {
    if (!hasProfileSignal || total === 0) {
      matchRate.textContent = '0%';
    } else {
      loadCompanies().then((companies) => {
        const average = companies.length
          ? Math.round(companies.reduce((sum, company) => sum + calculateProfileMatch(company), 0) / companies.length)
          : 0;
        matchRate.textContent = average + '%';
      });
    }
  }
}

function updateDashboardCounters(totalCompanies) {
  const appliedIds = getAppliedIds();
  const bookmarkIds = getBookmarkIds();
  const profile = getUserProfile();
  const hasProfileSignal = getUserSkills().length > 0 || profile.cgpa || profile.preferredRole || (profile.locations || []).length > 0;
  
  const dashTotal = document.getElementById('dashTotalCompanies');
  const dashApplied = document.getElementById('dashAppliedCount');
  const dashBookmark = document.getElementById('dashBookmarkCount');
  const dashSuccess = document.getElementById('dashSuccessRate');
  const dashUnique = document.getElementById('uniqueCompanies');
  
  if (dashTotal) dashTotal.textContent = totalCompanies;
  if (dashApplied) dashApplied.textContent = appliedIds.length;
  if (dashBookmark) dashBookmark.textContent = bookmarkIds.length;
  if (dashSuccess) {
    if (!hasProfileSignal || totalCompanies === 0) {
      dashSuccess.textContent = '0%';
    } else {
      loadCompanies().then((companies) => {
        const average = companies.length
          ? Math.round(companies.reduce((sum, company) => sum + calculateProfileMatch(company), 0) / companies.length)
          : 0;
        dashSuccess.textContent = average + '%';
      });
    }
  }
  if (dashUnique) dashUnique.textContent = new Set([...appliedIds, ...bookmarkIds]).size;
}

// ==================== FILTER & SORT FUNCTIONS ====================
function getSearchFilters() {
  const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
  const skill = document.getElementById('skillFilter')?.value || 'all';
  const location = document.getElementById('locationFilter')?.value || 'all';
  const pack = document.getElementById('packageFilter')?.value || 'all';
  const sort = document.getElementById('sortFilter')?.value || 'recent';
  return { query, skill, location, pack, sort };
}

function populateOpportunityFilters(companies) {
  const skillFilter = document.getElementById('skillFilter');
  const locationFilter = document.getElementById('locationFilter');
  if (!skillFilter || !locationFilter || skillFilter.dataset.loaded === 'true') return;

  const selectedSkill = skillFilter.value;
  const selectedLocation = locationFilter.value;
  const skills = [...new Set(companies.flatMap(company => company.skills || []))].sort();
  const locations = [...new Set(companies.map(company => company.location).filter(Boolean))].sort();

  skillFilter.innerHTML = '<option value="all">All Skills</option>' +
    skills.map(skill => `<option value="${skill}">${skill}</option>`).join('');
  locationFilter.innerHTML = '<option value="all">All Locations</option>' +
    locations.map(location => `<option value="${location}">${location}</option>`).join('');

  skillFilter.value = skills.includes(selectedSkill) ? selectedSkill : 'all';
  locationFilter.value = locations.includes(selectedLocation) ? selectedLocation : 'all';
  skillFilter.dataset.loaded = 'true';
}

function filterCompanies(companies) {
  const { query, skill, location, pack, sort } = getSearchFilters();
  const userSkills = getUserSkills();

  let filtered = companies.filter((company) => {
    const matchesQuery =
      query === '' ||
      company.name.toLowerCase().includes(query) ||
      company.role.toLowerCase().includes(query) ||
      company.location.toLowerCase().includes(query) ||
      company.skills.some((skillText) => skillText.toLowerCase().includes(query));

    const matchesSkill = skill === 'all' || company.skills.includes(skill);
    const matchesLocation = location === 'all' || company.location === location;
    const matchesPackage = pack === 'all' || company.packageValue >= Number(pack);

    return matchesQuery && matchesSkill && matchesLocation && matchesPackage;
  });

  // Add match percentage to each company
  filtered = filtered.map(company => ({
    ...company,
    matchPercentage: calculateProfileMatch(company),
    matchLevel: getMatchLevel(calculateProfileMatch(company))
  }));

  // Sorting
  filtered.sort((a, b) => {
    switch (sort) {
      case 'package-high':
        return b.packageValue - a.packageValue;
      case 'package-low':
        return a.packageValue - b.packageValue;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'match-high':
        return b.matchPercentage - a.matchPercentage;
      case 'recent':
      default:
        if (!isNaN(Number(a.id)) && !isNaN(Number(b.id))) {
          return Number(b.id) - Number(a.id);
        }
        return String(b.id).localeCompare(String(a.id));
    }
  });

  return filtered;
}

// ==================== PAGE NAVIGATION ====================
function getCompanyIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return null;
  return isNaN(Number(id)) ? id : Number(id);
}

function openDetails(id) {
  window.location.href = `company.html?id=${id}`;
}

function handleApply(id) {
  toggleItem(STORAGE_KEYS.applied, id);
  renderCurrentPage();
}

function handleBookmark(id) {
  toggleItem(STORAGE_KEYS.bookmarks, id);
  renderCurrentPage();
}

// ==================== DATA EXPORT & IMPORT ====================
function exportData() {
  const data = {
    timestamp: new Date().toISOString(),
    applied: getAppliedIds(),
    bookmarks: getBookmarkIds(),
    stats: {
      totalApplications: getAppliedIds().length,
      totalBookmarks: getBookmarkIds().length,
    }
  };
  
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `placement-finder-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearAllData() {
  if (confirm('âš ï¸ Are you sure? This will delete all your applications and bookmarks.')) {
    localStorage.removeItem(STORAGE_KEYS.applied);
    localStorage.removeItem(STORAGE_KEYS.bookmarks);
    alert('âœ… All data cleared!');
    renderCurrentPage();
  }
}

// ==================== DASHBOARD RENDERING ====================
function renderDashboardLegacy(companies) {
  const appliedIds = getAppliedIds();
  const bookmarkIds = getBookmarkIds();
  const appliedList = document.getElementById('appliedList');
  const bookmarkList = document.getElementById('bookmarkList');

  const appliedCompanies = companies.filter((company) => appliedIds.includes(String(company.id)));
  const bookmarkedCompanies = companies.filter((company) => bookmarkIds.includes(String(company.id)));

  if (appliedList) {
    appliedList.innerHTML = appliedCompanies.length
      ? appliedCompanies.map(renderCompanyCard).join('')
      : '<p style="color: var(--muted); text-align: center; padding: 2rem;">No applications yet. Start applying! ðŸš€</p>';
  }

  if (bookmarkList) {
    bookmarkList.innerHTML = bookmarkedCompanies.length
      ? bookmarkedCompanies.map(renderCompanyCard).join('')
      : '<p style="color: var(--muted); text-align: center; padding: 2rem;">No bookmarks yet. Save companies to compare! ðŸ“</p>';
  }

  updateDashboardCounters(companies.length);
}

function renderDashboardEmptyState(type) {
  const isApplied = type === 'applied';
  return `
    <div class="empty-state">
      <h3>${isApplied ? 'No applications yet' : 'No saved companies yet'}</h3>
      <p>${isApplied
        ? 'Start applying to companies that match your profile and they will appear here.'
        : 'Save promising companies first, then compare them here before applying.'}</p>
      <a href="index.html" class="btn">${isApplied ? 'Explore Opportunities' : 'Browse Companies'}</a>
    </div>
  `;
}

function getProfileReadiness() {
  const profile = getUserProfile();
  const skills = getUserSkills();
  const checks = [
    { label: 'Basic details', complete: Boolean(profile.fullName && profile.email && profile.branch && profile.year) },
    { label: 'Academic score', complete: Boolean(profile.cgpa) },
    { label: 'Technical skills', complete: skills.length >= 3 },
    { label: 'Projects or internships', complete: Boolean(profile.projects || profile.internships) },
    { label: 'Job preferences', complete: Boolean(profile.preferredRole || Number(profile.minPackage) > 0 || (profile.locations || []).length > 0) },
    { label: 'Resume or profile links', complete: Boolean(profile.resumeLink || profile.linkedinLink || profile.githubLink) },
  ];
  const completed = checks.filter(item => item.complete).length;
  return {
    checks,
    score: Math.round((completed / checks.length) * 100),
  };
}

function renderProfileChecklist(readiness) {
  const container = document.getElementById('dashboardProfileChecklist');
  if (!container) return;

  container.innerHTML = readiness.checks.map(item => `
    <div class="checklist-item ${item.complete ? 'complete' : ''}">
      <span>${item.complete ? '&#10003;' : '&minus;'}</span>
      <p>${item.label}</p>
    </div>
  `).join('');
}

function renderDashboardPipeline(totalCompanies, appliedCount, bookmarkCount) {
  const container = document.getElementById('dashboardPipeline');
  const health = document.getElementById('dashboardPipelineHealth');
  if (!container) return;

  const untouched = Math.max(totalCompanies - appliedCount - bookmarkCount, 0);
  const stages = [
    { label: 'Available', value: totalCompanies, detail: 'Total listed roles' },
    { label: 'Shortlisted', value: bookmarkCount, detail: 'Saved for review' },
    { label: 'Applied', value: appliedCount, detail: 'Submitted or marked' },
    { label: 'To Explore', value: untouched, detail: 'Not reviewed yet' },
  ];

  container.innerHTML = stages.map(stage => `
    <div class="pipeline-card">
      <strong>${stage.value}</strong>
      <span>${stage.label}</span>
      <p>${stage.detail}</p>
    </div>
  `).join('');

  if (health) {
    const label = appliedCount >= 5 ? 'Active' : bookmarkCount >= 3 ? 'Reviewing' : 'New';
    health.textContent = label;
    health.className = `status-pill ${label.toLowerCase()}`;
  }
}

function renderDashboardActions(companies, appliedCount, bookmarkCount, readiness) {
  const container = document.getElementById('dashboardNextActions');
  if (!container) return;

  const actions = [];
  if (readiness.score < 80) {
    actions.push({
      title: 'Complete your profile',
      text: 'Add missing details so match scores become more accurate.',
      href: 'profile.html',
      label: 'Update profile',
    });
  }
  if (bookmarkCount < 3) {
    actions.push({
      title: 'Build a shortlist',
      text: 'Save at least three companies before deciding where to apply.',
      href: 'index.html',
      label: 'Find companies',
    });
  }
  if (appliedCount < 2 && companies.length > 0) {
    actions.push({
      title: 'Apply to strong matches',
      text: 'Start with the highest match scores and roles close to your preferences.',
      href: 'index.html',
      label: 'View matches',
    });
  }
  if (actions.length === 0) {
    actions.push({
      title: 'Keep momentum',
      text: 'Review new opportunities weekly and keep your saved list fresh.',
      href: 'index.html',
      label: 'Review list',
    });
  }

  container.innerHTML = actions.slice(0, 3).map(action => `
    <a class="action-item" href="${action.href}">
      <div>
        <strong>${action.title}</strong>
        <p>${action.text}</p>
      </div>
      <span>${action.label}</span>
    </a>
  `).join('');
}

function updateDashboardProgress(appliedCount, bookmarkCount) {
  const progressValue = document.getElementById('dashboardProgressValue');
  const progressTitle = document.getElementById('dashboardProgressTitle');
  const progressText = document.getElementById('dashboardProgressText');
  const progressBar = document.getElementById('dashboardProgressBar');
  const progressRing = document.querySelector('.progress-ring');
  const readiness = getProfileReadiness();
  const score = Math.min(100, Math.round((readiness.score * 0.65) + Math.min(bookmarkCount, 5) * 4 + Math.min(appliedCount, 5) * 3));

  if (progressValue) progressValue.textContent = `${score}%`;
  if (progressBar) progressBar.style.width = `${score}%`;
  if (progressRing) progressRing.style.setProperty('--progress', `${score}%`);

  if (progressTitle && progressText) {
    if (score >= 75) {
      progressTitle.textContent = 'Strong pipeline';
      progressText.textContent = 'Your profile and activity are in good shape. Keep applying to high-match roles.';
    } else if (score >= 40) {
      progressTitle.textContent = 'Building momentum';
      progressText.textContent = 'You have started well. Add more saved companies and applications to widen your options.';
    } else {
      progressTitle.textContent = 'Getting started';
      progressText.textContent = 'Complete your profile, save relevant companies, and begin applying.';
    }
  }

  renderProfileChecklist(readiness);
  return readiness;
}

function renderDashboardRecommendations(companies, appliedIds, bookmarkIds) {
  const container = document.getElementById('dashboardRecommendations');
  if (!container) return;

  const hiddenIds = new Set([...appliedIds, ...bookmarkIds].map(String));
  const recommendations = companies
    .filter(company => !hiddenIds.has(String(company.id)))
    .map(company => ({
      ...company,
      matchPercentage: calculateProfileMatch(company),
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage || b.packageValue - a.packageValue)
    .slice(0, 4);

  container.innerHTML = recommendations.length
    ? recommendations.map(company => `
      <a class="recommendation-item" href="company.html?id=${company.id}">
        <strong>${company.name}</strong>
        <span class="recommendation-meta">${company.role}</span>
        <span class="recommendation-meta">${company.matchPercentage}% match &middot; ${company.package || `${company.packageValue} LPA`} &middot; ${company.location}</span>
      </a>
    `).join('')
    : '<div class="empty-state"><h3>All caught up</h3><p>You have already saved or applied to every listed company.</p></div>';
}

function renderDashboard(companies) {
  const appliedIds = getAppliedIds();
  const bookmarkIds = getBookmarkIds();
  const appliedList = document.getElementById('appliedList');
  const bookmarkList = document.getElementById('bookmarkList');

  const appliedCompanies = companies.filter((company) => appliedIds.includes(String(company.id)));
  const bookmarkedCompanies = companies.filter((company) => bookmarkIds.includes(String(company.id)));

  if (appliedList) {
    appliedList.innerHTML = appliedCompanies.length
      ? appliedCompanies.map(renderCompanyCard).join('')
      : renderDashboardEmptyState('applied');
  }

  if (bookmarkList) {
    bookmarkList.innerHTML = bookmarkedCompanies.length
      ? bookmarkedCompanies.map(renderCompanyCard).join('')
      : renderDashboardEmptyState('bookmarked');
  }

  const readiness = updateDashboardProgress(appliedCompanies.length, bookmarkedCompanies.length);
  renderDashboardPipeline(companies.length, appliedCompanies.length, bookmarkedCompanies.length);
  renderDashboardActions(companies, appliedCompanies.length, bookmarkedCompanies.length, readiness);
  renderDashboardRecommendations(companies, appliedIds, bookmarkIds);
  updateDashboardCounters(companies.length);
}

// ==================== DATA LOADING ====================
function normalizeCompanies(companies) {
  return companies.map(company => ({
    ...company,
    id: company.id ?? company._id ?? company.companyId,
  }));
}

function mergeCompanySources(primaryCompanies, fallbackCompanies) {
  const merged = [...normalizeCompanies(primaryCompanies)];
  const seen = new Set(merged.map(company => String(company.name || company.id).toLowerCase()));

  normalizeCompanies(fallbackCompanies).forEach((company) => {
    const key = String(company.name || company.id).toLowerCase();
    if (!seen.has(key)) {
      merged.push(company);
      seen.add(key);
    }
  });

  return merged;
}

function loadCompanies() {
  // Try local JSON first
  return fetch('https://placement-backend-jkka.onrender.com/companies')
    .then((response) => {
      if (response.ok) {
        return response.json().then(normalizeCompanies);
      }
      // If local JSON fails, use default companies
      return normalizeCompanies(defaultCompanies);
    })
    .catch(() => {
      // If local JSON fails, try backend API
      return fetch('http://localhost:5000/api/companies')
        .then((response) => {
          if (response.ok) {
            return response.json().then((companies) => mergeCompanySources(defaultCompanies, companies));
          }
          // If API also fails, use default companies
          return normalizeCompanies(defaultCompanies);
        })
        .catch(() => normalizeCompanies(defaultCompanies));
    });
}

// ==================== PAGE RENDERING ====================
function renderCurrentPage() {
  loadCompanies().then((companies) => {
    const companyGrid = document.getElementById('companyGrid');
    const companyDetails = document.getElementById('companyDetails');
    const appliedList = document.getElementById('appliedList');
    const dashboardPipeline = document.getElementById('dashboardPipeline');
    const dashboardNextActions = document.getElementById('dashboardNextActions');
    const dashboardRecommendations = document.getElementById('dashboardRecommendations');

    if (companyGrid) {
      populateOpportunityFilters(companies);
      const filtered = filterCompanies(companies);
      renderList(companyGrid, filtered);
      updateCounters(filtered.length);
      
      // Show/hide clear filters button
      const clearBtn = document.getElementById('clearFilters');
      if (clearBtn) {
        clearBtn.style.display = filtered.length < companies.length ? 'block' : 'none';
      }
    }

    if (companyDetails) {
      const companyId = getCompanyIdFromUrl();
      const company = companies.find((item) => String(item.id) === String(companyId));
      if (company) {
        renderCompanyDetails(company);
      } else {
        companyDetails.innerHTML = '<p style="color: var(--muted); text-align: center;">âŒ Company not found. <a href="index.html">Go back to home</a></p>';
      }
    }

    if (appliedList || dashboardPipeline || dashboardNextActions || dashboardRecommendations) {
      renderDashboard(companies);
    }
  });
}

// ==================== THEME TOGGLE ====================
function setupThemeToggle() {
  const button = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'light';
  
  // Apply initial theme
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  
  if (button) {
    button.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    
    // Remove any existing listeners to prevent duplicates
    button.replaceWith(button.cloneNode(true));
    const newButton = document.getElementById('themeToggle');
    
    newButton.addEventListener('click', function() {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem(STORAGE_KEYS.theme, isDark ? 'dark' : 'light');
      newButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
}

// ==================== SEARCH & FILTER LISTENERS ====================
function setupSearchListeners() {
  const searchInput = document.getElementById('searchInput');
  const skillFilter = document.getElementById('skillFilter');
  const locationFilter = document.getElementById('locationFilter');
  const packageFilter = document.getElementById('packageFilter');
  const sortFilter = document.getElementById('sortFilter');
  const clearFilters = document.getElementById('clearFilters');

  [searchInput, skillFilter, locationFilter, packageFilter, sortFilter].forEach((element) => {
    if (element) {
      element.addEventListener('input', renderCurrentPage);
      element.addEventListener('change', renderCurrentPage);
    }
  });

  if (clearFilters) {
    clearFilters.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (skillFilter) skillFilter.value = 'all';
      if (locationFilter) locationFilter.value = 'all';
      if (packageFilter) packageFilter.value = 'all';
      if (sortFilter) sortFilter.value = 'recent';
      renderCurrentPage();
    });
  }
}

function setupCompanyActions() {
  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const action = button.dataset.action;
    const id = button.dataset.id;
    if (!id) return;

    if (action === 'view-details') {
      openDetails(id);
      return;
    }

    if (action === 'apply') {
      handleApply(id);
      return;
    }

    if (action === 'bookmark') {
      handleBookmark(id);
      return;
    }
  });
}

// ==================== BACK TO TOP BUTTON ====================
function setupBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 300);
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupNavLinks() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const linkPage = href.split('#')[0].split('/').pop() || 'index.html';
    const isSamePage = currentPage === linkPage || (currentPage === '' && linkPage === 'index.html');

    link.addEventListener('click', (event) => {
      // Smoothly scroll when navigating to an anchor on the same page
      if (href.startsWith('#') && isSamePage) {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // Prevent page reload when clicking the current page tab
      if (!href.includes('#') && isSamePage) {
        event.preventDefault();
      }

      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

function highlightActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const linkPage = href.split('#')[0].split('/').pop() || 'index.html';

    if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ==================== CHATBOT FUNCTIONALITY ====================
let companiesData = [];
let chatbotVisible = false;

function setupChatbot() {
  const toggleBtn = document.getElementById('chatbotToggle');
  const closeBtn = document.getElementById('chatbotClose');
  const chatbot = document.getElementById('chatbot');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');

  if (!toggleBtn || !chatbot) {
    return;
  }

  // Load companies data for chatbot
  loadCompanies().then(companies => {
    companiesData = companies;
  });

  // Remove any existing listeners to prevent duplicates
  const newToggleBtn = toggleBtn.cloneNode(true);
  toggleBtn.parentNode.replaceChild(newToggleBtn, toggleBtn);

  // Toggle chatbot visibility
  newToggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    chatbotVisible = !chatbotVisible;
    chatbot.classList.toggle('show', chatbotVisible);
    if (chatbotVisible && input) {
      setTimeout(() => input.focus(), 100);
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatbotVisible = false;
      chatbot.classList.remove('show');
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      sendMessage();
    });
  }

  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
}

function sendMessage() {
  const input = document.getElementById('chatbotInput');
  const message = input.value.trim();
  
  if (!message) return;

  // Add user message
  addMessage(message, 'user');
  input.value = '';

  // Show typing indicator
  showTypingIndicator();

  // Generate response after a short delay
  setTimeout(() => {
    hideTypingIndicator();
    const response = generateResponse(message);
    addMessage(response, 'bot');
  }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

function addMessage(content, type) {
  const messagesContainer = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}-message`;
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${type === 'bot' ? 'ðŸ¤–' : 'ðŸ‘¤'}</div>
    <div class="message-content">${content}</div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById('chatbotMessages');
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator';
  indicator.id = 'typingIndicator';
  
  indicator.innerHTML = `
    <div class="message-avatar">ðŸ¤–</div>
    <div class="message-content">
      <div class="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  
  messagesContainer.appendChild(indicator);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) {
    indicator.remove();
  }
}

function generateResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Company-specific queries
  for (const company of companiesData) {
    if (lowerMessage.includes(company.name.toLowerCase())) {
      if (lowerMessage.includes('package') || lowerMessage.includes('salary') || lowerMessage.includes('pay')) {
        return `ðŸ’° <strong>${company.name}</strong> offers a package of <strong>${company.package}</strong>. ${company.packageDetails}`;
      }
      if (lowerMessage.includes('skill') || lowerMessage.includes('requirement') || lowerMessage.includes('need')) {
        return `ðŸŽ¯ For <strong>${company.name}</strong>, you need these skills: ${company.skills.join(', ')}. ${company.eligibility}`;
      }
      if (lowerMessage.includes('location') || lowerMessage.includes('place')) {
        return `ðŸ“ <strong>${company.name}</strong> is hiring in <strong>${company.location}</strong>.`;
      }
      if (lowerMessage.includes('role') || lowerMessage.includes('position')) {
        return `ðŸ’¼ <strong>${company.name}</strong> is hiring for <strong>${company.role}</strong>.`;
      }
      if (lowerMessage.includes('internship') || lowerMessage.includes('intern')) {
        const internText = company.internshipAvailable ? 
          `Yes, <strong>${company.name}</strong> offers internship opportunities with potential conversion to full-time!` :
          `<strong>${company.name}</strong> currently focuses on full-time positions.`;
        return `ðŸŽ“ ${internText}`;
      }
      // General company info
      return `ðŸ¢ <strong>${company.name}</strong> is hiring for <strong>${company.role}</strong> with a package of <strong>${company.package}</strong> in <strong>${company.location}</strong>. Required skills: ${company.skills.join(', ')}. ${company.eligibility}`;
    }
  }

  // Skill-based queries
  const skills = [...new Set(companiesData.flatMap(company => company.skills || []))]
    .map(skill => skill.toLowerCase());
  for (const skill of skills) {
    if (lowerMessage.includes(skill)) {
      const matchingCompanies = companiesData.filter(c => 
        c.skills.some(s => s.toLowerCase().includes(skill))
      );
      if (matchingCompanies.length > 0) {
        const companyNames = matchingCompanies.slice(0, 3).map(c => c.name).join(', ');
        return `ðŸŽ¯ Companies looking for <strong>${skill}</strong>: ${companyNames}${matchingCompanies.length > 3 ? ' and more' : ''}. Check them out on the main page!`;
      }
    }
  }

  // Location-based queries
  const locations = [...new Set(companiesData.map(company => company.location).filter(Boolean))]
    .map(location => location.toLowerCase());
  for (const location of locations) {
    if (lowerMessage.includes(location)) {
      const matchingCompanies = companiesData.filter(c => 
        c.location.toLowerCase().includes(location)
      );
      if (matchingCompanies.length > 0) {
        return `ðŸ“ Companies hiring in <strong>${location}</strong>: ${matchingCompanies.map(c => c.name).join(', ')}.`;
      }
    }
  }

  // Package-based queries
  if (lowerMessage.includes('highest') || lowerMessage.includes('best') || lowerMessage.includes('top')) {
    const topCompanies = [...companiesData].sort((a, b) => b.packageValue - a.packageValue).slice(0, 3);
    return `ðŸ’° Top packages: ${topCompanies.map(c => `${c.name} (${c.package})`).join(', ')}.`;
  }

  // General queries
  if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
    return `ðŸ¤– I can help you with:<br>â€¢ Company information and requirements<br>â€¢ Skill matching for specific technologies<br>â€¢ Package details and eligibility criteria<br>â€¢ Location-based company searches<br>â€¢ Application tips and advice<br><br>Try asking: "Tell me about TCS" or "Which companies need Python?"`;
  }

  if (lowerMessage.includes('how many') || lowerMessage.includes('companies')) {
    return `ðŸ“Š We have <strong>${companiesData.length}</strong> companies in our database across various locations and packages.`;
  }

  if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || lowerMessage.includes('prepare')) {
    return `ðŸ’¡ <strong>Placement Tips:</strong><br>â€¢ Focus on core programming skills and DSA<br>â€¢ Practice coding on platforms like LeetCode, HackerRank<br>â€¢ Prepare for technical interviews and aptitude tests<br>â€¢ Build projects to showcase your skills<br>â€¢ Network and learn about company cultures<br>â€¢ Maintain good academic records`;
  }

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `ðŸ‘‹ Hello! I'm your Placement Assistant. How can I help you with your job search today?`;
  }

  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return `ðŸ™‚ You're welcome! Feel free to ask me anything about placements. Good luck with your applications!`;
  }

  // Default response
  return `ðŸ¤” I'm not sure about that. Try asking about specific companies, skills, locations, or packages. For example: "Tell me about Google" or "Which companies need Java?"`;
}

// ==================== PAGE INITIALIZATION ====================
function initPage() {
  setupThemeToggle();
  setupSearchListeners();
  setupBackToTop();
  setupChatbot();
  setupSkillsManagement();
  setupCompanyActions();
  setupNavLinks();
  highlightActiveNavLink();
  loadCompanies().then(companies => {
    renderCurrentPage();
  });
}

// Call init on DOMContentLoaded or if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const Company = require('./models/Company');
const companiesSeedData = require('../data/companies.json');

// Load environment variables from the backend directory
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Default companies data
const defaultCompanies = companiesSeedData.length ? companiesSeedData : [
  {
    name: 'TCS',
    role: 'Software Engineer Trainee',
    package: '3.5 LPA',
    packageValue: 3.5,
    skills: ['Java', 'SQL', 'DSA'],
    eligibility: 'Minimum 60% in 10th, 12th and graduation',
    location: 'Bangalore',
    description: 'A large IT services company hiring freshers for software development roles.',
    aboutCompany: 'Tata Consultancy Services (TCS) is the world\'s most trusted IT services brand and a leading global IT consulting company with 25+ years of experience.',
    packageDetails: 'Base: 3.5 LPA, Medical & Life Insurance included',
    internshipAvailable: true,
  },
  {
    name: 'Infosys',
    role: 'System Engineer',
    package: '4 LPA',
    packageValue: 4,
    skills: ['Python', 'DBMS', 'Java'],
    eligibility: '65% overall and no active backlogs',
    location: 'Pune',
    description: 'Campus recruitment drive for system engineer with training and project experience.',
    aboutCompany: 'Infosys is an IT and management consulting company providing services to corporations across the world.',
    packageDetails: 'Base: 4 LPA, Performance bonus, Relocation assistance',
    internshipAvailable: true,
  },
  {
    name: 'Wipro',
    role: 'Software Developer',
    package: '3.8 LPA',
    packageValue: 3.8,
    skills: ['C++', 'Data Structures', 'Aptitude'],
    eligibility: '60% in all academics and good problem solving skills',
    location: 'Hyderabad',
    description: 'Freshers hiring for development teams with focus on coding and communication.',
    aboutCompany: 'Wipro is a leading global IT services and management consulting company.',
    packageDetails: 'Base: 3.8 LPA, Stock options, Housing assistance',
    internshipAvailable: true,
  },
  {
    name: 'Cognizant',
    role: 'Associate Software Engineer',
    package: '4.2 LPA',
    packageValue: 4.2,
    skills: ['JavaScript', 'React', 'SQL'],
    eligibility: 'Minimum 65% in academics, no backlogs',
    location: 'Chennai',
    description: 'A role for front-end and full-stack training in agile product teams.',
    aboutCompany: 'Cognizant is a multinational IT services and management consulting company.',
    packageDetails: 'Base: 4.2 LPA, Bonus, Learning benefits',
    internshipAvailable: false,
  },
  {
    name: 'Accenture',
    role: 'Application Development Analyst',
    package: '5.5 LPA',
    packageValue: 5.5,
    skills: ['Java', 'Cloud', 'Aptitude'],
    eligibility: '65% in academics with strong communication skills',
    location: 'Mumbai',
    description: 'Consulting and technology solutions role with client-facing exposure.',
    aboutCompany: 'Accenture is a multinational professional services company and leading digital transformation advisor.',
    packageDetails: 'Base: 5.5 LPA, Sign-on bonus, International opportunities',
    internshipAvailable: true,
  },
  {
    name: 'Tech Mahindra',
    role: 'Junior Developer',
    package: '3.6 LPA',
    packageValue: 3.6,
    skills: ['Python', 'Machine Learning', 'SQL'],
    eligibility: '60% in academics, preferred internship experience',
    location: 'Noida',
    description: 'Hiring freshers in engineering and analytics projects for digital transformation.',
    aboutCompany: 'Tech Mahindra is a multinational IT services and business process outsourcing company.',
    packageDetails: 'Base: 3.6 LPA, Performance incentives, Training provided',
    internshipAvailable: true,
  },
  {
    name: 'Capgemini',
    role: 'Associate Engineer',
    package: '4 LPA',
    packageValue: 4,
    skills: ['Java', 'Aptitude', 'Communication'],
    eligibility: 'No active backlog and 60%+ academic score',
    location: 'Hyderabad',
    description: 'Role with training and project allocation in software development teams.',
    aboutCompany: 'Capgemini is a global leader in consulting, technology services and digital transformation.',
    packageDetails: 'Base: 4 LPA, Benefits package, Career development',
    internshipAvailable: true,
  },
  {
    name: 'Google',
    role: 'Software Engineering Intern → Full-Time',
    package: '8 LPA (converted)',
    packageValue: 8,
    skills: ['C++', 'Algorithms', 'System Design'],
    eligibility: 'Strong coding skills and excellent academic record',
    location: 'Bangalore',
    description: 'Highly competitive internship with mentorship from world-class engineers.',
    aboutCompany: 'Google is a multinational technology company specializing in Internet-related services and products.',
    packageDetails: 'Intern: 1.8L/month, Conversion to 8 LPA, Stock options',
    internshipAvailable: true,
  },
  {
    name: 'Microsoft',
    role: 'Software Engineering Intern → Full-Time',
    package: '7.5 LPA (converted)',
    packageValue: 7.5,
    skills: ['C#', 'Data Structures', 'Problem Solving'],
    eligibility: 'Strong academic performance and coding aptitude',
    location: 'Hyderabad',
    description: 'Premium internship opportunity with cutting-edge projects and learning.',
    aboutCompany: 'Microsoft is a multinational technology company known for software, computers, and cloud services.',
    packageDetails: 'Intern: 1.7L/month, Full-time: 7.5 LPA, Free housing',
    internshipAvailable: true,
  },
  {
    name: 'Zomato',
    role: 'Junior Software Engineer',
    package: '5 LPA',
    packageValue: 5,
    skills: ['React', 'Node.js', 'SQL'],
    eligibility: '60%+ in academics and strong javascript knowledge',
    location: 'Bangalore',
    description: 'Product engineering role in a fast-growing foodtech startup environment.',
    aboutCompany: 'Zomato is an Indian online food delivery company operating in India and internationally.',
    packageDetails: 'Base: 5 LPA, Equity, Flexible work environment',
    internshipAvailable: false,
  },
  {
    name: 'Swiggy',
    role: 'Software Engineer',
    package: '5.2 LPA',
    packageValue: 5.2,
    skills: ['Python', 'Data Structures', 'APIs'],
    eligibility: '60%+ academics and problem-solving mindset',
    location: 'Bangalore',
    description: 'Software engineering position in logistics and delivery product teams.',
    aboutCompany: 'Swiggy is an Indian online food ordering and real-time delivery platform.',
    packageDetails: 'Base: 5.2 LPA, ESOPs, Health insurance',
    internshipAvailable: false,
  },
  {
    name: 'IBM',
    role: 'Developer Apprentice',
    package: '4.5 LPA',
    packageValue: 4.5,
    skills: ['Java', 'Cloud', 'Aptitude'],
    eligibility: '60%+ academics and basic programming knowledge',
    location: 'Pune',
    description: 'Apprentice role for learning enterprise software development and cloud skills.',
    aboutCompany: 'IBM is an American multinational technology and consulting corporation.',
    packageDetails: 'Base: 4.5 LPA, Training program, Certification support',
    internshipAvailable: true,
  }
];

// Seed database with default companies
async function seedDatabase() {
  try {
    const count = await Company.countDocuments();
    if (count === 0) {
      await Company.insertMany(defaultCompanies);
      console.log('Database seeded with default companies');
    } else {
      const operations = defaultCompanies.map((company) => ({
        updateOne: {
          filter: { name: company.name },
          update: { $setOnInsert: company },
          upsert: true,
        },
      }));

      if (operations.length > 0) {
        await Company.bulkWrite(operations);
      }
      console.log('Database checked for missing default companies');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Connect to MongoDB
connectDB().then(() => {
  seedDatabase();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/companies', require('./routes/companyRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'CareerLaunch API is running.' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

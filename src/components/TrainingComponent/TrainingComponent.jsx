import React, { useState, useEffect } from "react";
import TrainingCard from "./TrainingCard";
import TrainingDetails from "./TrainingDetails";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import "./TrainingComponent.css";

const TrainingComponent = () => {
  const [trainings, setTrainings] = useState([]);
  const [filteredTrainings, setFilteredTrainings] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Categories for filtering
  const categories = [
    "All",
    "Cloud",
    "Development",
    "Data",
    "Enterprise",
    "Mobile",
  ];

  // Training data
  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      const trainingData = [
        {
          id: 1,
          title: "SAP Functional",
          category: "Enterprise",
          description:
            "Master SAP modules including Financial Accounting, Materials Management, and Sales & Distribution. Learn to configure and implement SAP solutions for enterprise needs.",
          duration: "12 weeks",
          level: "Intermediate",
          image:
            "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: true,
        },
        {
          id: 2,
          title: "Oracle Apps / Oracle Developer",
          category: "Enterprise",
          description:
            "Comprehensive training on Oracle E-Business Suite applications and PL/SQL development. Create efficient database solutions and implement Oracle business applications.",
          duration: "10 weeks",
          level: "Advanced",
          image:
            "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: false,
        },
        {
          id: 3,
          title: "AWS Cloud Engineer",
          category: "Cloud",
          description:
            "Learn to design, deploy, and manage applications on AWS. Master key services like EC2, S3, RDS, Lambda, and implement best practices for cloud architecture.",
          duration: "8 weeks",
          level: "Intermediate",
          image:
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: true,
        },
        {
          id: 4,
          title: "iOS / Android Developer",
          category: "Mobile",
          description:
            "Build native mobile applications for iOS and Android platforms. Learn Swift, Kotlin, and essential mobile development patterns for creating engaging user experiences.",
          duration: "14 weeks",
          level: "Intermediate to Advanced",
          image:
            "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: true,
        },
        {
          id: 5,
          title: "Hadoop Application Developer",
          category: "Data",
          description:
            "Master big data processing with Hadoop ecosystem. Learn MapReduce, HDFS, Hive, Pig, and develop scalable data processing applications.",
          duration: "9 weeks",
          level: "Advanced",
          image:
            "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: false,
        },
        {
          id: 6,
          title: "Salesforce Admin & Developer",
          category: "Enterprise",
          description:
            "Become proficient in configuring and customizing Salesforce CRM. Learn Apex programming, Lightning components, and implement business solutions on the Salesforce platform.",
          duration: "11 weeks",
          level: "Beginner to Intermediate",
          image:
            "https://images.pexels.com/photos/1181294/pexels-photo-1181294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: true,
        },
        {
          id: 7,
          title: "Data Analyst",
          category: "Data",
          description:
            "Learn to collect, process, and analyze data to drive business decisions. Master tools like SQL, Excel, Power BI, and statistical analysis techniques.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          image:
            "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: true,
        },
        {
          id: 8,
          title: "DevOps & AWS",
          category: "Cloud",
          description:
            "Master DevOps practices and tools alongside AWS services. Learn CI/CD, infrastructure as code, containerization, and cloud deployment strategies.",
          duration: "10 weeks",
          level: "Intermediate to Advanced",
          image:
            "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          popular: false,
        },
      ];
      setTrainings(trainingData);
      setFilteredTrainings(trainingData);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Handle search functionality
  useEffect(() => {
    let results = trainings;

    // Apply search filter
    if (searchQuery) {
      results = results.filter(
        (training) =>
          training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          training.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== "All") {
      results = results.filter(
        (training) => training.category === activeCategory
      );
    }

    setFilteredTrainings(results);
  }, [searchQuery, activeCategory, trainings]);

  const handleTrainingSelect = (training) => {
    setSelectedTraining(training);
  };

  const handleBackToList = () => {
    setSelectedTraining(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="training-component">
      <header className="training-header">
        <h1>Professional Training Programs</h1>
        <p>
          Advance your career with our industry-recognized certification courses
        </p>
      </header>

      {selectedTraining ? (
        <TrainingDetails
          training={selectedTraining}
          onBack={handleBackToList}
        />
      ) : (
        <>
          <div className="training-filters">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading training programs...</p>
            </div>
          ) : (
            <>
              {filteredTrainings.length > 0 ? (
                <div className="training-grid">
                  {filteredTrainings.map((training) => (
                    <TrainingCard
                      key={training.id}
                      training={training}
                      onClick={() => handleTrainingSelect(training)}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <h3>No training programs found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button
                    className="reset-button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TrainingComponent;

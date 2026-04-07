import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Intern</h4>
                <h5>PrepInsta, Remote</h5>
              </div>
              <h3>Jun 2024 – Aug 2024</h3>
            </div>
            <p>
              Cleaned, transformed, and analyzed datasets using SQL, Python, and Excel to support business reporting and exploratory analysis. Built interactive Power BI dashboards for KPI tracking, improving reporting efficiency and accuracy by ~30–40%. Translated business requirements into structured queries and metrics for consistent reporting. Automated recurring analysis workflows, reducing manual effort and improving data reliability. Documented data logic and reporting standards for reproducibility and team usage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Supervisor (Freelance)</h4>
                <h5>Frozen Seafood Company, Odisha</h5>
              </div>
              <h3>Mar 2025 – Sep 2025</h3>
            </div>
            <p>
              Managed daily operations, MIS reporting, and inventory tracking using Excel and Google Sheets. Led a team of 10 members while maintaining 100% on-time delivery performance. Improved operational visibility through structured reporting, reducing bottlenecks by ~25%. Implemented basic data tracking systems to support capacity planning and decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Balasore College of Engineering & Technology</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>
            <p>
              Graduating with a Focus on Information Technology. SGPA: 7.69/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Professional Development</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              IBM Data Analytics Professional Certificate (Coursera)<br/>
              PrepInsta Data Analytics Internship (Certificate + LoR)<br/>
              Google Cloud Skill Badge – CI/CD Pipelines<br/>
              Participant – Google Cloud AI Labs, IIT Bhubaneswar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

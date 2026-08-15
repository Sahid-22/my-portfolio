import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {([
            {
              name: "Dubai Real Estate Intelligence",
              category: "Analytics & Dashboarding",
              tools: "Power BI, DAX, Power Query, Data Modeling",
              image: "/images/Dubai Real Estate Intelligence.png",
              link: "https://github.com/Sahid-22/Dubai-Real-Estate-Intelligence-Dashboard",
            },
            {
              name: "Strava Fitness Analytics",
              category: "End-to-End Analytics",
              tools: "Excel, SQL, Python, Power BI, MySQL",
              image: "/images/Strava Fitness Analytics.png",
              link: "https://github.com/Sahid-22/strava-fitness-analytics",
            },
            {
              name: "Bird Species Observation",
              category: "Ecology Data Analysis",
              tools: "Python, SQL, Power BI, Excel",
              image: "/images/Bird Species Observation Analysis.png",
              link: "https://github.com/Sahid-22/Bird-Species-Observation-Analysis",
            },
            {
              name: "Real Estate Investment Advisor",
              category: "Machine Learning & Analytics",
              tools: "Python, Scikit-learn, Streamlit, MySQL",
              image: "/images/Real Estate Investment Advisor.jpg",
              link: "https://github.com/Sahid-22/Real-Estate-Investment-Advisor-Project",
            },
            {
              name: "Cricbuzz LiveStats",
              category: "Real-Time Data Pipeline",
              tools: "Python, Streamlit, MySQL, RapidAPI",
              image: "/images/Cricbuzz LiveStats.jpg",
              link: "https://github.com/Sahid-22/Cricbuzz_LiveStats",
            },
            {
              name: "SportRadar Tennis Analytics",
              category: "Sports Data Analytics",
              tools: "Python, Streamlit, MySQL, SportRadar API",
              image: "/images/SportRadar Tennis Analytics.jpg",
              link: "https://tennis-analytics-jnnzryvyzeibcwvyezxaqq.streamlit.app/",
            },
          ] as { name: string; category: string; tools: string; image: string; link?: string }[]).map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

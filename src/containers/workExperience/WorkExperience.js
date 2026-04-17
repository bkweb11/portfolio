import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade, Zoom} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) return null;

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className={isDark ? "dark-mode experience-heading" : "experience-heading"}>
              Experiences
            </h1>
            <p className={isDark ? "dark-mode experience-subheading" : "experience-subheading"}>
              MY PROFESSIONAL JOURNEY
            </p>

            {/* Timeline wrapper */}
            <div className="exp-timeline">
              <div className={`exp-timeline-line ${isDark ? "exp-timeline-line-dark" : ""}`} />

              {workExperiences.experience.map((card, i) => (
                <Zoom key={i} duration={600} delay={i * 120}>
                  <div className="exp-timeline-item">
                    {/* Timeline dot */}
                    <div className={`exp-timeline-dot ${isDark ? "exp-dot-dark" : ""}`}>
                      <div className="exp-dot-inner" />
                    </div>
                    <div className="exp-timeline-card">
                      <ExperienceCard
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          companyUrl: card.companyUrl,
                          desc: card.desc,
                          date: card.date,
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

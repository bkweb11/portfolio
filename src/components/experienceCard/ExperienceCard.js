import React, {useState} from "react";
import "./ExperienceCard.scss";

const roleIcons = {
  "Sr. Development Manager": "🏆",
  "Full Stack Developer": "💻",
  "PHP Developer": "🐘",
  "Intern": "🌱"
};

export default function ExperienceCard({cardInfo, isDark}) {
  const [expanded, setExpanded] = useState(false);
  const icon = roleIcons[cardInfo.role] || "🚀";

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="exp-bullet">
            <span className="exp-bullet-dot">▸</span> {item}
          </li>
        ))
      : null;
  };

  return (
    <div
      className={`exp-card ${isDark ? "exp-card-dark" : "exp-card-light"}`}
      onClick={() => setExpanded(e => !e)}
    >
      {/* Animated blobs */}
      <div className="exp-blob exp-blob-1" />
      <div className="exp-blob exp-blob-2" />

      {/* Top banner */}
      <div className="exp-banner">
        <div className="exp-icon-wrap">
          <span className="exp-icon">{icon}</span>
        </div>
        <div className="exp-banner-text">
          <h5 className="exp-company">
            {cardInfo.companyUrl ? (
              <a
                href={cardInfo.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-company-link"
                onClick={e => e.stopPropagation()}
              >
                {cardInfo.company} ↗
              </a>
            ) : (
              cardInfo.company
            )}
          </h5>
          <span className="exp-date-badge">{cardInfo.date}</span>
        </div>
        <span className={`exp-toggle ${expanded ? "exp-toggle-open" : ""}`}>
          ›
        </span>
      </div>

      {/* Role */}
      <div className="exp-role-row">
        <span className="exp-role-badge">{cardInfo.role}</span>
      </div>

      {/* Description */}
      <p className={`exp-desc ${isDark ? "exp-desc-dark" : ""}`}>
        {cardInfo.desc}
      </p>

      {/* Bullets — expand on click */}
      {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
        <div className={`exp-bullets-wrap ${expanded ? "exp-bullets-open" : ""}`}>
          <ul className="exp-bullets">
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        </div>
      )}

      {/* Corner accent */}
      <div className="exp-corner" />
    </div>
  );
}

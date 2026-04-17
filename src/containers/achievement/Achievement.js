import React, {useContext} from "react";
import "./Achievement.scss";
import {achievementSection} from "../../portfolio";
import {Fade, Zoom} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Icon + gradient per card title
const cardMeta = {
  "Languages & Frameworks": {icon: "💻", gradient: "ach-grad-blue"},
  "Databases":              {icon: "🗄️", gradient: "ach-grad-teal"},
  "AI & Machine Learning":  {icon: "🤖", gradient: "ach-grad-ai"},
  "CMS & Platforms":        {icon: "🌐", gradient: "ach-grad-orange"},
  "Server & DevOps":        {icon: "🖥️", gradient: "ach-grad-dark"},
  "Mobile & Desktop Apps":  {icon: "📱", gradient: "ach-grad-purple"}
};

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className={isDark ? "dark-mode heading achievement-heading" : "heading achievement-heading"}>
              {achievementSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle achievement-subtitle" : "subTitle achievement-subtitle"}>
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="ach-cards-grid">
            {achievementSection.achievementsCards.map((card, i) => {
              const meta = cardMeta[card.title] || {icon: "🏆", gradient: "ach-grad-blue"};
              return (
                <Zoom key={i} duration={600} delay={i * 90}>
                  <div className={`ach-card ${meta.gradient} ${isDark ? "ach-card-dark" : ""}`}>
                    {/* Animated blobs */}
                    <div className="ach-blob ach-blob-1" />
                    <div className="ach-blob ach-blob-2" />

                    {/* Icon */}
                    <div className="ach-icon-wrap">
                      <span className="ach-icon">{meta.icon}</span>
                    </div>

                    {/* Text */}
                    <h5 className="ach-title">{card.title}</h5>
                    <p className="ach-subtitle">{card.subtitle}</p>

                    {/* Skill chips */}
                    <div className="ach-chips">
                      {card.subtitle
                        .split(/,\s*/)
                        .map((chip, ci) => (
                          <span key={ci} className="ach-chip">{chip.trim()}</span>
                        ))}
                    </div>

                    {/* Corner accent */}
                    <div className="ach-corner" />
                  </div>
                </Zoom>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade, Zoom} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Map project names to emoji icons & gradient themes
const projectMeta = {
  Computeroids: {icon: "🖥️", gradient: "grad-blue", tags: ["News", "Tech", "Web"]},
  Insaaf99: {icon: "⚖️", gradient: "grad-purple", tags: ["Legal", "WebRTC", "Video"]},
  "Wallex Appliances": {icon: "🏠", gradient: "grad-orange", tags: ["E-Commerce", "Retail"]},
  "Sapphire Softech": {icon: "💎", gradient: "grad-teal", tags: ["SaaS", "CRM", "Web"]},
  "iMeet – Chat & Video Platform": {icon: "💬", gradient: "grad-green", tags: ["WebRTC", "Chat", "Video"]},
  InsurMonthly: {icon: "🛡️", gradient: "grad-red", tags: ["Insurance", "FinTech"]},
  HomeStation: {icon: "🏡", gradient: "grad-yellow", tags: ["Real Estate", "UAE"]},
  "ChatLooper – Agentic AI": {icon: "🤖", gradient: "grad-ai", tags: ["AI", "LLM", "Agents"]},
  "Zintrix CRM": {icon: "📲", gradient: "grad-whatsapp", tags: ["WhatsApp Bot", "CRM"]},
  "A4Paper.in": {icon: "📄", gradient: "grad-gray", tags: ["Documents", "Web"]},
  PcDriverPro: {icon: "⚙️", gradient: "grad-dark", tags: ["Python", "Windows", "Desktop"]},
  "IIMM Delhi": {icon: "🎓", gradient: "grad-indigo", tags: ["Education", "Institute"]}
};

export default function StartupProject() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              const meta = projectMeta[project.projectName] || {
                icon: "🚀",
                gradient: "grad-blue",
                tags: ["Project"]
              };
              const isHovered = hoveredIndex === i;

              return (
                <Zoom key={i} duration={600} delay={i * 80}>
                  <div
                    className={`project-card-new ${meta.gradient} ${isDark ? "project-card-new-dark" : ""} ${isHovered ? "project-card-hovered" : ""}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Animated background blobs */}
                    <div className="card-blob blob-1" />
                    <div className="card-blob blob-2" />

                    {/* Icon */}
                    <div className="project-icon-wrap">
                      <span className="project-icon">{meta.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="project-detail-new">
                      <h5 className={isDark ? "dark-mode card-title-new" : "card-title-new"}>
                        {project.projectName}
                      </h5>
                      <p className={isDark ? "dark-mode card-subtitle-new" : "card-subtitle-new"}>
                        {project.projectDesc}
                      </p>

                      {/* Tags */}
                      <div className="project-tags">
                        {meta.tags.map((tag, ti) => (
                          <span key={ti} className="project-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer links */}
                      {project.footerLink && (
                        <div className="project-card-footer-new">
                          {project.footerLink.map((link, li) => (
                            <button
                              key={li}
                              className="project-link-btn"
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              <span className="btn-arrow">↗</span> {link.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Animated corner accent */}
                    <div className="card-corner-accent" />
                  </div>
                </Zoom>
              );
            })}
          </div>

          {/* "& more" teaser card */}
          <Zoom duration={600} delay={bigProjects.projects.length * 80}>
            <div className={`project-card-new grad-more ${isDark ? "project-card-new-dark" : ""} project-more-card`}>
              <div className="card-blob blob-1" />
              <div className="project-icon-wrap">
                <span className="project-icon">✨</span>
              </div>
              <div className="project-detail-new">
                <h5 className={isDark ? "dark-mode card-title-new" : "card-title-new"}>
                  & Many More...
                </h5>
                <p className={isDark ? "dark-mode card-subtitle-new" : "card-subtitle-new"}>
                  Electronics projects (Face Recognition, Thumb & RFID, IoT Pani Puri Machine), 
                  Mobile apps (insaaf99 iOS/Android, JKM Attendance HRM, Strufedu Insurance, 
                  iBrowser, PaiRide), inhouse Linux server setups & networking, and more.
                </p>
                <div className="project-tags">
                  {["IoT", "Arduino", "iOS", "Android", "Linux", "Networking", "AI"].map((t, i) => (
                    <span key={i} className="project-tag-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="card-corner-accent" />
            </div>
          </Zoom>
        </div>
      </div>
    </Fade>
  );
}

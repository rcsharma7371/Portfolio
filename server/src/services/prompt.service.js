const profile = require("../data/profile");

const buildPrompt = (history) => {

  const conversation = history
    .map((msg) => {
      return `${msg.role}: ${msg.content}`;
    })
    .join("\n");

  return `
You are Ranjeet Kumar's portfolio assistant.

Name: ${profile.name}
Role: ${profile.role}
Experience: ${profile.experience}

Contact:
- Email: ${profile.contact.email}
- Phone: ${profile.contact.phone}
- GitHub: ${profile.contact.github}
- LinkedIn: ${profile.contact.linkedin}

Current Employer:
- Company: ${profile.currentEmployer.company}, ${profile.currentEmployer.location}
- Duration: ${profile.currentEmployer.startDate} - ${profile.currentEmployer.endDate}
- Responsibilities:
${profile.currentEmployer.responsibilities.map((r) => `  • ${r}`).join("\n")}

Skills:
- Languages & Frameworks: ${profile.skills.programmingLanguages.join(", ")}
- Tools & Libraries: ${profile.skills.toolsAndLibraries.join(", ")}
- Soft Skills: ${profile.skills.softSkills.join(", ")}

Education:
${profile.education
  .map((e) => `- ${e.degree} | ${e.institution} | ${e.cgpa ? `CGPA: ${e.cgpa}` : e.percentage} | ${e.year}`)
  .join("\n")}

Projects:
${profile.projects
  .map(
    (p) => `
- ${p.name} (${p.stack})
  Description: ${p.description}
  Tech Stack: ${p.techStack.join(", ")}
  Features:
${p.features.map((f) => `    • ${f}`).join("\n")}`
  )
  .join("\n")}

Hobbies: ${profile.hobbies.join(", ")}

Rules:
1. Answer only about Ranjeet.
2. Don't make up information.
3. Be professional.

Conversation:
${conversation}
`;
};

module.exports = {
  buildPrompt,
};
export const profile = {
  name: "Yiyi Qian",
  position: "Artist + XR/HCI Researcher",
  email: "yiyiqian06@gmail.com",
  googleScholar: "",
  orcid: "https://orcid.org/0009-0008-7228-343X",
  linkedin: "",
  cvPath: "/cv/Yiyi-Qian-CV.pdf",
  cvAvailable: false,
  institution: "China Academy of Art",
  researchInterests: [
    "Cinematic VR",
    "Spatial Narrative",
    "Viewer Experience",
    "Human–AI Co-Creation",
    "XR Creation Tools",
    "Immersive Cultural Heritage",
  ],
  // Keep private reference contact details out of the repository. If references
  // are needed later, publish only information that has explicit permission.
  references: [] as Array<{
    name: string;
    role?: string;
    institution?: string;
    note?: string;
  }>,
};

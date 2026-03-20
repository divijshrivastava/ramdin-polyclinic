export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#specialties", label: "Specialties" },
  { href: "#diagnostics", label: "Diagnostics" },
  { href: "#patient-info", label: "Patient Info" },
];

export const mobileTabLinks = [
  { href: "#home", label: "Home" },
  { href: "#patient-info", label: "Appts" },
  { href: "#specialties", label: "Services" },
  { href: "#diagnostics", label: "Labs" },
];

export const heroMetrics = [
  { value: "500k+", label: "Consultations supported" },
  { value: "24/7", label: "Emergency diagnostic access" },
  { value: "1 Roof", label: "Specialists, imaging, and pathology" },
];

export const mobileServices = [
  { title: "Obstetrician", subtitle: "Maternal & fetal care" },
  { title: "General Physician", subtitle: "Holistic diagnosis" },
  { title: "Diagnostics", subtitle: "Advanced lab tests" },
  { title: "Preventative", subtitle: "Annual screenings" },
];

export const stories = [
  {
    quote:
      '"My family has trusted Dr. Ramdin since 1990. Three generations of our family have been cared for here with unparalleled precision and warmth."',
    author: "Amit Sharma",
    detail: "Patient for 34 years",
  },
  {
    quote:
      `"The diagnostic accuracy here saved my life. They don't just treat symptoms; they treat people. Truly Andheri's medical sanctuary."`,
    author: "Priya Kapoor",
    detail: "Andheri West resident",
    featured: true,
  },
  {
    quote:
      `"Compassionate care for three generations of our family. Dr. Ramdin is more than a doctor; he's a trusted advisor."`,
    author: "Rajesh Mehta",
    detail: "Long-term family patient",
  },
];

export const specialtyFilters = [
  { value: "all", label: "All" },
  { value: "primary", label: "Primary Care" },
  { value: "surgical", label: "Surgical" },
  { value: "mental", label: "Mental Health" },
  { value: "allied", label: "Allied Care" },
];

export const specialtyFeatures = [
  {
    category: "primary",
    tag: "Primary Care",
    title: "Obstetrician & Gynaecologist",
    description:
      "Prenatal care, gynaecological procedures, and preventive screenings for women at every stage of life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWcvX5tadB5yhcK7Cb0sj1Df2TYc7RP_xP__g3GBmWZ2d_WL8tquZkfyw8r324G9-8CjPicvZxkCkyXHseXjpIHpB6X_DlFCHO7xARP73ZJqx7ziawpkJUwF6NI4LHMyKKIMx7V9jZgwZNfnl_dxyTWpmUiLxtu-ULPreEHw-8j7uP2i0lw86tRrld5pJAoxThCuafDeX5bRSK3tD1ivS7ntFBPAEuo-tv2qzCLsNzrhaiA7uXu2qKUJDsBaTgah3fPUvHbM7mQ",
    alt: "Obstetrician consultation",
  },
  {
    category: "surgical",
    tag: "Surgical Unit",
    title: "General Surgeon",
    description:
      "Abdominal and minimally invasive procedures with post-operative monitoring shaped around fast, safe recovery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5l3zdJI6uTYtiOOC2SPXWkYcb8HFHYieRPp3mRA7ijG1bRKPgRoB0TzKfn7s6DxRzpHxMrOVjSAEW1s38KZoK0QhvpDFznqE4OGF7mMbbHN2nsey9nGIoPf4Y6EKUiKJkV3gRw_9L6nL3wKmZTQlfEWEbeZRY-UreRHk1ZP7L8038gu8WgPtK_4XKzrQmYTlmV1H8Vy7hJvh80n3eErVP3jcxaJ74zLiuHghNVQpuwlhktnmxKpQ6Tv8RF3R1n5TMvefwDbcSbg",
    alt: "Surgical facility",
  },
];

export const specialtyCards = [
  {
    category: "surgical",
    title: "Breast Surgeon",
    description:
      "Screening, biopsy, and treatment planning for benign and malignant conditions.",
  },
  {
    category: "primary",
    title: "Chest Physician",
    description: "Respiratory care for asthma, COPD, and lung-health evaluation.",
  },
  {
    category: "primary",
    title: "General Physician",
    description:
      "Family-focused internal medicine, chronic care, and preventive screening.",
  },
  {
    category: "mental",
    title: "Psychiatrist",
    description:
      "Diagnostics, counseling pathways, and medication-led mental health support.",
  },
  {
    category: "primary",
    title: "Nephrologist",
    description:
      "Kidney care, hypertension management, and renal therapeutic supervision.",
  },
  {
    category: "allied",
    title: "Dental Services",
    description:
      "Routine oral care and restorative treatment with modern painless technology.",
  },
];

export const diagnosticsCards = [
  {
    title: "Charitable blood services",
    description:
      "Subsidized blood screening programs, free blood grouping for students, and anemia-screening initiatives extend the clinic's care model beyond the visit.",
    tag: "Community Program",
    tone: "wide",
    bullets: [
      "Free blood grouping for students",
      "Subsidized anemia screenings",
      "Fast escalation into physician review when needed",
    ],
  },
  {
    title: "Radiological imaging",
    description:
      "Digital X-Ray and color Doppler ultrasound with modern, low-friction workflow.",
    tone: "primary",
  },
  {
    title: "Clinical pathology",
    description:
      "Full-spectrum lab analysis led by expert pathologists and rapid result handling.",
    tone: "default",
  },
  {
    title: "The power of prevention",
    description:
      "Wellness panels are positioned as an early-detection layer for silent risk indicators before they disrupt quality of life.",
    tone: "accent",
  },
];

export const diagnosticJourney = [
  {
    step: "01",
    title: "Scheduling",
    description: "Book online or walk in for coordinated testing and imaging support.",
  },
  {
    step: "02",
    title: "Collection",
    description: "Fast sample collection in a controlled, sterile clinical environment.",
  },
  {
    step: "03",
    title: "Rapid Analysis",
    description: "On-site labs reduce turnaround time and preserve continuity of care.",
  },
  {
    step: "04",
    title: "Consultation",
    description: "Results are folded directly into physician review and next-step planning.",
  },
];

export const labGroups = [
  {
    id: "hematology",
    label: "Hematology",
    items: [
      { name: "Complete Hemogram (CBC)", status: "Same day" },
      { name: "Renal Function (KFT)", status: "Scheduled" },
      { name: "Liver Function (LFT)", status: "Scheduled" },
      { name: "Thyroid Profile", status: "Scheduled" },
    ],
  },
  {
    id: "radiology",
    label: "Radiology",
    items: [
      { name: "Chest X-Ray PA View", status: "Walk-in" },
      { name: "X-Ray Bone Trauma", status: "Urgent" },
      { name: "Abdominal Ultrasound", status: "Booking" },
      { name: "Antenatal Scan", status: "Booking" },
    ],
  },
  {
    id: "special",
    label: "Special Tests",
    items: [
      { name: "ECG (Digital)", status: "Walk-in" },
      { name: "Cardiac Biomarkers", status: "Priority" },
      { name: "Vitamin D & B12", status: "Scheduled" },
      { name: "Dengue / Malaria Panel", status: "Seasonal alert" },
    ],
  },
];

export const consultationHours = [
  { label: "Mon - Sat", value: "08:00 AM - 09:00 PM" },
  { label: "Sunday", value: "09:00 AM - 01:00 PM" },
  { label: "Emergency", value: "24/7 diagnostics" },
];

export const patientChecklist = [
  "Valid government ID for registration",
  "Previous prescriptions, films, and reports",
  "Current medication list and supplements",
  "Insurance details for cashless review",
];

export const bookingSteps = [
  "Select the right specialty.",
  "Choose a date and time preference.",
  "Receive a coordinator callback or SMS confirmation.",
];

export const patientStories = [
  {
    quote:
      '"Very clean facility and efficient staff. Dr. Ramdin took the time to explain everything clearly. Highly recommended for families in Andheri."',
    author: "Rajesh Kumar",
  },
  {
    quote:
      '"The booking process was seamless, and the pediatric team made my daughter completely comfortable during her visit."',
    author: "Priya Sharma",
  },
  {
    quote:
      '"Fast diagnostics, direct updates, and a supportive staff that makes you feel at ease even during stressful appointments."',
    author: "Sarah Johnson",
  },
];

export const departments = [
  "General Physician",
  "Obstetrician & Gynaecologist",
  "Diagnostics",
  "Psychiatry",
  "Physiotherapy",
];

export const departmentPills = [
  { label: "General Checkup", value: "General Physician" },
  { label: "Women's Health", value: "Obstetrician & Gynaecologist" },
  { label: "Laboratory", value: "Diagnostics" },
];

export const timeSlots = [
  "Morning (8am - 12pm)",
  "Afternoon (12pm - 4pm)",
  "Evening (4pm - 9pm)",
];

export const contactDetails = [
  { label: "Main Desk", value: "+91 22 2678 9000" },
  { label: "Mobile", value: "+91 98200 12345" },
  { label: "Email", value: "care@ramdinpolyclinic.com" },
];

export const footerLinks = navigationLinks;

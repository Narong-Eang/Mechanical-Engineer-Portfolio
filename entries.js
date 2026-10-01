// Shared project records for the timeline and resume pages.
window.ENTRIES = [
      {
        id: "sentinel-1a-satellite-thermal-analysis",
        title: "Sentinel-1A satellite thermal analysis",
        date: "24 May 2026",
        categories: ["analysis", "team"],
        summary: "Combined orbital heat-balance calculations and transient CFD to study a satellite thermal-control model.",
        description: "I calculated the initial thermal state with a teammate and helped refine the conference paper. Our model reported an electronics-surface temperature of about 331 K after 2,500 s, while the radiator surface was about 7 K below the 273 K starting temperature.",
        tags: ["ANSYS", "CFD", "Thermal analysis"],
        images: [
          { src: "photos/satellite-thermal-contour-bus.jpg", alt: "ANSYS static-temperature contour across the satellite electronics bus", caption: "Thermal contour across the electronics bus" },
          { src: "photos/satellite-thermal-contour-component.jpg", alt: "Close view of the simulated hot electronics component and heat spreader", caption: "Close-up of the simulated component temperature" },
          { src: "photos/satellite-orbit-temperature.png", alt: "Calculated satellite bulk temperature over two orbital cycles", caption: "Calculated temperature change over orbital position" },
          { src: "photos/satellite-poster.jpg", alt: "One-page project poster summarising the satellite heat-transfer study", caption: "Heat Transfer AT3 poster" }
        ]
      },
      {
        id: "rmit-rover-team-end-effector-design",
        title: "RMIT Rover Team — End-effector design",
        date: "2026–Present",
        categories: ["design", "team"],
        summary: "Redesigned the end-effector, reducing its weight by 10%, simplifying wiring and improving its appearance.",
        description: "I designed and assembled the payload-handling gripper in Onshape, then refined it through design reviews and iterations. The final redesign cut weight by 10%, simplified wiring and improved appearance; [add the design constraints and how you verified the change].",
        tags: ["Onshape", "CAD modelling", "Mechanical design", "Prototyping"],
        images: [
          { src: "photos/rover-end-effector-cad-final.jpg", alt: "Onshape CAD model of the RMIT Rover Team end-effector gripper", caption: "End-effector CAD design" },
          { src: "photos/rover-end-effector-cad-detail.jpg", alt: "CAD detail view of the end-effector jaws and linkage", caption: "Gripper detail" },
          { src: "photos/rover-end-effector-cad-assembly.jpg", alt: "Assembled CAD view of the end-effector mechanism", caption: "Assembled mechanism" },
          { src: "photos/rover-end-effector-prototype.jpg", alt: "Physical prototype of the rover gripper built from printed and assembled components", caption: "Physical prototype" }
        ]
      },
      {
        id: "warman-design-and-build-competition",
        title: "Warman Design and Build Competition",
        date: "2025–2026",
        categories: ["team"],
        summary: "Designed and tested an autonomous robot as a five-person university coursework project.",
        description: "We developed an autonomous robot for the RMIT Warman coursework project. I [confirm your personal contribution: the resume and portfolio describe different roles]; we completed more than 10 test and troubleshooting cycles. The supplied resume reports a runner-up coursework result, not an external competition win.",
        tags: ["Team project", "Robot design", "Testing", "[confirm your tools]"],
        images: [
          { src: "photos/warman-design-build-prototype.jpg", alt: "Photograph of the team's autonomous robot prototype", caption: "Team robot prototype" },
          { src: "photos/warman-design-build-project-1.jpg", alt: "Photograph of a robot prototype with a white frame and attached wiring", caption: "Robot prototype with a white frame and wiring" },
          { src: "photos/warman-design-build-project-2.jpg", alt: "Photograph of a robot prototype showing its controller, battery and wiring", caption: "Robot controller, battery and wiring" }
        ]
      },
      {
        id: "lunar-rover-wheel-design",
        title: "Lunar rover wheel design",
        date: "19 Oct 2024",
        categories: ["design", "team"],
        summary: "Modelled and detailed a wheel for a lunar rover, then contributed to the team assembly model.",
        description: "I modelled and detailed the rover wheel in SolidWorks, producing preliminary and detailed drawings. The group journal records my contribution to the assembly model and presentation; [add a verified physical test or performance result, if available].",
        tags: ["SolidWorks", "CAD modelling", "Engineering drawings", "Assembly modelling"],
        images: [
          { src: "photos/rover-wheel-cad-model.jpg", alt: "CAD model of the lunar rover with the wheel design visible", caption: "CAD model of my wheel design" },
          { src: "photos/rover-wheel-assembly-drawing.jpg", alt: "SolidWorks assembly drawing of the lunar rover wheel and drive components", caption: "Wheel assembly drawing" },
          { src: "photos/rover-wheel-detail.jpg", alt: "Detailed engineering drawing with section views of the designed rover wheel", caption: "Detailed wheel drawing" },
          { src: "photos/rover-wheel-preliminary-drawing.jpg", alt: "Preliminary dimensioned drawing of the rover wheel", caption: "Preliminary wheel drawing" }
        ]
      {
        id: "pressure-vessel-material-selection",
        title: "Pressure-vessel material selection",
        date: "26 Oct 2025",
        categories: ["analysis", "team"],
        summary: "Compared materials for a pressure vessel handling caustic soda at 280 °C and 3.5 MPa.",
        description: "I was assigned the pressure-vessel section of a group material-selection report. I compared candidate materials and recommended INCONEL alloy 625 (ASME SB-443), which scored 8.00 in the report's weighted comparison; this is a material-selection study, not a completed vessel design.",
        tags: ["Material selection", "INCONEL 625", "High-temperature service"],
        images: [],
        documents: [{ label: "View report (PDF)", href: "documents/pressure-vessel-material-selection.pdf" }],
        openDocumentDirectly: true
      },
      {
        id: "refrigeration-and-heat-recovery-system",
        title: "Refrigeration and heat-recovery system",
        date: "13 Oct 2024",
        categories: ["analysis", "design", "team"],
        summary: "Analysed an R134a refrigeration cycle linked to process-water heating for a juice-processing line.",
        description: "We analysed the refrigeration and heat-recovery system as a two-person applied-thermodynamics project. The report estimated a maximum recovered-water temperature of 54.7 °C against a 71.4 °C target and recommended supplementary heating; [confirm which calculations and recommendations were your work].",
        tags: ["R134a", "Applied thermodynamics", "Heat exchangers"],
        images: [
          { src: "photos/refrigeration-heat-recovery-system.jpg", alt: "Hand-drawn process diagram linking the refrigeration cycle to heating, steam and juice processing", caption: "Refrigeration cycle and process heat-recovery concept" },
          { src: "photos/refrigeration-expansion-valve.jpg", alt: "Expansion valve option included in the team's component selection", caption: "Selected expansion-valve option shown in the report" },
          { src: "photos/refrigeration-compressor.jpg", alt: "Compressor option included in the team's component selection", caption: "Selected compressor option shown in the report" }
        ]
      },
      {
        id: "fluid-piping-system-design",
        title: "Fluid piping system design",
        date: "[confirm year: 2024 or 2025]",
        categories: ["analysis", "design", "team"],
        summary: "Designed and analysed a three-section cooling-water loop for a Rankine-cycle power plant.",
        description: "We selected piping, a strainer, a globe valve and a pump for a target flow of 0.23 L/s. The report records a pump head of 9.148 m and 5.21 m available NPSH; [confirm which calculations or component selections you personally completed].",
        tags: ["Fluid systems", "Pump selection", "Excel", "Hydraulic calculations"],
        images: [
          { src: "photos/pipe-system-schematic.png", alt: "Annotated schematic of the cooling-water circuit, condenser, pump, valve and cooling tower", caption: "Three-section cooling-water system layout" },
          { src: "photos/pipe-pump-curve.png", alt: "Pump and system curves used to select the operating point", caption: "Pump and system operating curves" },
          { src: "photos/pipe-pump-power-curve.png", alt: "Pump power and NPSH curves from the selected pump data", caption: "Pump power and NPSH curves" }
        ]
      },
      {
        id: "traffic-light-and-pedestrian-crossing-system",
        title: "Traffic-light and pedestrian-crossing system",
        date: "06 Jun 2024",
        categories: ["design", "team"],
        summary: "Modelled a timed traffic sequence and pedestrian-button crossing in Simulink, with a breadboard prototype.",
        description: "I handled Simulink, testing, discussion and evaluation for both project parts. Our report documents an Arduino UNO breadboard prototype with vehicle and pedestrian signal states, including a button-triggered crossing sequence.",
        tags: ["MATLAB", "Simulink", "Arduino UNO", "Testing"],
        images: [
          { src: "photos/traffic-light-simulink-model.png", alt: "Simulink traffic-light model with vehicle and pedestrian signal outputs", caption: "Simulink model and simulated lamp outputs" },
          { src: "photos/traffic-light-simulink-thumbnail.png", alt: "Traffic-light Simulink subsystem showing button input and five signal outputs", caption: "Subsystem view from the supplied SLX model" },
          { src: "photos/traffic-light-breadboard-green.jpg", alt: "Arduino UNO and breadboard with the green vehicle signal illuminated", caption: "Prototype signal state: vehicle green" },
          { src: "photos/traffic-light-breadboard-yellow.jpg", alt: "Arduino UNO and breadboard with the yellow vehicle signal illuminated", caption: "Prototype signal state: vehicle yellow" },
          { src: "photos/traffic-light-breadboard-red.jpg", alt: "Arduino UNO and breadboard with the red vehicle signal illuminated", caption: "Prototype signal state: vehicle red and pedestrian green" },
          { src: "photos/traffic-light-button-prototype.jpg", alt: "Close view of the traffic-light breadboard prototype with a pedestrian push button", caption: "Breadboard prototype with pedestrian button" }
        ]
      },
      {
        id: "matlab-unit-conversion-program",
        title: "MATLAB unit-conversion program",
        date: "May 2024",
        categories: ["analysis"],
        summary: "Built and tested a text-menu MATLAB converter covering 14 metric and imperial conversion directions.",
        description: "I wrote separate conversion and text-interface functions, with input checks and error handling. The report shows a test converting 5,230 kilometres to 3,249.8602 miles and documents expected-versus-actual checks across the listed conversions.",
        tags: ["MATLAB", "Input validation", "Testing"],
        images: [
          { src: "photos/matlab-converter-example.png", alt: "MATLAB command-window example showing a kilometre-to-mile conversion", caption: "Example command-window output" },
          { src: "photos/matlab-converter-logic.png", alt: "Flowchart of the MATLAB unit-conversion function and conversion cases", caption: "Conversion-function logic" },
          { src: "photos/matlab-converter-flow.png", alt: "Flowchart of the text-based unit-converter user interface", caption: "Text-interface flow" }
        ]
      },

      {
        id: "reliable-regional-food-supply-system",
        title: "Reliable regional food-supply system",
        date: "08 Nov 2025",
        categories: ["design", "team"],
        summary: "Developed a systems-level concept for more reliable local food production and distribution.",
        description: "I wrote the eco-efficiency and eco-effectiveness sections, proposing options for energy, water, materials and waste. Our team set a design target of 312 kg of food per person per year; this was a requirement in the report, not a measured outcome.",
        tags: ["Systems design", "Eco-efficiency", "Eco-effectiveness"],
        images: [
          { src: "photos/food-supply-causal-loop.png", alt: "Causal-loop diagram linking regional wealth, food production, availability, consumption and price", caption: "Regional food-system causal-loop diagram" }
        ],
        documents: [{ label: "View full report (PDF)", href: "documents/regional-food-supply-system.pdf" }]
      },
      {
        id: "microscopic-materials-venture",
        title: "Microscopic Materials Venture — LPBF software project",
        date: "Nov 2025 – Apr 2026",
        categories: ["team"],
        summary: "Contributed to collaborative LPBF software work and presented the group's work at Deakin Defence Conference 2026.",
        badge: "Deakin Defence Conference 2026",
        description: "We collaborated in a multidisciplinary group on a real-world defence engineering challenge involving Laser Powder Bed Fusion. I contributed as a software developer, writing and debugging C++ and Python code to support the technical and computational aspects of the project.",
        tags: ["C++", "Python", "Additive manufacturing (LPBF)", "Teamwork", "Presenting"],
        // [describe photo] Update alt text when the conference photos are available to inspect.
        images: [
          { src: "photos/deakin-defence-conference-1.jpg", alt: "Deakin Defence Conference 2026 graphic", caption: "Deakin Defence Conference 2026" },
          { src: "photos/deakin-defence-conference-2.jpg", alt: "Deakin Defence Conference 2026 photo", caption: "Deakin Defence Conference 2026" },
          { src: "photos/deakin-defence-conference-3.jpg", alt: "Deakin Defence Conference 2026 photo", caption: "Deakin Defence Conference 2026" }
        ]
      },
      {
        id: "engineers-without-borders-safe-river-access-platform",
        title: "Engineers Without Borders: Safe river-access platform",
        date: "24 May 2024",
        categories: ["design", "team"],
        summary: "Proposed a community-informed floating platform to support safer river access in Pu Ngaol, Cambodia.",
        description: "I wrote the ideation, preliminary-idea and conclusion sections, and reviewed discovery, problem-definition and testing sections. Our team selected a non-adjustable floating platform intended to provide safer, accessible and low-maintenance river access.",
        tags: ["Concept development", "Requirements", "Prototype design"],
        images: [
          { src: "photos/river-access-prototype-1.png", alt: "Hand-drawn first river-access platform concept across a 50-metre river span", caption: "Initial concept sketch" },
          { src: "photos/river-access-prototype-2.png", alt: "Hand-drawn second concept showing a floating access platform and anchor points", caption: "Concept iteration two" },
          { src: "photos/river-access-prototype-3.png", alt: "Hand-drawn third concept showing the floating platform relative to river level", caption: "Concept iteration three" }
        ]
      }
    ];

function entryDateOrder(date) {
  if (/present|current/i.test(date)) return Date.now();
  const periods = String(date).split(/[–—]/);
  if (periods.length > 1) {
    const endDate = Date.parse(periods.at(-1).trim());
    if (!Number.isNaN(endDate)) return endDate;
  }
  const fullDate = Date.parse(date);
  if (!Number.isNaN(fullDate)) return fullDate;
  const year = String(date).match(/\b(?:19|20)\d{2}\b/g);
  return year ? Date.UTC(Number(year.at(-1)), 0, 1) : -Infinity;
}
window.ENTRIES.sort((a, b) => entryDateOrder(b.date) - entryDateOrder(a.date));

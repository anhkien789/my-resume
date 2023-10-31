const info = {
  name: "Le Minh Trung Kien",
  position: "Full Stack Developer",
  contacts: {
    linkedinURL: "https://www.linkedin.com/in/kien-le-699189184/",
    phone: "0941893838",
    email: "trungkien2012dn@gmail.com",
    githubURL: "https://github.com/anhkien789",
  },
  skills: {
    csharp: ["C#", ".NET", "Razor Pages", "MVC", "MSSQL"],
    python: ["Python", "Django", "PostgreSQL"],
    javascript: [
      "JavaScript",
      "React",
      "React Native",
      "Redux",
      "jQuery",
      "MySQL",
    ],
    general: ["Git"],
  },
  experience: [
    {
      id: 1,
      position: "Full-Stack Developer",
      company: "Headway",
      where: "Ho Chi Minh City",
      date: "03/2021 - 01/2023",
      detail: [
        {
          id: 1,
          heading: "",
          content: [
            "Had chances to take part in the potential projects of Headway and EVN below:",
          ],
        },
        {
          id: 2,
          heading:
            "Headway projects: developed company projects regarding education and e-commerce.",
          content: [
            "Joined and implemented Edukite (on App Store & Play Store), Edukite Web Admin, and H&B E-commerce Web.",
            "Edukite Web Admin is an admin web app that is built to manage and control all modules of Edukite by using C#, .Net Core (Web API), Razor pages, HTML, CSS, JavaScript, JQuery, and MySQL. On the other hand, Edukite is a mobile app that is developed to provide services relating to educational modules by using React Native, and Redux. Moreover, Google Maps and OpenStreetMap are integrated into each of them to extend new features for clients. Finally, Edukite Web Admin and Edukite app has been dealt with to serve Nguyen Binh Khiem School.",
            "H&B project is an e-commerce web provides services for beauty and spa chains and sells products relating to beauty using C#, .Net Core (Web API), Razor pages, HTML, CSS, JavaScript, and JQuery.",
          ],
        },
        {
          id: 3,
          heading:
            "EVN projects: managed and provided customer services relating to electricity for 27 provinces of Northern Vietnam.",
          content: [
            "Joined and implemented EVNNPC CSKH (on App Store & Play Store), Automation and CRM EVNNPC.",
            "CRM EVNNPC project is a CRM web application that is built to manage request forms from clients, employees (from general manager to staff) and workers (electricians) using C#, .NET, MVC, MSSQL, HTML, CSS, JavaScript, and jQuery.",
            "Automation project is a dashboard web application that is created to support signing up request forms automatically based on the database from EVN using C#, .NET, Razor Pages, MSSQL, HTML, CSS, JavaScript, and jQuery.",
            "Recovered and developed new designs and features of EVNNPC CSKH, which led to increasing from 2.2 to nearly 3.6 ratings in the App Store & Play Store using React Native and Redux.",
            "Collaborated with VNPAY and NPCIT to integrate the online payment gateway (using VNPAY SDK & VBan), which resulted in increasing revenue significantly together.",
          ],
        },
        {
          id: 4,
          heading: "General:",
          content: [
            "Planned and wrote documents for API.",
            "Designed ERD using draw.io.",
            "Maintained and deployed both EVN’s and Headway’s applications to Apple Store and Play Store.",
            "Trained and coached new employees in the same or lower position so that their work can be started after 1 month.",
          ],
        },
      ],
    },
    {
      id: 2,
      position: "Mobile Developer, Intern",
      company: "Dreamplex",
      where: "Ho Chi Minh City",
      date: "02/2020 - 06/2020",
      detail: [
        {
          id: 1,
          heading: "",
          content: [
            "Designed and developed the LeroyMerlin Vietnam pros app by using React Native and Odoo.",
            "LeroyMerlin Vietnam pros app: A mobile application for certain jobs such as electricians and plumbers.",
            "Collaborated with the design team to get ideas to make a portfolio video and mock-up design in Adobe XD.",
          ],
        },
      ],
    },
    {
      id: 3,
      position: "Mobile Developer, Contract",
      company: "Wizeline",
      where: "Ho Chi Minh City",
      date: "02/2019 - 05/2019",
      detail: [
        {
          id: 1,
          heading: "",
          content: [
            "Worked as a team with 4 RMIT students and the Wizeline team to design and implement the RouteCaster app using Swift and Firebase.",
            "RouteCaster: A mobile social application that integrates Google Map technologies for location and direction.",
            "Discussed and debated with the Wizeline team to get ideas to design mock-up UI from scratch in Sketch.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of IT",
      school: "RMIT University",
      where: "Ho Chi Minh City",
      date: "01/2016 - 05/2020",
      detail: [
        {
          id: 1,
          heading: "",
          content: ["Major in software development and system design."],
        },
      ],
    },
  ],
  activity: [
    {
      id: 1,
      degree: "",
      school: "",
      where: "",
      date: "",
      detail: [
        {
          id: 1,
          heading: "",
          content: [
            "Vietnam Sach Va Xanh (Facebook): Designed and implemented a web for Earth Day in 2020. Using React, Node.js, MongoDB, Docker, AWS, and Google Maps. (10/2019 - 12/2019)",
          ],
        },
      ],
    },
  ],
};

export default info;

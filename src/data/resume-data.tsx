import type { ElementType, ReactNode } from "react";

export const LANGUAGE_ORDER = ["en", "kk", "ru"] as const;

export type ResumeLanguage = (typeof LANGUAGE_ORDER)[number];

export type ResumeLabels = {
  htmlLang: string;
  languageName: string;
  switchToLanguage: string;
  resumeTitle: string;
  location: string;
  personalWebsite: string;
  email: string;
  phone: string;
  contactLinks: string;
  profilePicture: string;
  sections: {
    work: string;
    education: string;
    skills: string;
    awards: string;
    projects: string;
  };
  present: string;
  to: string;
  tags: string;
  skillsList: string;
  skill: string;
  companyWebsite: string;
  employmentPeriod: string;
  period: string;
  activeProject: string;
  projectDescription: string;
  commandMenu: {
    press: string;
    openMenuShortcut: string;
    buttonLabel: string;
    searchPlaceholder: string;
    noResults: string;
    actions: string;
    links: string;
    print: string;
  };
};

type SocialLink = {
  name: string;
  url: string;
  icon: ElementType;
};

export type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: readonly SocialLink[];
  };
  education: readonly {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: readonly {
    company: string;
    link: string;
    badges: readonly string[];
    title: string;
    logo: null;
    start: string;
    end: string | null;
    description: ReactNode;
  }[];
  skills: readonly string[];
  awards: readonly {
    title: string;
    award: string;
  }[];
  projects: readonly {
    title: string;
    description: string;
    techStack: readonly string[];
    link?: { href: string };
    github?: { href: string };
  }[];
};

export const RESUME_DATA: ResumeData = {
  name: "Aknur Zhakanova",
  initials: "AZ",
  location: "Astana, Kazakhstan",
  locationLink: "https://www.google.com/maps/place/Astana,+Kazakhstan",
  about:
    "Fourth-year B.Sc. Geology student at Nazarbayev University. Experienced in core logging, lithogeochemical sampling, geological mapping, and fieldwork across porphyry systems and sedimentary basins in Central Asia. Skilled in 3D geological modeling, GIS, and thin-section analysis. Presenter at the PDAC–SEG Student Minerals Colloquium 2026.",
  avatarUrl: "/aknur-cv-photo.jpeg",
  personalWebsiteUrl: "",
  contact: {
    email: "aknur.zhakanova@nu.edu.kz",
    tel: "+7 771 164 4997",
    social: [],
  },
  education: [
    {
      school: "Nazarbayev University",
      degree: "B.Sc. in Geology",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Nazarbayev University",
      link: "https://nu.edu.kz",
      badges: ["Research"],
      title: "Research Assistant",
      logo: null,
      start: "2025-10",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li>
            Worked with Professor Mahmoud Leila on projects related to H2
            extraction and CO2 injection into ultramafic rocks in a reactor.
          </li>
          <li>
            Validated and corrected ML-derived geospatial polygons in QGIS.
          </li>
        </ul>
      ),
    },
    {
      company: "Pallas Resources",
      link: "https://www.pallasresources.com",
      badges: ["Field"],
      title: "Field Geologist",
      logo: null,
      start: "2026-02",
      end: "2026-08",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Conducted geological core logging, core orientation, and
            drilling-control measurements across ~3 km of diamond drilling in a
            remote exploration program in Central Kazakhstan.
          </li>
          <li>
            Completed a 3-month field campaign supporting drill-hole quality
            control and geological documentation.
          </li>
        </ul>
      ),
    },
    {
      company: "Kazakhmys Barlau",
      link: "https://www.kazakhmys.kz",
      badges: ["Exploration"],
      title: "Geologist",
      logo: null,
      start: "2025-06",
      end: "2025-08",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Carried out lithogeochemical sampling and applied QA/QC procedures
            on one of the largest porphyry deposits in Central Asia.
          </li>
          <li>
            Prepared geological maps and figures in ArcGIS, AutoCAD, and
            CorelDRAW; managed sampling and drillhole data in acQuire.
          </li>
        </ul>
      ),
    },
    {
      company: "National Geological Survey",
      link: "https://geology.kz",
      badges: ["Survey"],
      title: "Geologist",
      logo: null,
      start: "2025-05",
      end: "2025-06",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Analyzed Soviet-era geological reports to identify prospective
            extraction sites.
          </li>
          <li>
            Compiled interpretative summaries to support resource evaluation and
            exploration planning.
          </li>
        </ul>
      ),
    },
    {
      company: "ERG",
      link: "https://www.erg.kz",
      badges: ["Modeling"],
      title: "Geologist",
      logo: null,
      start: "2024-12",
      end: "2025-02",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Built 3D geological models in Micromine from historical records.
          </li>
          <li>
            Digitized and structured geological data in Excel to support
            modeling and interpretation.
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "Core logging",
    "Core orientation",
    "Lithogeochemical sampling",
    "QA/QC",
    "Geological mapping",
    "Thin-section analysis",
    "Remote sensing",
    "3D geological modeling",
    "QGIS",
    "ArcGIS",
    "acQuire",
    "Micromine",
    "AutoCAD",
    "CorelDRAW",
    "Excel",
    "Leapfrog",
    "Petrel",
    "English (IELTS 7.5)",
    "Kazakh (Native)",
    "Russian (Advanced)",
    "Turkish (Intermediate)",
    "Arabic (Beginner)",
  ],
  awards: [
    {
      title: "Satbayev Geological Universiade",
      award: "2nd place, 2025",
    },
    {
      title: "PDAC 2026 Student Colloquium",
      award: "Speaker, Toronto, Canada",
    },
    {
      title: "Central Asia Water Conference",
      award: "Volunteer, 2025",
    },
    {
      title: "Nazarbayev University Open House Day",
      award: "Volunteer, 2025",
    },
  ],
  projects: [
    {
      title: "Educational field trips",
      description:
        "West, East, and Southern Kazakhstan, 2024–2026. Applied coursework in structural geology, sedimentary geology, and petroleum geology.",
      techStack: [
        "Structural geology",
        "Sedimentary geology",
        "Petroleum geology",
      ],
    },
    {
      title: "PDAC 2026 short course",
      description:
        "Public Geoscience and Geodata Science-Based Mineral Exploration (Orange Data Mining), Toronto.",
      techStack: ["Orange Data Mining", "PDAC"],
    },
    {
      title: "Mineralization modeling seminar",
      description:
        "Mineralization Modeling for Grade Control in Micromine and Leapfrog, 2025.",
      techStack: ["Micromine", "Leapfrog"],
    },
  ],
};

export const LOCALIZED_RESUME_DATA = {
  en: RESUME_DATA,
  kk: {
    ...RESUME_DATA,
    location: "Астана, Қазақстан",
    about:
      "Назарбаев Университетінде геология бойынша 4-курс студентімін. Орталық Азиядағы порфирлі жүйелер мен шөгінді бассейндерде керн сипаттау, литогеохимиялық сынамалау, геологиялық картаға түсіру және далалық жұмыс тәжірибем бар. 3D геологиялық модельдеу, ГАЖ және шлиф талдауын меңгергенмін. PDAC–SEG Student Minerals Colloquium 2026 конференциясында баяндамашымын.",
    education: [
      {
        school: "Назарбаев Университеті",
        degree: "Геология бойынша B.Sc.",
        start: "2023",
        end: "2027",
      },
    ],
    work: [
      {
        ...RESUME_DATA.work[0],
        company: "Назарбаев Университеті",
        badges: ["Зерттеу"],
        title: "Зерттеу ассистенті",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Профессор Махмуд Лейламен бірге реактордағы ультранегізді
              жыныстардан сутегін алу және оларға CO2 айдау жобаларында жұмыс
              істедім.
            </li>
            <li>
              QGIS-те машиналық оқытумен алынған геокеңістіктік полигондарды
              тексеріп, түзеттім.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[1],
        badges: ["Дала"],
        title: "Далалық геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Орталық Қазақстандағы шалғай барлау бағдарламасында шамамен 3 км
              алмазды бұрғылау бойынша кернді геологиялық сипаттау, кернді
              бағдарлау және бұрғылауды бақылау өлшемдерін жүргіздім.
            </li>
            <li>
              Ұңғыма сапасын бақылау мен геологиялық құжаттаманы сүйемелдейтін
              3 айлық далалық жұмысты аяқтадым.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[2],
        badges: ["Барлау"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Орталық Азиядағы ең ірі порфирлі кен орындарының бірінде
              литогеохимиялық сынамалау жүргізіп, QA/QC рәсімдерін қолдандым.
            </li>
            <li>
              ArcGIS, AutoCAD және CorelDRAW-та геологиялық карталар мен
              сызбалар дайындадым; сынамалау және ұңғыма деректерін acQuire-де
              жүргіздім.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[3],
        company: "Ұлттық геологиялық қызмет",
        badges: ["Түсірім"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Перспективалы өндіру учаскелерін анықтау үшін кеңестік кезеңдегі
              геологиялық есептерді талдадым.
            </li>
            <li>
              Ресурстарды бағалау мен барлауды жоспарлауға арналған
              интерпретациялық қорытындылар дайындадым.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[4],
        badges: ["Модельдеу"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Тарихи деректер бойынша Micromine-да 3D геологиялық модельдер
              құрдым.
            </li>
            <li>
              Модельдеу мен интерпретация үшін геологиялық деректерді Excel-де
              цифрлап, құрылымдадым.
            </li>
          </ul>
        ),
      },
    ],
    skills: [
      "Керн сипаттау",
      "Кернді бағдарлау",
      "Литогеохимиялық сынамалау",
      "QA/QC",
      "Геологиялық картаға түсіру",
      "Шлиф талдауы",
      "Қашықтықтан зондтау",
      "3D геологиялық модельдеу",
      "QGIS",
      "ArcGIS",
      "acQuire",
      "Micromine",
      "AutoCAD",
      "CorelDRAW",
      "Excel",
      "Leapfrog",
      "Petrel",
      "Ағылшын (IELTS 7.5)",
      "Қазақ (ана тілі)",
      "Орыс (жоғары)",
      "Түрік (орта)",
      "Араб (бастапқы)",
    ],
    awards: [
      {
        title: "Сәтбаев геологиялық универсиадасы",
        award: "2-орын, 2025",
      },
      {
        title: "PDAC 2026 студенттік коллоквиумы",
        award: "Баяндамашы, Торонто, Канада",
      },
      {
        title: "Central Asia Water Conference",
        award: "Ерікті, 2025",
      },
      {
        title: "Назарбаев Университетінің ашық есік күні",
        award: "Ерікті, 2025",
      },
    ],
    projects: [
      {
        title: "Оқу далалық сапарлары",
        description:
          "Батыс, Шығыс және Оңтүстік Қазақстан, 2024–2026. Құрылымдық геология, шөгінді геология және мұнай геологиясы бойынша курстық білімді тәжірибеде қолдандым.",
        techStack: [
          "Құрылымдық геология",
          "Шөгінді геология",
          "Мұнай геологиясы",
        ],
      },
      {
        title: "PDAC 2026 қысқа курсы",
        description:
          "Public Geoscience and Geodata Science-Based Mineral Exploration (Orange Data Mining), Торонто.",
        techStack: ["Orange Data Mining", "PDAC"],
      },
      {
        title: "Кәсіби семинар",
        description:
          "Micromine және Leapfrog-та кенденуді модельдеу және сапаны бақылау, 2025.",
        techStack: ["Micromine", "Leapfrog"],
      },
    ],
  },
  ru: {
    ...RESUME_DATA,
    location: "Астана, Казахстан",
    about:
      "Студентка четвертого курса программы B.Sc. по геологии в Назарбаев Университете. Есть опыт документации керна, литогеохимического опробования, геологического картирования и полевых работ на порфировых системах и в осадочных бассейнах Центральной Азии. Владею 3D-геологическим моделированием, ГИС и анализом шлифов. Докладчик PDAC–SEG Student Minerals Colloquium 2026.",
    education: [
      {
        school: "Назарбаев Университет",
        degree: "B.Sc. по геологии",
        start: "2023",
        end: "2027",
      },
    ],
    work: [
      {
        ...RESUME_DATA.work[0],
        company: "Назарбаев Университет",
        badges: ["Исследования"],
        title: "Ассистент исследователя",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Работала с профессором Махмудом Лейлой над проектами по извлечению
              водорода и закачке CO2 в ультраосновные породы в реакторе.
            </li>
            <li>
              Проверяла и исправляла в QGIS геопространственные полигоны,
              полученные методами машинного обучения.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[1],
        badges: ["Поле"],
        title: "Полевой геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Вела геологическую документацию керна, ориентирование керна и
              контрольные замеры бурения примерно на 3 км алмазного бурения в
              удаленной разведочной программе в Центральном Казахстане.
            </li>
            <li>
              Завершила 3-месячную полевую кампанию по контролю качества
              скважин и геологической документации.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[2],
        badges: ["Разведка"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Проводила литогеохимическое опробование и применяла процедуры
              QA/QC на одном из крупнейших порфировых месторождений Центральной
              Азии.
            </li>
            <li>
              Готовила геологические карты и графику в ArcGIS, AutoCAD и
              CorelDRAW; вела данные опробования и скважин в acQuire.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[3],
        company: "Национальная геологическая служба",
        badges: ["Съемка"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Анализировала геологические отчеты советского периода, чтобы
              выявить перспективные участки для добычи.
            </li>
            <li>
              Готовила интерпретационные сводки для оценки ресурсов и
              планирования геологоразведки.
            </li>
          </ul>
        ),
      },
      {
        ...RESUME_DATA.work[4],
        badges: ["Моделирование"],
        title: "Геолог",
        description: (
          <ul className="list-inside list-disc">
            <li>
              Строила 3D-геологические модели в Micromine по архивным данным.
            </li>
            <li>
              Оцифровывала и структурировала геологические данные в Excel для
              моделирования и интерпретации.
            </li>
          </ul>
        ),
      },
    ],
    skills: [
      "Документация керна",
      "Ориентирование керна",
      "Литогеохимическое опробование",
      "QA/QC",
      "Геологическое картирование",
      "Анализ шлифов",
      "Дистанционное зондирование",
      "3D-геологическое моделирование",
      "QGIS",
      "ArcGIS",
      "acQuire",
      "Micromine",
      "AutoCAD",
      "CorelDRAW",
      "Excel",
      "Leapfrog",
      "Petrel",
      "Английский (IELTS 7.5)",
      "Казахский (родной)",
      "Русский (продвинутый)",
      "Турецкий (средний)",
      "Арабский (начальный)",
    ],
    awards: [
      {
        title: "Геологическая универсиада им. Сатпаева",
        award: "2-е место, 2025",
      },
      {
        title: "Студенческий коллоквиум PDAC 2026",
        award: "Докладчик, Торонто, Канада",
      },
      {
        title: "Central Asia Water Conference",
        award: "Волонтер, 2025",
      },
      {
        title: "День открытых дверей Назарбаев Университета",
        award: "Волонтер, 2025",
      },
    ],
    projects: [
      {
        title: "Учебные полевые маршруты",
        description:
          "Западный, Восточный и Южный Казахстан, 2024–2026. Применяла курсовые знания по структурной, осадочной и нефтяной геологии.",
        techStack: [
          "Структурная геология",
          "Осадочная геология",
          "Нефтяная геология",
        ],
      },
      {
        title: "Краткий курс PDAC 2026",
        description:
          "Public Geoscience and Geodata Science-Based Mineral Exploration (Orange Data Mining), Торонто.",
        techStack: ["Orange Data Mining", "PDAC"],
      },
      {
        title: "Профессиональный семинар",
        description:
          "Моделирование оруденения для контроля содержаний в Micromine и Leapfrog, 2025.",
        techStack: ["Micromine", "Leapfrog"],
      },
    ],
  },
} satisfies Record<ResumeLanguage, ResumeData>;

export const RESUME_LABELS = {
  en: {
    htmlLang: "en",
    languageName: "English",
    switchToLanguage: "Switch to",
    resumeTitle: "Resume",
    location: "Location",
    personalWebsite: "Personal website",
    email: "Email",
    phone: "Phone",
    contactLinks: "Contact links",
    profilePicture: "profile picture",
    sections: {
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      awards: "Awards & Achievements",
      projects: "Coursework",
    },
    present: "Present",
    to: "to",
    tags: "Tags",
    skillsList: "List of skills",
    skill: "Skill",
    companyWebsite: "company website",
    employmentPeriod: "Employment period",
    period: "Period",
    activeProject: "Active project indicator",
    projectDescription: "Coursework description",
    commandMenu: {
      press: "Press",
      openMenuShortcut: "to open the command menu",
      buttonLabel: "Open command menu",
      searchPlaceholder: "Type a command or search...",
      noResults: "No results found.",
      actions: "Actions",
      links: "Links",
      print: "Print",
    },
  },
  kk: {
    htmlLang: "kk",
    languageName: "Қазақша",
    switchToLanguage: "Тілді ауыстыру:",
    resumeTitle: "Түйіндеме",
    location: "Орналасқан жері",
    personalWebsite: "Жеке веб-сайт",
    email: "Электрондық пошта",
    phone: "Телефон",
    contactLinks: "Байланыс сілтемелері",
    profilePicture: "профиль суреті",
    sections: {
      work: "Жұмыс тәжірибесі",
      education: "Білім",
      skills: "Дағдылар",
      awards: "Марапаттар мен жетістіктер",
      projects: "Курстар",
    },
    present: "Қазір",
    to: "-",
    tags: "Белгілер",
    skillsList: "Дағдылар тізімі",
    skill: "Дағды",
    companyWebsite: "компания веб-сайты",
    employmentPeriod: "Жұмыс кезеңі",
    period: "Кезең",
    activeProject: "Белсенді жоба белгісі",
    projectDescription: "Курс сипаттамасы",
    commandMenu: {
      press: "Басыңыз",
      openMenuShortcut: "командалар мәзірін ашу үшін",
      buttonLabel: "Командалар мәзірін ашу",
      searchPlaceholder: "Команда немесе іздеу мәтінін жазыңыз...",
      noResults: "Нәтиже табылмады.",
      actions: "Әрекеттер",
      links: "Сілтемелер",
      print: "Басып шығару",
    },
  },
  ru: {
    htmlLang: "ru",
    languageName: "Русский",
    switchToLanguage: "Переключить на",
    resumeTitle: "Резюме",
    location: "Местоположение",
    personalWebsite: "Личный сайт",
    email: "Эл. почта",
    phone: "Телефон",
    contactLinks: "Контактные ссылки",
    profilePicture: "фото профиля",
    sections: {
      work: "Опыт работы",
      education: "Образование",
      skills: "Навыки",
      awards: "Награды и достижения",
      projects: "Курсы",
    },
    present: "н.в.",
    to: "по",
    tags: "Теги",
    skillsList: "Список навыков",
    skill: "Навык",
    companyWebsite: "сайт компании",
    employmentPeriod: "Период работы",
    period: "Период",
    activeProject: "Индикатор активного проекта",
    projectDescription: "Описание курса",
    commandMenu: {
      press: "Нажмите",
      openMenuShortcut: "чтобы открыть командное меню",
      buttonLabel: "Открыть командное меню",
      searchPlaceholder: "Введите команду или запрос...",
      noResults: "Ничего не найдено.",
      actions: "Действия",
      links: "Ссылки",
      print: "Печать",
    },
  },
} satisfies Record<ResumeLanguage, ResumeLabels>;

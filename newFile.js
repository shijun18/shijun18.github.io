window.siteContent = {
  zh: {
    meta: {
      year: "2026",
      footer: "个人学术主页。。"
    },
    labels: {
      news: "Latest News",
      research: "Research Interests",
      publications: "Selected Publications",
      projects: "Research Projects",
      apps: "Applications",
      services: "Professional Services",
      education: "Education & Experience",
      awards: "Honors and Awards"
    },
    nav: [
      { label: "主页", href: "#home", icon: "home" },
      { label: "动态", href: "#news", icon: "news" },
      { label: "研究", href: "#research", icon: "research" },
      { label: "论文", href: "#publications", icon: "publications" },
      { label: "项目", href: "#projects", icon: "projects" },
      { label: "应用", href: "#apps", icon: "apps" },
      { label: "服务", href: "#services", icon: "services" },
      { label: "经历", href: "#education", icon: "education" }
    ],
    profile: {
      name: "Jun Shi",
      nameCn: "石军",
      title: "特任副研究员",
      affiliation: "中国科学技术大学计算机科学与技术学院 / ACSA Lab",
      location: "Hefei, China",
      avatar: "assets/profile.jpg"
    },
    links: [
      { label: "Email", url: "shijun18@ustc.edu.cn", icon: "email" },
      { label: "Scholar", url: "https://scholar.google.com.hk/citations?user=lgNttB8AAAAJ&hl=zh-CN", icon: "scholar" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-9888-6238", icon: "orcid" },
      { label: "DBLP", url: "https://dblp.org/pid/31/626-7.html", icon: "dblp" },
      { label: "LAB", url: "https://acsa.ustc.edu.cn/people/shijun/", icon: "lab" },
      { label: "GitHub", url: "https://github.com/shijun18", icon: "github" }
    ],
    hero: {
      kicker: "Biography",
      title: "石军",
      summary: [
        "我目前任职于[中国科学技术大学](https://www.ustc.edu.cn/)[计算机科学与技术学院](https://www.cs.ustc.edu.cn/)"
      ]
    },
    news: [
      { date: "2025", text: "多篇工作发表于 ASPLOS 2025、ICASSP 2025、ICS 2025 与 Nature Communications 等会议和期刊。" },
      { date: "2024", text: "获得中国科学技术大学计算机科学技术专业博士学位，并任中国科学技术大学计算机科学与技术学院博士后研究员。" },
      { date: "2024", text: "获得中国科大“小米青年学者”、墨子杰出青年特资津贴（一等）、郭永怀奖学金等荣誉。" }
    ],
    research: [
      {
        icon: "research",
        title: "AI for Medicine",
        description: "AI 技术在疾病辅助诊疗中的应用，多模态、低代价医学数据智能分析方法。",
        keywords: ["Medical Imaging", "Multimodal Data", "Diagnosis Assistance"],
        points: [
          "研究医学影像分割、肿瘤靶区勾画、超声影像重建与病理图像交互分割等问题。",
          "关注低代价医学数据、稀疏视角数据、弱监督标注和主动学习在临床场景中的有效利用。"
        ],
        open: true
      },
      {
        icon: "research",
        title: "AI for Science",
        description: "AI 技术在地球系统模拟（气象、海洋等）、生物学以及材料科学中的应用。",
        keywords: ["Earth System", "Ocean Forecasting", "Scientific AI"],
        points: [
          "关注深度学习在复杂科学系统建模和预测中的作用。",
          "代表性合作工作包括涡旋海洋预测等科学计算与 AI 交叉方向。"
        ]
      },
      {
        icon: "research",
        title: "ML System",
        description: "AI 模型的训练-推理优化技术，高效的 AI 训练-推理框架及系统构建。",
        keywords: ["ML Systems", "Tensor Program Tuning", "Runtime"],
        points: [
          "研究 AI 模型训练、推理、算子融合、张量程序调优和运行时系统优化。",
          "参与国产异构系统、数据流编程框架和 AI Benchmark 等系统方向项目。"
        ]
      }
    ],
    publications: [
      {
        group: "一作 / 主要作者论文",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "ICASSP 2025",
            authors: "Yida Li, Jun Shi, Zhaohui Wang, Tiantong Wang, Ziqi Zhu, Minfan Zhao",
            title: "Carver: Learning to Reconstruct Right Ventricle from Sparse Multi-View 2D Echocardiograms",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "ASPLOS 2025",
            authors: "Liang Qiao, Jun Shi, Xiaoyu Hao, Xi Fang, Sen Zhang, Minfan Zhao, Ziqi Zhu, Junshi Chen, Hong An, Xulong Tang, Bing Li, Honghui Yuan, Xinyang Wang",
            title: "Pruner: A Draft-then-Verify Exploration Mechanism to Accelerate Tensor Program Tuning",
            venue: "ACM International Conference on Architectural Support for Programming Languages and Operating Systems",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "IJCAI 2024",
            authors: "Jun Shi, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Hong An",
            title: "Predictive Accuracy-Based Active Learning for Medical Image Segmentation",
            venue: "International Joint Conference on Artificial Intelligence",
            year: "2024",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "MICCAI 2023",
            authors: "Jun Shi, Hongyu Kan, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Liang Qiao, Zhaohui Wang, Hong An, Xudong Xue",
            title: "H-DenseFormer: An Efficient Hybrid Densely Connected Transformer for Multimodal Tumor Segmentation",
            venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
            year: "2023",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          }
        ]
      },
      {
        group: "参与论文",
        icon: "publications",
        items: [
          {
            tag: "ICS 2025",
            authors: "Xiaoyu Hao, Sen Zhang, Liang Qiao, Qingcai Jiang, Jun Shi, Junshi Chen, Hong An, Xulong Tang, Hao Shu, Honghui Yuan",
            title: "CIExplorer: Microarchitecture-Aware Exploration for Tightly Integrated Custom Instruction",
            venue: "The 38th ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "Nature Communications 2025",
            authors: "Yingzhe Cui, Ruohan Wu, Xiang Zhang, Ziqi Zhu, Bo Liu, Jun Shi, Junshi Chen, Hailong Liu, Shenghui Zhou, Liang Su, Zhao Jing, Hong An, Lixin Wu",
            title: "Forecasting the eddying ocean with a deep neural network",
            venue: "Nature Communications",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          }
        ]
      }
    ],
    projects: [
      { title: "中科院先导 B 项目", description: "适配国产异构系统架构的数据流编程和运行时系统框架，2023.09-2026.08。" },
      { title: "国家重点研发计划", description: "面向异构融合数据流加速器的运行时系统，2016.07-2020.09，已结题。" },
      { title: "华为横向课题", description: "NPU 系统仿真与建模：AI Benchmark 设计，2021.08-2022.08，已结题。" },
      { title: "蔚来横向课题", description: "面向自动驾驶芯片的算子自动融合方案，2022.12-2023.11，已结题。" },
      { title: "科大新医学项目", description: "面向肿瘤临床诊疗的多源影像大数据智能融合分析软件和系统，2018.07-2021.06，已结题。" }
    ],
    apps: [
      {
        icon: "apps",
        title: "HADES System",
        description: "研制系统入口，可按需替换展示名称和说明。",
        url: "http://hades1.acsalab.com:1024/",
        linkText: "访问系统"
      },
      {
        icon: "apps",
        title: "Application Placeholder",
        description: "后续可放置医学影像分析、AI for Science 或 ML System 相关系统跳转。",
        url: "#",
        linkText: "待补充"
      }
    ],
    services: [
      "Journal reviewer: XX Journal（待补充）",
      "Conference reviewer / program committee member: XX Conference（待补充）",
      "Academic service: invited talk, workshop organization, or student competition coaching（待补充）"
    ],
    education: [
      {
        time: "2024 - Present",
        title: "中国科学技术大学计算机科学与技术学院，博士后研究员",
        description: "ACSA 实验室 HPDA 方向负责人。"
      },
      {
        time: "2024",
        title: "中国科学技术大学，博士",
        description: "计算机科学技术专业。"
      },
      {
        time: "To be updated",
        title: "本科 / 硕士经历",
        description: "公开页面未确认，请补充学校、专业、时间和导师信息。"
      }
    ],
    awards: [
      "2024 年度中国科大“小米青年学者”",
      "2024 年度中国科大“墨子杰出青年特资津贴”（一等）",
      "2024 年第三批全国高校“百名研究生党员标兵”",
      "2024 年中国科大郭永怀奖学金",
      "2024 年安徽省优秀毕业生；2024 年中国科大优秀毕业生",
      "2023 年中国科大优秀共产党员；2023 年中国科大-英特尔奖学金",
      "2023 年 ASC 世界大学生超算竞赛亚军（教练）",
      "2022 年安徽省研究生党员标兵；2022 年中国科大-英特尔奖学金",
      "2021 年第四届世界声博会十大人工智能新锐团队（队长）",
      "2021 年全球 AI 影响力嘉年华创造者赛道最高奖（队长）",
      "2020 年 ISC 世界大学生超算竞赛冠军（教练）",
      "2020-2022 年科大讯飞 1024 AI 开发者大赛 10 项算法冠军（队长）"
    ]
  },
  en: {
    meta: {
      year: "2026",
      footer: "Personal academic homepage."
    },
    labels: {
      news: "Latest News",
      research: "Research Interests",
      publications: "Selected Publications",
      projects: "Research Projects",
      apps: "Applications",
      services: "Professional Services",
      education: "Education & Experience",
      awards: "Honors and Awards"
    },
    nav: [
      { label: "Home", href: "#home", icon: "home" },
      { label: "News", href: "#news", icon: "news" },
      { label: "Research", href: "#research", icon: "research" },
      { label: "Publications", href: "#publications", icon: "publications" },
      { label: "Projects", href: "#projects", icon: "projects" },
      { label: "Apps", href: "#apps", icon: "apps" },
      { label: "Services", href: "#services", icon: "services" },
      { label: "Experience", href: "#education", icon: "education" }
    ],
    profile: {
      name: "Jun Shi",
      nameCn: "石军",
      title: "Associate Researcher",
      affiliation: "School of Computer Science and Technology, USTC / ACSA Lab",
      location: "Hefei, China",
      avatar: "assets/profile.jpg"
    },
    links: [
      { label: "Email", url: "shijun18@ustc.edu.cn", icon: "email" },
      { label: "Scholar", url: "https://scholar.google.com.hk/citations?user=lgNttB8AAAAJ&hl=zh-CN", icon: "scholar" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-9888-6238", icon: "orcid" },
      { label: "DBLP", url: "https://dblp.org/pid/31/626-7.html", icon: "dblp" },
      { label: "LAB", url: "https://acsa.ustc.edu.cn/people/shijun/", icon: "lab" },
      { label: "GitHub", url: "https://github.com/shijun18", icon: "github" }
    ],
    hero: {
      kicker: "Biography",
      title: "Jun Shi",
      summary: [
        "I am an Associate Researcher at the School of Computer Science and Technology, University of Science and Technology of China (USTC). "
      ]
    },
    news: [
      { date: "2025", text: "Recent works appeared in ASPLOS 2025, ICASSP 2025, ICS 2025, and Nature Communications." },
      { date: "2024", text: "Received the Ph.D. degree in Computer Science and Technology from USTC and became a postdoctoral researcher at USTC." },
      { date: "2024", text: "Received multiple honors from USTC, including Xiaomi Young Scholar, Mozi Outstanding Young Talent Special Allowance, and Guo Yonghuai Scholarship." }
    ],
    research: [
      {
        icon: "research",
        title: "AI for Medicine",
        description: "Applications of AI in computer-assisted diagnosis and multimodal, low-cost medical data analysis.",
        keywords: ["Medical Imaging", "Multimodal Data", "Diagnosis Assistance"],
        points: [
          "Study medical image segmentation, target-volume delineation, echocardiography reconstruction, and interactive pathology image segmentation.",
          "Explore data-efficient learning from sparse views, weak annotations, and active-learning settings."
        ],
        open: true
      },
      {
        icon: "research",
        title: "AI for Science",
        description: "AI methods for earth-system simulation, biology, materials science, and other scientific domains.",
        keywords: ["Earth System", "Ocean Forecasting", "Scientific AI"],
        points: [
          "Investigate deep learning methods for modeling and forecasting complex scientific systems.",
          "Representative collaborative work includes deep neural network forecasting for the eddying ocean."
        ]
      },
      {
        icon: "research",
        title: "ML System",
        description: "Training-inference optimization for AI models and efficient AI frameworks and systems.",
        keywords: ["ML Systems", "Tensor Program Tuning", "Runtime"],
        points: [
          "Work on AI model training, inference, operator fusion, tensor program tuning, and runtime optimization.",
          "Participate in projects on domestic heterogeneous systems, dataflow programming frameworks, and AI benchmarking."
        ]
      }
    ],
    publications: [
      {
        group: "First-author / Major-author Papers",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "ICASSP 2025",
            authors: "Yida Li, Jun Shi, Zhaohui Wang, Tiantong Wang, Ziqi Zhu, Minfan Zhao",
            title: "Carver: Learning to Reconstruct Right Ventricle from Sparse Multi-View 2D Echocardiograms",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "ASPLOS 2025",
            authors: "Liang Qiao, Jun Shi, Xiaoyu Hao, Xi Fang, Sen Zhang, Minfan Zhao, Ziqi Zhu, Junshi Chen, Hong An, Xulong Tang, Bing Li, Honghui Yuan, Xinyang Wang",
            title: "Pruner: A Draft-then-Verify Exploration Mechanism to Accelerate Tensor Program Tuning",
            venue: "ACM International Conference on Architectural Support for Programming Languages and Operating Systems",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "IJCAI 2024",
            authors: "Jun Shi, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Hong An",
            title: "Predictive Accuracy-Based Active Learning for Medical Image Segmentation",
            venue: "International Joint Conference on Artificial Intelligence",
            year: "2024",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "MICCAI 2023",
            authors: "Jun Shi, Hongyu Kan, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Liang Qiao, Zhaohui Wang, Hong An, Xudong Xue",
            title: "H-DenseFormer: An Efficient Hybrid Densely Connected Transformer for Multimodal Tumor Segmentation",
            venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
            year: "2023",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          }
        ]
      },
      {
        group: "Co-authored Papers",
        icon: "publications",
        items: [
          {
            tag: "ICS 2025",
            authors: "Xiaoyu Hao, Sen Zhang, Liang Qiao, Qingcai Jiang, Jun Shi, Junshi Chen, Hong An, Xulong Tang, Hao Shu, Honghui Yuan",
            title: "CIExplorer: Microarchitecture-Aware Exploration for Tightly Integrated Custom Instruction",
            venue: "The 38th ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "Nature Communications 2025",
            authors: "Yingzhe Cui, Ruohan Wu, Xiang Zhang, Ziqi Zhu, Bo Liu, Jun Shi, Junshi Chen, Hailong Liu, Shenghui Zhou, Liang Su, Zhao Jing, Hong An, Lixin Wu",
            title: "Forecasting the eddying ocean with a deep neural network",
            venue: "Nature Communications",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          }
        ]
      }
    ],
    projects: [
      { title: "CAS Strategic Priority Research Program, Category B", description: "Dataflow programming and runtime-system framework for domestic heterogeneous system architectures, 2023.09-2026.08." },
      { title: "National Key R&D Program of China", description: "Runtime system for heterogeneous fusion dataflow accelerators, 2016.07-2020.09, completed." },
      { title: "Huawei Collaborative Project", description: "NPU system simulation and modeling: AI Benchmark design, 2021.08-2022.08, completed." },
      { title: "NIO Collaborative Project", description: "Automatic operator fusion for autonomous-driving chips, 2022.12-2023.11, completed." },
      { title: "USTC New Medicine Project", description: "Multi-source imaging big-data intelligent fusion analysis software and system for tumor clinical diagnosis and treatment, 2018.07-2021.06, completed." }
    ],
    apps: [
      {
        icon: "apps",
        title: "HADES System",
        description: "Research system entrance. Update the display name and description as needed.",
        url: "http://hades1.acsalab.com:1024/",
        linkText: "Open system"
      },
      {
        icon: "apps",
        title: "Application Placeholder",
        description: "Future links to medical imaging, AI for Science, or ML System platforms can be placed here.",
        url: "#",
        linkText: "To update"
      }
    ],
    services: [
      "Journal reviewer: XX Journal (to update)",
      "Conference reviewer / program committee member: XX Conference (to update)",
      "Academic service: invited talk, workshop organization, or student competition coaching (to update)"
    ],
    education: [
      {
        time: "2024 - Present",
        title: "Postdoctoral Researcher, School of Computer Science and Technology, USTC",
        description: "Lead of the HPDA direction at ACSA Lab."
      },
      {
        time: "2024",
        title: "Ph.D., University of Science and Technology of China",
        description: "Major: Computer Science and Technology."
      },
      {
        time: "To be updated",
        title: "B.S. / M.S. Education",
        description: "Public pages do not confirm the full early education details. Please add university, major, dates, and advisor information."
      }
    ],
    awards: [
      "2024 USTC Xiaomi Young Scholar",
      "2024 USTC Mozi Outstanding Young Talent Special Allowance, First Class",
      "2024 National Top 100 Graduate Student Party Member Model",
      "2024 USTC Guo Yonghuai Scholarship",
      "2024 Outstanding Graduate of Anhui Province; 2024 Outstanding Graduate of USTC",
      "2023 Outstanding Communist Party Member of USTC; 2023 USTC-Intel Scholarship",
      "2023 ASC Student Supercomputer Challenge Runner-up, Coach",
      "2022 Anhui Graduate Student Party Member Model; 2022 USTC-Intel Scholarship",
      "2021 Top 10 Emerging AI Teams at the World Voice Expo, Team Leader",
      "2021 Global AI Impact Carnival Creator Track Grand Prize, Team Leader",
      "2020 ISC Student Cluster Competition Champion, Coach",
      "2020-2022 iFLYTEK 1024 AI Developer Competition, 10 algorithm championships, Team Leader"
    ]
  }
};

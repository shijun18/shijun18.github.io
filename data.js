window.siteConfig = {
  defaultLanguage: "en",
  defaultTheme: "classic",
  themes: [
    { id: "classic", label: "Classic", file: "themes/theme-classic.css" },
    { id: "journal", label: "Journal", file: "themes/theme-journal.css" },
    { id: "slate", label: "Slate", file: "themes/theme-slate.css" },
    { id: "warm", label: "Warm", file: "themes/theme-warm.css" }
  ],
  assets: {
    avatar: "assets/profile.jpg"
  }
};

window.siteContent = {
  zh: {
    meta: {
      year: "2026",
      footer: "个人学术主页。",
      copyright: "版权所有。",
      updatedLabel: "最后更新",
      updated: "2026-06-16",
      viewsLabel: "访问计数"
    },
    labels: {
      biography: "个人简介",
      news: "最新动态",
      research: "研究兴趣",
      publications: "代表性论文",
      projects: "研究项目",
      apps: "应用系统",
      services: "学术服务",
      education: "教育与工作经历",
      awards: "荣誉奖励"
    },
    notes: {
      publications: "* 通讯作者，# 共同一作"
    },
    nav: [
      { label: "主页", href: "#home", icon: "home" },
      { label: "研究", href: "#research", icon: "research" },
      { label: "动态", href: "#news", icon: "news" },
      { label: "论文", href: "#publications", icon: "publications" },
      { label: "项目", href: "#projects", icon: "projects" },
      { label: "应用", href: "#apps", icon: "apps" },
      { label: "服务", href: "#services", icon: "services" },
      { label: "经历", href: "#education", icon: "education" }
    ],
    profile: {
      name: "石军",
      title: "特任副研究员",
      affiliation: "USTC / ACSA Lab",
      location: "Hefei, China",
      avatar: "assets/profile.jpg"
    },
    links: [
      { label: "Email", url: "mailto:shijun18@ustc.edu.cn", icon: "email" },
      { label: "Google Scholar", url: "https://scholar.google.com.hk/citations?user=lgNttB8AAAAJ&hl=zh-CN", icon: "scholar" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-9888-6238", icon: "orcid" },
      { label: "DBLP", url: "https://dblp.org/pid/31/626-7.html", icon: "dblp" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Jun_Shi45?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNlYXJjaCIsInBhZ2UiOiJzZWFyY2giLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ", icon: "researchgate" },
      { label: "GitHub", url: "https://github.com/shijun18", icon: "github" }
    ],
    hero: {
      kicker: "Biography",
      // title: "石军",
      summary: [
        "现任[中国科学技术大学](https://www.ustc.edu.cn/)[计算机科学与技术学院](https://www.cs.ustc.edu.cn/)特任副研究员，于 2024 年获得中国科学技术大学计算机科学技术专业博士学位，导师为[安虹教授](https://acsa.ustc.edu.cn/people/anhong/)。目前，我在先进计算机系统结构实验室（[ACSA Lab](https://acsa.ustc.edu.cn/)）负责智能科学计算（AISC）方向，主要关注 **AI for Medicine & Science** 和 **ML System** 等交叉研究。"
      ]
    },
    recruiting: [
      "欢迎自驱力强、勤奋踏实、善于沟通、对技术探索和科学研究充满热情的本科生、研究生同学加入 ACSA 实验室 AISC 小组！"
    ],
    news: [
      { date: "2026-06", text: "祝贺李昊青（博士生）的研究工作DCLDs-RAG被 International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026)接收！" },
      { date: "2026-06", text: "祝贺贾骐玮（本科生）的研究工作被 International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026)接收！" },
      { date: "2026-05", text: "祝贺王朝晖（博士生）的研究工作RVDeformer被 IEEE Transactions on Medical Imaging (TMI 2026)接收！" },
      { date: "2026-04", text: "祝贺王天同（博士生）的研究工作Clore被 IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2026)接收！" },
      { date: "2026-04", text: "祝贺李明超（硕士生）的研究工作Flow-PET被 IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2026)接收！" },
      { date: "2026-01", text: "祝贺戴悦（硕士生）的研究工作LoPr被 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2026)接收！" },

      { date: "2025-06", text: "祝贺我们组的研究综述中国图象图形学报-30周年专刊接收，并被评为优秀论文！" },
      { date: "2025-04", text: "祝贺王炳勋（硕士生）的研究工作Dual-Mamba被 IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2025)接收！" },
      { date: "2025-04", text: "祝贺我们参与的研究工作Wenhai被 Nature Communications (2025)接收！" },
      { date: "2025-01", text: "祝贺乔良（博士生）的研究工作Pruner被 ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2025)接收！" },
      { date: "2025-01", text: "祝贺李易达（硕士生）的研究工作Carver被 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)接收！" },
      { date: "2025-01", text: "祝贺赵敏帆（博士生）的研究工作PromptSeg被 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)接收！" },

      { date: "2024-06", text: "祝贺我们组参与的研究工作被 The Lancet Oncology (2024)接收！" },
      { date: "2024-06", text: "祝贺我们的研究工作被 Journal of Applied Clinical Medical Physics (2024)接收！" },
      { date: "2024-05", text: "祝贺我们的研究工作被 Physica Medica (2024)接收！" },
      { date: "2024-04", text: "祝贺汪涵楠（硕士生）的研究工作Clisp被 IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2024)接收！" },
      { date: "2024-04", text: "祝贺我们的研究工作被 International Joint Conference on Artificial Intelligence (IJCAI 2024)接收！" },
      { date: "2024-01", text: "祝贺我们的研究工作被 Computerized Medical Imaging and Graphics (CMIG 2024)接收！" },
    ],
    research: [
      {
        icon: "medicine",
        title: "AI for Medicine",
        description: "探索AI技术在疾病辅助诊疗中的应用，研究多模态、低代价的医学数据智能分析方法。",
        keywords: ["图像分析", "多模态表征", "辅助诊疗","可解释AI"],
        points: [
          "研究数据高效的医学图像分析方法，解决图像分割、图像重建等问题。",
          "研究可靠的医学数据统一表征方法，解决多模态融合、跨模态生成等问题。",
          "研究多模态大模型驱动的可解释医学数据分析方法，支撑临床辅助决策。"
        ],
        open: true
      },
      {
        icon: "science",
        title: "AI for Science",
        description: "探索AI技术在地球系统、生物学等领域的应用，研究数据—机理双驱动的AI建模方法。",
        keywords: ["地球系统模拟", "湍流预测", "气象预测","生物合成"],
        points: [
          "研究面向地球系统模拟的AI建模方法，实现海洋、气象等环境的精准预测。",
          "研究面向生物制造的AI逆合成方法，支持高效的生物分子设计和药物发现。",
          "研究面向燃烧过程的AI时空演变方法，支持超燃冲压发动机的设计与优化。"
        ]
      },
      {
        icon: "system",
        title: "ML System",
        description: "探索面向多模态智能模型的高效训练及推理优化技术，研究软硬件协同的性能优化方法。",
        keywords: ["分布式训练", "张量程序优化", "KV缓存优化","低精度推理"],
        points: [
          "研究面向国产平台的大规模分布式训练方法，提高计算效率，降低训练成本。",
          "研究面向智能科学模型的混合低精度推理方法，提高推理效率，降低计算能耗。",
          "研究跨平台的张量程序自动优化与生成方法，提高可移植性，降低部署成本。"
        ]
      }
    ],
    publications: [
      {
        group: "2026",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "MICCAI 2026",
            authors: "Haoqing Li, Jun Shi*, Xianmeng Chen, Qiwei Jia, Rui Wang, Yating Peng, Li Gao, Qianyi Chen, Hong An, Ruoyun Ouyang, Xiaowen Hu",
            title: "DCLDs-RAG: Evidence-Grounded Multimodal Retrieval-Augmented Generation for Diffuse Cystic Lung Diseases Diagnosis",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "MICCAI 2026",
            authors: "Qiwei Jia, Haoqing Li, Jun Shi*, Xianmeng Chen, Rui Wang, Yating Peng, Li Gao, Qianyi Chen, Hong An, Ruoyun Ouyang, Xiaowen Hu",
            title: "Multimodal Large Language Model-Driven Self-Verification Reasoning for Interpretable Diagnosis of Diffuse Cystic Lung Diseases",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "TMI 2026",
            authors: "Zhaohui Wang# , Jun Shi#* , Minfan Zhao, Ziqi Zhu , Yida Li, Hong An*",
            title: "RVDeformer: Sparse Point Cloud-Guided Right Ventricle 3D Reconstruction in Echocardiograms",
            venue: "IEEE Transactions on Medical Imaging",
            year: "2026",
            links: [{ label: "Source", url: "https://10.1109/TMI.2026.3696549" }]
          },
          {
            tag: "EMBC 2026",
            authors: "Tiantong Wang, Minfan Zhao, Jun Shi*, Hannan Wang, Yue Dai, Hong An",
            title: "Clore: Interactive Pathology Image Segmentation with Click-based Local Refinement",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2026",
            links: [{ label: "Source", url: "https://arxiv.org/abs/2603.27625" }]
          },
          {
            tag: "EMBC 2026",
            authors: "Mingchao Li, Haoqing Li, Jun Shi*, Zehua Zhu, Qiwei Jia, Tiantong Wang, Jiong Shi, Hong An",
            title: "Flow-PET: Stabilized One-step MRI-to-PET Translation via Rectified Flow",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/"}]
          },
          {
            tag: "ICASSP 2026",
            authors: "Yue Dai, Minfan Zhao, Tiantong Wang, Jun Shi*, Hong An*",
            title: "LoPr: Loss Prediction Driven Data Selection for Semi-Supervised Medical Image Segmentation",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/"}]
          },
        ]
      },
      {
        group: "2025",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "ASPLOS 2025",
            authors: "Liang Qiao#, Jun Shi#, Xiaoyu Hao, Xi Fang, Sen Zhang, Minfan Zhao, Ziqi Zhu, Junshi Chen, Hong An, Xulong Tang, Bing Li, Honghui Yuan, Xinyang Wang",
            title: "Pruner: A Draft-then-Verify Exploration Mechanism to Accelerate Tensor Program Tuning",
            venue: "ACM International Conference on Architectural Support for Programming Languages and Operating Systems",
            year: "2025",
            links: [{ label: "Source", url: "https://doi.org/10.1145/3676641.37162" }]
          },
          {
            tag: "ICASSP 2025",
            authors: "Yida Li#, Jun Shi#, Zhaohui Wang, Tiantong Wang, Ziqi Zhu, Minfan Zhao",
            title: "Carver: Learning to Reconstruct Right Ventricle from Sparse Multi-View 2D Echocardiograms",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10889543/" }]
          },
          {
            tag: "ICASSP 2025",
            authors: "Minfan Zhao#, Ziqi Zhu#, Jun Shi*, Zhaohui Wang, Junshi Chen, Hong An*, Bing Yan",
            title: "PromptSeg: Learning to Segment Medical Image via Visual Prompts",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10889700" }]
          },
          {
            tag: "JIG 2025",
            authors: "石军,王天同,朱子琦,赵敏帆,王炳勋,安虹",
            title: "基于深度学习的医学图像分割方法综述",
            venue: "中国图象图形学报",
            year: "2025",
            links: [{ label: "Source", url: "https://www.cjig.cn/zh/article/doi/10.11834/jig.240467/" }]
          },
          {
            tag: "EMBC 2025",
            authors: "Bingxun Wang, Jie Liu, Jun Shi*, Tiantong Wang, Hong An*",
            title: "Dual-Mamba: A Hybrid CNN-Mamba Architecture for Tumor Segmentation from 3D Medical Images",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "Nature Communications 2025",
            authors: "Yingzhe Cui, Ruohan Wu, Xiang Zhang, Ziqi Zhu, Bo Liu, Jun Shi, Junshi Chen, Hailong Liu, Shenghui Zhou, Liang Su, Zhao Jing, Hong An, Lixin Wu",
            title: "Forecasting the Eddying Ocean with a Deep Neural Network",
            venue: "Nature Communications",
            year: "2025",
            links: [{ label: "Source", url: "https://www.nature.com/articles/s41467-025-57389-2" }]
          },
          {
            tag: "ACP 2025",
            authors: "Zihan Xia, Chun Zhao, Zining Yang, Qiuyan Du, Jiawang Feng, Chen Jin, Jun Shi, Hong An",
            title: "Toward a Learnable Artificial Intelligence Model for Aerosol Chemistry and Interactions (AIMACI) based on the Multi-Head Self-Attention Algorithm",
            venue: "Atmospheric Chemistry and Physics",
            year: "2025",
            links: [{ label: "Source", url: "https://acp.copernicus.org/articles/25/6197/2025/" }]
          },
          {
            tag: "ICS 2025",
            authors: "Xiaoyu Hao, Sen Zhang, Liang Qiao, Qingcai Jiang, Jun Shi, Junshi Chen, Hong An, Xulong Tang, Hao Shu, Honghui Yuan",
            title: "CIExplorer: Microarchitecture-Aware Exploration for Tightly Integrated Custom Instruction",
            venue: "The ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/10.1145/3721145.3730421" }]
          },
          {
            tag: "ICPP 2025",
            authors: "Zhiyi Zhang, Junshi Chen, Jingwei Sun, Pengfei Zhang, Zhuopin Xu, Jun Shi, Qi Wang",
            title: "WinRS: Accelerate Winograd Backward-Filter Convolution with Tiny Workspace",
            venue: "The ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/10.1145/3754598.3754599" }]
          }
        ]
      },
      {
        group: "2024",
        icon: "publications",
        items: [
          {
            tag: "IJCAI 2024",
            authors: "Jun Shi, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Hong An, Xudong Xue, Bing Yan",
            title: "Predictive Accuracy-Based Active Learning for Medical Image Segmentation",
            venue: "International Joint Conference on Artificial Intelligence",
            year: "2024",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/abs/10.24963/ijcai.2024/540" }]
          },
          {
            tag: "CMIG 2024",
            authors: "Jun Shi, Zhaohui Wang, Shulan Ruan, Minfan Zhao, Ziqi Zhu, Hongyu Kan, Hong An, Xudong Xue, Bing Yan",
            title: "Rethinking Automatic Segmentation of Gross Target Volume from a Decoupling Perspective",
            venue: "Computerized Medical Imaging and Graphics",
            year: "2024",
            links: [{ label: "Source", url: "https://www.sciencedirect.com/science/article/pii/S0895611123001416" }]
          },
          {
            tag: "Physica Medica 2024",
            authors: "Xudong Xue, Jun Shi#, Hui Zeng, Bing Yan, Lei Liu, Dazhen Jiang, Xiaoyong Wang, Hui Liu, Man Jiang, Jianjun Shen, Hong An, An Liu",
            title: "Deep learning promoted target volumes delineation of total marrow and total lymphoid irradiation for accelerated radiotherapy: A multi-institutional study",
            venue: "Physica Medica",
            year: "2024",
            links: [{ label: "Source", url: "https://www.sciencedirect.com/science/article/abs/pii/S1120179724001881" }]
          },
          {
            tag: "EMBC 2024",
            authors: "Hannan Wang, Jun Shi,  Minfan Zhao, Liang Qiao, Zhaohui Wang, Yue Dai, Yuchen Ma, Hong An",
            title: "Clisp: A Robust Interactive Segmentation Framework for Pathological Images",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2024",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10782318" }]
          },
          {
            tag: "JACMP 2024",
            authors: "Bing Yan, Jun Shi, Xudong Xue, Hu Peng, Aidong Wu, Xiao Wang, Chi Ma",
            title: "Error Detection Using a Multi-channel Hybrid Network with a Low-Resolution Detector in Patient-Specific Quality Assurance",
            venue: "Journal of Applied Clinical Medical Physics",
            year: "2024",
            links: [{ label: "Source", url: "https://aapm.onlinelibrary.wiley.com/doi/full/10.1002/acm2.14327" }]
          },
          {
            tag: "The Lancet Oncology 2024",
            authors: "Anindo Saha, Joeran S Bosma, Jasper J Twilt, ..., Jun Shi, Hong An, et al.",
            title: "Artificial intelligence and radiologists in prostate cancer detection on MRI (PI-CAI): an international, paired, non-inferiority, confirmatory study",
            venue: "The Lancet Oncology",
            year: "2024",
            links: [{ label: "Source", url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(24)00220-1/abstract" }]
          }
        ]
      },
      {
        group: "2023",
        icon: "publications",
        items: [
          {
            tag: "MICCAI 2023",
            authors: "Jun Shi, Hongyu Kan, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Liang Qiao, Zhaohui Wang, Hong An, Xudong Xue",
            title: "H-DenseFormer: An Efficient Hybrid Densely Connected Transformer for Multimodal Tumor Segmentation",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2023",
            links: [{ label: "Source", url: "https://doi.org/10.1007/978-3-031-43901-8_66" }]
          },
          {
            tag: "ISBI 2023",
            authors: "Qiang Liu, Jun Shi, Liang Qiao, Ziqi Zhu, Hong An, Minfan Zhao",
            title: "FRNET: An Effective Hybrid Structure for Automatic Segmentation of Head and Neck Primary Tumors from Multimodal Images",
            venue: "IEEE International Symposium on Biomedical Imaging",
            year: "2023",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10230383" }]
          },
          {
            tag: "MICCAI-Workshop 2023",
            authors: "Ziqi Zhu, Jun Shi, Minfan Zhao, Zhaohui Wang, Liang Qiao, Hong An",
            title: "Contrast Learning Based Robust Framework for Weakly Supervised Medical Image Segmentation with Coarse Bounding Box Annotations",
            venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention Workshops ",
            year: "2023",
            links: [{ label: "Source", url: "https://link.springer.com/chapter/10.1007/978-3-031-45087-7_12" }]
          },
          {
            tag: "SMC 2023",
            authors: "Xiangneng Gao, Shulan Ruan, Jun Shi, Guoqing Hu, Wei Wei",
            title: "Multi-View Attention Learning for Residual Disease Prediction of Ovarian Cancer",
            venue: "IEEE International Conference on Systems, Man, and Cybernetics",
            year: "2023",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10394014" }]
          }
        ]
      },
      {
        group: "2022",
        icon: "publications",
        items: [
          {
            tag: "EMBC 2022",
            authors: "Jun Shi, Zhaohui Wang, Hongyu Kan, Minfan Zhao, Xudong Xue, Bing Yan, Hong An, Jianjun Shen, Joseph Bartlett, Wenqi Lu, Jinming Duan",
            title: "Automatic Segmentation of Target Structures for Total Marrow and Lymphoid Irradiation in Bone Marrow Transplantation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871824" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Hongyu Kan, Jun Shi, Minfan Zhao, Zhaohui Wang, Wenting Han, Hong An, Zhaoyang Wang, Shuo Wang",
            title: "ITUnet: Integration of Transformers and Unet for Organs-At-Risk Segmentation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871945" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Liang Qiao, Qiang Liu, Jun Shi, Minfan Zhao, Hongyu Kan, Zhaohui Wang, Hong An, Chenguang Xiao, Shuo Wang",
            title: "FcTC-UNet: Fine-grained Combination of Transformer and CNN for Thoracic Organs Segmentation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9870880" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Minfan Zhao, Min Ling, Zhaohui Wang, Jun Shi, Hongyu Kan, Hong An, Wenting Han, Joseph Bartlett, Wenqi Lu",
            title: "Whole Slide Image MultiClassification of Cervical Epithelial Lesions Based on Unsupervised Pre-training",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871149" }]
          }
        ]
      },
      {
        group: "2021",
        icon: "publications",
        items: [
          {
            tag: "BIBM 2021",
            authors: "Jun Shi, Huite Yi, Shulan Ruan, Zhaohui Wang, Xiaoyu Hao, Hong An, Wei Wei",
            title: "DARNet: Dual-Attention Residual Network for Automatic Diagnosis of COVID-19 via CT Images",
            venue: "IEEE International Conference on Bioinformatics and Biomedicine",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9669805" }]
          },
          {
            tag: "ISBI 2021",
            authors: "Huite Yi, Jun Shi, Bing Yan, Xudong Xue, Hong An, Hongyan Zhang",
            title: "Global Multi-Level Attention Network for the Segmentation of Clinical Target Volume In The Planning CT For Cervical Cancer",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9433980" }]
          },
          {
            tag: "EMBC 2021",
            authors: "Zhaohui Wang, Jun Shi, Xiaoyu Hao, Ke Wen, Xu Jin, Hong An",
            title: "Simultaneous Right Ventricle End-diastolic and End-systolic Frame Identification and Landmark Detection on Echocardiography",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9630310" }]
          },
          {
            tag: "TCRT 2021",
            authors: "Xudong Xue, Yi Ding, Jun Shi, Xiaoyu Hao, Xiangbin Li, Dan Li, Yuan Wu, Hong An, Man Jiang, Wei Wei",
            title: "Cone Beam CT (CBCT) Based Synthetic CT Generation Using Deep Learning Methods for Dose Calculation of Nasopharyngeal Carcinoma Radiotherapy",
            venue: "Technology in Cancer Research & Treatment",
            year: "2021",
            links: [{ label: "Source", url: "https://journals.sagepub.com/doi/10.1177/15330338211062415" }]
          },
          {
            tag: "ISBI 2021",
            authors: "Min Ling, Guofeng Lv, Jue Wang, Xiaoyu Hao, Jun Shi, Hong An",
            title: "Fast Whole Slide Image Analysis Of Cervical Cancer Using Weak Annotation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9433964" }]
          }
        ]
      },
    ],
    projects: [
      { title: "安徽省自然科学基金青年项目", description: "基于多模态生成模型的区域降水临近预报方法研究，2025.09-2027.08。" },
      { title: "安徽省科技创新攻坚项目子课题", description: "气象水文一体化预测大模型构建技术研发，2025.12-2028.12。" },
      { title: "华为科教创新卓越中心课题", description: "基于鲲鹏专业版本的问天气象模型推理优化，2025.12-2026.12。" },
    ],
    apps: [
      {
        icon: "apps",
        title: "MedSketcher",
        description: "癌症放疗自动计划的智能靶区勾画软件。",
        url: "http://hades1.acsalab.com:1024/",
        linkText: "仅限校内访问"
      },
      {
        icon: "apps",
        title: "DCLDs Diagnosis",
        description: "多模态大模型驱动的DCLD罕见病诊断系统。",
        url: "http://222.195.72.182:3000",
        linkText: "仅限校内访问"
      }
    ],
    services: [
      "MICCAI 2023-2026 reviewer",
      "ISBI 2024 reviewer",
      "ICASSP 2024 reviewer",
      "ICASSP 2026 reviewer",
      "AAAI 2026 reviewer",
      "TCAD 2026 reviewer"
    ],
    education: [
      {
        time: "2026.06 - Present",
        title: "中国科学技术大学计算机科学与技术学院，特任副研究员",
        description: "ACSA 实验室 AISC 方向负责人。"
      },
      {
        time: "2024.08 - 2026.06",
        title: "中国科学技术大学计算机科学与技术学院，博士后研究员",
        description: "ACSA 实验室 AISC 方向负责人。"
      },
      {
        time: "2018.09 - 2024.06",
        title: "中国科学技术大学计算机科学与技术学院，博士研究生",
        description: "ACSA 实验室 HPDA 方向负责人。"
      },
    ],
    awards: [
      "2025 中国气象局-人工智能天气预报模型示范计划",
      "2025 《中国图象图形学报》优秀论文奖",
      "2025 青岛海洋人工智能创新应用大赛海洋大模型标杆奖",
      "2024 年度中国科大“小米青年学者”",
      "2024 年度中国科大“墨子杰出青年特资津贴”（一等）",
      "2024 年第三批全国高校“百名研究生党员标兵”",
      "2024 年中国科大郭永怀奖学金",
      "2024 年安徽省优秀毕业生",
      "2024 年中国科大优秀毕业生",
      "2023 年中国科大优秀共产党员",
      "2023 年中国科大-英特尔奖学金",
      "2020-2022 年科大讯飞 1024 AI 开发者大赛 10 项算法冠军（队长）",
      "2022 年安徽省研究生党员标兵",
      "2022 年中国科大-英特尔奖学金",
      "2021 年第四届世界声博会十大人工智能新锐团队（队长）",
      "2021 年INTEL全球 AI 影响力嘉年华创造者赛道最高奖（队长）",
      "2023 年 ASC 世界大学生超算竞赛亚军（教练）",
      "2020 年 ISC 世界大学生超算竞赛冠军（教练）"
    ]
  },
  en: {
    meta: {
      year: "2026",
      footer: "Personal academic homepage.",
      copyright: "All rights reserved.",
      updatedLabel: "Last updated",
      updated: "2026-06-16",
      viewsLabel: "Visits"
    },
    labels: {
      biography: "Biography",
      news: "Latest News",
      research: "Research Interests",
      publications: "Selected Publications",
      projects: "Research Projects",
      apps: "Applications",
      services: "Professional Services",
      education: "Education & Experience",
      awards: "Honors and Awards"
    },
    notes: {
      publications: "* corresponding author, # co-first author"
    },
    nav: [
      { label: "Home", href: "#home", icon: "home" },
      { label: "Research", href: "#research", icon: "research" },
      { label: "News", href: "#news", icon: "news" },
      { label: "Publications", href: "#publications", icon: "publications" },
      { label: "Projects", href: "#projects", icon: "projects" },
      { label: "Apps", href: "#apps", icon: "apps" },
      { label: "Services", href: "#services", icon: "services" },
      { label: "Experience", href: "#education", icon: "education" }
    ],
    profile: {
      name: "Jun Shi",
      title: "Associate Researcher",
      affiliation: "USTC / ACSA Lab",
      location: "Hefei, China",
      avatar: "assets/profile.jpg"
    },
    links: [
      { label: "Email", url: "mailto:shijun18@ustc.edu.cn", icon: "email" },
      { label: "Google Scholar", url: "https://scholar.google.com.hk/citations?user=lgNttB8AAAAJ&hl=zh-CN", icon: "scholar" },
      { label: "ORCID", url: "https://orcid.org/0000-0002-9888-6238", icon: "orcid" },
      { label: "DBLP", url: "https://dblp.org/pid/31/626-7.html", icon: "dblp" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Jun_Shi45?ev=hdr_xprf&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNlYXJjaCIsInBhZ2UiOiJzZWFyY2giLCJwb3NpdGlvbiI6Imdsb2JhbEhlYWRlciJ9fQ", icon: "researchgate" },
      { label: "GitHub", url: "https://github.com/shijun18", icon: "github" }
    ],
    hero: {
      kicker: "Biography",
      title: "Jun Shi",
      summary: [
        "I am an Associate Researcher at the [School of Computer Science and Technology](https://www.cs.ustc.edu.cn/), [University of Science and Technology of China](https://www.ustc.edu.cn/). I received my Ph.D. degree in Computer Science and Technology from USTC in 2024, advised by [Prof. Hong An](https://acsa.ustc.edu.cn/people/anhong/). I currently lead the AI for Intelligent Scientific Computing (AISC) direction at the [Advanced Computer System Architecture Laboratory (ACSA Lab)](https://acsa.ustc.edu.cn/), with research interests in **AI for Medicine & Science** and **ML System**."
      ]
    },
    recruiting: [
      "Self-motivated, diligent, and communicative undergraduate and graduate students who are passionate about technological exploration and scientific research are warmly welcome to join the AISC group at ACSA Lab."
    ],
    news: [
      { date: "2026-06", text: "Congratulations to Haoqing Li (Ph.D. student) on the acceptance of DCLDs-RAG by the International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026)!" },
      { date: "2026-06", text: "Congratulations to Qiwei Jia (undergraduate student) on the acceptance of the research work by the International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026)!" },
      { date: "2026-05", text: "Congratulations to Zhaohui Wang (Ph.D. student) on the acceptance of RVDeformer by IEEE Transactions on Medical Imaging (TMI 2026)!" },
      { date: "2026-04", text: "Congratulations to Tiantong Wang (Ph.D. student) on the acceptance of Clore by the IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2026)!" },
      { date: "2026-04", text: "Congratulations to Mingchao Li (M.S. student) on the acceptance of Flow-PET by the IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2026)!" },
      { date: "2026-01", text: "Congratulations to Yue Dai (M.S. student) on the acceptance of LoPr by the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2026)!" },
      { date: "2025-06", text: "Congratulations on the acceptance of our survey paper by the 30th Anniversary Special Issue of the Journal of Image and Graphics, where it was selected as an excellent paper!" },
      { date: "2025-04", text: "Congratulations to Bingxun Wang (M.S. student) on the acceptance of Dual-Mamba by the IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2025)!" },
      { date: "2025-04", text: "Congratulations on the acceptance of our collaborative work Wenhai by Nature Communications (2025)!" },
      { date: "2025-01", text: "Congratulations to Liang Qiao (Ph.D. student) on the acceptance of Pruner by the ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2025)!" },
      { date: "2025-01", text: "Congratulations to Yida Li (M.S. student) on the acceptance of Carver by the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)!" },
      { date: "2025-01", text: "Congratulations to Minfan Zhao (Ph.D. student) on the acceptance of PromptSeg by the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2025)!" },
      { date: "2024-06", text: "Congratulations on the acceptance of our collaborative work by The Lancet Oncology (2024)!" },
      { date: "2024-06", text: "Congratulations on the acceptance of our research work by the Journal of Applied Clinical Medical Physics (2024)!" },
      { date: "2024-05", text: "Congratulations on the acceptance of our research work by Physica Medica (2024)!" },
      { date: "2024-04", text: "Congratulations to Hannan Wang (M.S. student) on the acceptance of Clisp by the IEEE Engineering in Medicine and Biology Society Annual International Conference (EMBC 2024)!" },
      { date: "2024-04", text: "Congratulations on the acceptance of our research work by the International Joint Conference on Artificial Intelligence (IJCAI 2024)!" },
      { date: "2024-01", text: "Congratulations on the acceptance of our research work by Computerized Medical Imaging and Graphics (CMIG 2024)!" }
    ],
    research: [
      {
        icon: "medicine",
        title: "AI for Medicine",
        description: "Exploring AI applications in computer-assisted diagnosis, with a focus on multimodal and low-cost medical data analysis.",
        keywords: ["Image Analysis", "Multimodal Representation", "Diagnosis Assistance", "Interpretable AI"],
        points: [
          "Develop data-efficient medical image analysis methods for tasks such as image segmentation and image reconstruction.",
          "Study reliable unified representation learning for medical data, including multimodal fusion and cross-modal generation.",
          "Explore interpretable medical data analysis driven by multimodal foundation models to support clinical decision-making."
        ],
        open: true
      },
      {
        icon: "science",
        title: "AI for Science",
        description: "Exploring AI applications in earth systems, biology, and related scientific domains through data-mechanism co-driven modeling.",
        keywords: ["Earth System Modeling", "Weather Forecasting", "Biological Synthesis", "Turbulence Prediction"],
        points: [
          "Develop AI modeling methods for earth-system simulation to enable accurate ocean and weather forecasting.",
          "Study AI-based inverse synthesis methods for biological manufacturing, supporting efficient biomolecular design and drug discovery.",
          "Explore AI methods for spatiotemporal evolution modeling in combustion processes to support the design and optimization of scramjet engines."
        ]
      },
      {
        icon: "system",
        title: "ML System",
        description: "Exploring efficient training and inference optimization for multimodal intelligent models through software-hardware co-design.",
        keywords: ["Distributed Training", "Tensor Program Optimization", "KV Cache Optimization", "Low-Precision Inference"],
        points: [
          "Study large-scale distributed training methods for domestic computing platforms to improve efficiency and reduce training cost.",
          "Develop mixed low-precision inference methods for intelligent scientific models to improve inference efficiency and reduce computational overhead.",
          "Research cross-platform automatic tensor program optimization and generation methods to improve portability and reduce deployment cost."
        ]
      }
    ],
    publications: [
      {
        group: "2026",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "MICCAI 2026",
            authors: "Haoqing Li, Jun Shi*, Xianmeng Chen, Qiwei Jia, Rui Wang, Yating Peng, Li Gao, Qianyi Chen, Hong An, Ruoyun Ouyang, Xiaowen Hu",
            title: "DCLDs-RAG: Evidence-Grounded Multimodal Retrieval-Augmented Generation for Diffuse Cystic Lung Diseases Diagnosis",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "MICCAI 2026",
            authors: "Qiwei Jia, Haoqing Li, Jun Shi*, Xianmeng Chen, Rui Wang, Yating Peng, Li Gao, Qianyi Chen, Hong An, Ruoyun Ouyang, Xiaowen Hu",
            title: "Multimodal Large Language Model-Driven Self-Verification Reasoning for Interpretable Diagnosis of Diffuse Cystic Lung Diseases",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "TMI 2026",
            authors: "Zhaohui Wang# , Jun Shi#* , Minfan Zhao, Ziqi Zhu , Yida Li, Hong An*",
            title: "RVDeformer: Sparse Point Cloud-Guided Right Ventricle 3D Reconstruction in Echocardiograms",
            venue: "IEEE Transactions on Medical Imaging",
            year: "2026",
            links: [{ label: "Source", url: "https://10.1109/TMI.2026.3696549" }]
          },
          {
            tag: "EMBC 2026",
            authors: "Tiantong Wang, Minfan Zhao, Jun Shi*, Hannan Wang, Yue Dai, Hong An",
            title: "Clore: Interactive Pathology Image Segmentation with Click-based Local Refinement",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2026",
            links: [{ label: "Source", url: "https://arxiv.org/abs/2603.27625" }]
          },
          {
            tag: "EMBC 2026",
            authors: "Mingchao Li, Haoqing Li, Jun Shi*, Zehua Zhu, Qiwei Jia, Tiantong Wang, Jiong Shi, Hong An",
            title: "Flow-PET: Stabilized One-step MRI-to-PET Translation via Rectified Flow",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/"}]
          },
          {
            tag: "ICASSP 2026",
            authors: "Yue Dai, Minfan Zhao, Tiantong Wang, Jun Shi*, Hong An*",
            title: "LoPr: Loss Prediction Driven Data Selection for Semi-Supervised Medical Image Segmentation",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2026",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/"}]
          },
        ]
      },
      {
        group: "2025",
        icon: "publications",
        open: true,
        items: [
          {
            tag: "ASPLOS 2025",
            authors: "Liang Qiao#, Jun Shi#, Xiaoyu Hao, Xi Fang, Sen Zhang, Minfan Zhao, Ziqi Zhu, Junshi Chen, Hong An, Xulong Tang, Bing Li, Honghui Yuan, Xinyang Wang",
            title: "Pruner: A Draft-then-Verify Exploration Mechanism to Accelerate Tensor Program Tuning",
            venue: "ACM International Conference on Architectural Support for Programming Languages and Operating Systems",
            year: "2025",
            links: [{ label: "Source", url: "https://doi.org/10.1145/3676641.37162" }]
          },
          {
            tag: "ICASSP 2025",
            authors: "Yida Li#, Jun Shi#, Zhaohui Wang, Tiantong Wang, Ziqi Zhu, Minfan Zhao",
            title: "Carver: Learning to Reconstruct Right Ventricle from Sparse Multi-View 2D Echocardiograms",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10889543/" }]
          },
          {
            tag: "ICASSP 2025",
            authors: "Minfan Zhao#, Ziqi Zhu#, Jun Shi*, Zhaohui Wang, Junshi Chen, Hong An*, Bing Yan",
            title: "PromptSeg: Learning to Segment Medical Image via Visual Prompts",
            venue: "IEEE International Conference on Acoustics, Speech and Signal Processing",
            year: "2025",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10889700" }]
          },
          {
            tag: "JIG 2025",
            authors: "石军,王天同,朱子琦,赵敏帆,王炳勋,安虹",
            title: "基于深度学习的医学图像分割方法综述",
            venue: "中国图象图形学报",
            year: "2025",
            links: [{ label: "Source", url: "https://www.cjig.cn/zh/article/doi/10.11834/jig.240467/" }]
          },
          {
            tag: "EMBC 2025",
            authors: "Bingxun Wang, Jie Liu, Jun Shi*, Tiantong Wang, Hong An*",
            title: "Dual-Mamba: A Hybrid CNN-Mamba Architecture for Tumor Segmentation from 3D Medical Images",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2025",
            links: [{ label: "Source", url: "https://acsa.ustc.edu.cn/people/shijun/" }]
          },
          {
            tag: "Nature Communications 2025",
            authors: "Yingzhe Cui, Ruohan Wu, Xiang Zhang, Ziqi Zhu, Bo Liu, Jun Shi, Junshi Chen, Hailong Liu, Shenghui Zhou, Liang Su, Zhao Jing, Hong An, Lixin Wu",
            title: "Forecasting the Eddying Ocean with a Deep Neural Network",
            venue: "Nature Communications",
            year: "2025",
            links: [{ label: "Source", url: "https://www.nature.com/articles/s41467-025-57389-2" }]
          },
          {
            tag: "ACP 2025",
            authors: "Zihan Xia, Chun Zhao, Zining Yang, Qiuyan Du, Jiawang Feng, Chen Jin, Jun Shi, Hong An",
            title: "Toward a Learnable Artificial Intelligence Model for Aerosol Chemistry and Interactions (AIMACI) based on the Multi-Head Self-Attention Algorithm",
            venue: "Atmospheric Chemistry and Physics",
            year: "2025",
            links: [{ label: "Source", url: "https://acp.copernicus.org/articles/25/6197/2025/" }]
          },
          {
            tag: "ICS 2025",
            authors: "Xiaoyu Hao, Sen Zhang, Liang Qiao, Qingcai Jiang, Jun Shi, Junshi Chen, Hong An, Xulong Tang, Hao Shu, Honghui Yuan",
            title: "CIExplorer: Microarchitecture-Aware Exploration for Tightly Integrated Custom Instruction",
            venue: "The ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/10.1145/3721145.3730421" }]
          },
          {
            tag: "ICPP 2025",
            authors: "Zhiyi Zhang, Junshi Chen, Jingwei Sun, Pengfei Zhang, Zhuopin Xu, Jun Shi, Qi Wang",
            title: "WinRS: Accelerate Winograd Backward-Filter Convolution with Tiny Workspace",
            venue: "The ACM International Conference on Supercomputing",
            year: "2025",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/10.1145/3754598.3754599" }]
          }
        ]
      },
      {
        group: "2024",
        icon: "publications",
        items: [
          {
            tag: "IJCAI 2024",
            authors: "Jun Shi, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Hong An, Xudong Xue, Bing Yan",
            title: "Predictive Accuracy-Based Active Learning for Medical Image Segmentation",
            venue: "International Joint Conference on Artificial Intelligence",
            year: "2024",
            links: [{ label: "Source", url: "https://dl.acm.org/doi/abs/10.24963/ijcai.2024/540" }]
          },
          {
            tag: "CMIG 2024",
            authors: "Jun Shi, Zhaohui Wang, Shulan Ruan, Minfan Zhao, Ziqi Zhu, Hongyu Kan, Hong An, Xudong Xue, Bing Yan",
            title: "Rethinking Automatic Segmentation of Gross Target Volume from a Decoupling Perspective",
            venue: "Computerized Medical Imaging and Graphics",
            year: "2024",
            links: [{ label: "Source", url: "https://www.sciencedirect.com/science/article/pii/S0895611123001416" }]
          },
          {
            tag: "Physica Medica 2024",
            authors: "Xudong Xue, Jun Shi#, Hui Zeng, Bing Yan, Lei Liu, Dazhen Jiang, Xiaoyong Wang, Hui Liu, Man Jiang, Jianjun Shen, Hong An, An Liu",
            title: "Deep learning promoted target volumes delineation of total marrow and total lymphoid irradiation for accelerated radiotherapy: A multi-institutional study",
            venue: "Physica Medica",
            year: "2024",
            links: [{ label: "Source", url: "https://www.sciencedirect.com/science/article/abs/pii/S1120179724001881" }]
          },
          {
            tag: "EMBC 2024",
            authors: "Hannan Wang, Jun Shi,  Minfan Zhao, Liang Qiao, Zhaohui Wang, Yue Dai, Yuchen Ma, Hong An",
            title: "Clisp: A Robust Interactive Segmentation Framework for Pathological Images",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2024",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10782318" }]
          },
          {
            tag: "JACMP 2024",
            authors: "Bing Yan, Jun Shi, Xudong Xue, Hu Peng, Aidong Wu, Xiao Wang, Chi Ma",
            title: "Error Detection Using a Multi-channel Hybrid Network with a Low-Resolution Detector in Patient-Specific Quality Assurance",
            venue: "Journal of Applied Clinical Medical Physics",
            year: "2024",
            links: [{ label: "Source", url: "https://aapm.onlinelibrary.wiley.com/doi/full/10.1002/acm2.14327" }]
          },
          {
            tag: "The Lancet Oncology 2024",
            authors: "Anindo Saha, Joeran S Bosma, Jasper J Twilt, ..., Jun Shi, Hong An, et al.",
            title: "Artificial intelligence and radiologists in prostate cancer detection on MRI (PI-CAI): an international, paired, non-inferiority, confirmatory study",
            venue: "The Lancet Oncology",
            year: "2024",
            links: [{ label: "Source", url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(24)00220-1/abstract" }]
          }
        ]
      },
      {
        group: "2023",
        icon: "publications",
        items: [
          {
            tag: "MICCAI 2023",
            authors: "Jun Shi, Hongyu Kan, Shulan Ruan, Ziqi Zhu, Minfan Zhao, Liang Qiao, Zhaohui Wang, Hong An, Xudong Xue",
            title: "H-DenseFormer: An Efficient Hybrid Densely Connected Transformer for Multimodal Tumor Segmentation",
            venue: "International Conference on Medical Image Computing and Computer Assisted Intervention",
            year: "2023",
            links: [{ label: "Source", url: "https://doi.org/10.1007/978-3-031-43901-8_66" }]
          },
          {
            tag: "ISBI 2023",
            authors: "Qiang Liu, Jun Shi, Liang Qiao, Ziqi Zhu, Hong An, Minfan Zhao",
            title: "FRNET: An Effective Hybrid Structure for Automatic Segmentation of Head and Neck Primary Tumors from Multimodal Images",
            venue: "IEEE International Symposium on Biomedical Imaging",
            year: "2023",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10230383" }]
          },
          {
            tag: "MICCAI-Workshop 2023",
            authors: "Ziqi Zhu, Jun Shi, Minfan Zhao, Zhaohui Wang, Liang Qiao, Hong An",
            title: "Contrast Learning Based Robust Framework for Weakly Supervised Medical Image Segmentation with Coarse Bounding Box Annotations",
            venue: "International Conference on Medical Image Computing and Computer-Assisted Intervention Workshops ",
            year: "2023",
            links: [{ label: "Source", url: "https://link.springer.com/chapter/10.1007/978-3-031-45087-7_12" }]
          },
          {
            tag: "SMC 2023",
            authors: "Xiangneng Gao, Shulan Ruan, Jun Shi, Guoqing Hu, Wei Wei",
            title: "Multi-View Attention Learning for Residual Disease Prediction of Ovarian Cancer",
            venue: "IEEE International Conference on Systems, Man, and Cybernetics",
            year: "2023",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/10394014" }]
          }
        ]
      },
      {
        group: "2022",
        icon: "publications",
        items: [
          {
            tag: "EMBC 2022",
            authors: "Jun Shi, Zhaohui Wang, Hongyu Kan, Minfan Zhao, Xudong Xue, Bing Yan, Hong An, Jianjun Shen, Joseph Bartlett, Wenqi Lu, Jinming Duan",
            title: "Automatic Segmentation of Target Structures for Total Marrow and Lymphoid Irradiation in Bone Marrow Transplantation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871824" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Hongyu Kan, Jun Shi, Minfan Zhao, Zhaohui Wang, Wenting Han, Hong An, Zhaoyang Wang, Shuo Wang",
            title: "ITUnet: Integration of Transformers and Unet for Organs-At-Risk Segmentation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871945" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Liang Qiao, Qiang Liu, Jun Shi, Minfan Zhao, Hongyu Kan, Zhaohui Wang, Hong An, Chenguang Xiao, Shuo Wang",
            title: "FcTC-UNet: Fine-grained Combination of Transformer and CNN for Thoracic Organs Segmentation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9870880" }]
          },
          {
            tag: "EMBC 2022",
            authors: "Minfan Zhao, Min Ling, Zhaohui Wang, Jun Shi, Hongyu Kan, Hong An, Wenting Han, Joseph Bartlett, Wenqi Lu",
            title: "Whole Slide Image MultiClassification of Cervical Epithelial Lesions Based on Unsupervised Pre-training",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2022",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9871149" }]
          }
        ]
      },
      {
        group: "2021",
        icon: "publications",
        items: [
          {
            tag: "BIBM 2021",
            authors: "Jun Shi, Huite Yi, Shulan Ruan, Zhaohui Wang, Xiaoyu Hao, Hong An, Wei Wei",
            title: "DARNet: Dual-Attention Residual Network for Automatic Diagnosis of COVID-19 via CT Images",
            venue: "IEEE International Conference on Bioinformatics and Biomedicine",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9669805" }]
          },
          {
            tag: "ISBI 2021",
            authors: "Huite Yi, Jun Shi, Bing Yan, Xudong Xue, Hong An, Hongyan Zhang",
            title: "Global Multi-Level Attention Network for the Segmentation of Clinical Target Volume In The Planning CT For Cervical Cancer",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9433980" }]
          },
          {
            tag: "EMBC 2021",
            authors: "Zhaohui Wang, Jun Shi, Xiaoyu Hao, Ke Wen, Xu Jin, Hong An",
            title: "Simultaneous Right Ventricle End-diastolic and End-systolic Frame Identification and Landmark Detection on Echocardiography",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9630310" }]
          },
          {
            tag: "TCRT 2021",
            authors: "Xudong Xue, Yi Ding, Jun Shi, Xiaoyu Hao, Xiangbin Li, Dan Li, Yuan Wu, Hong An, Man Jiang, Wei Wei",
            title: "Cone Beam CT (CBCT) Based Synthetic CT Generation Using Deep Learning Methods for Dose Calculation of Nasopharyngeal Carcinoma Radiotherapy",
            venue: "Technology in Cancer Research & Treatment",
            year: "2021",
            links: [{ label: "Source", url: "https://journals.sagepub.com/doi/10.1177/15330338211062415" }]
          },
          {
            tag: "ISBI 2021",
            authors: "Min Ling, Guofeng Lv, Jue Wang, Xiaoyu Hao, Jun Shi, Hong An",
            title: "Fast Whole Slide Image Analysis Of Cervical Cancer Using Weak Annotation",
            venue: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
            year: "2021",
            links: [{ label: "Source", url: "https://ieeexplore.ieee.org/document/9433964" }]
          }
        ]
      },
    ],
    projects: [
      { title: "Anhui Provincial Natural Science Foundation Youth Program", description: "Research on regional precipitation nowcasting based on multimodal generative models, 2025.09-2027.08." },
      { title: "Subproject of Anhui Provincial Science and Technology Innovation Project", description: "Research and development of technologies for building a meteorological-hydrological integrated forecasting foundation model, 2025.12-2028.12." },
      { title: "Huawei Center of Excellence for Education and Innovation Project", description: "Inference optimization of the Wentian meteorological model based on the Kunpeng professional version, 2025.12-2026.12." }
    ],
    apps: [
      {
        icon: "apps",
        title: "MedSketcher",
        description: "An intelligent target-volume delineation system for automated radiotherapy planning in cancer treatment.",
        url: "http://hades1.acsalab.com:1024/",
        linkText: "Campus access only"
      },
      {
        icon: "apps",
        title: "DCLDs Diagnosis",
        description: "A multimodal large-model-driven diagnosis system for rare diffuse cystic lung diseases (DCLDs).",
        url: "http://222.195.72.182:3000",
        linkText: "Campus access only"
      }
    ],
    services: [
      "MICCAI 2023-2026 reviewer",
      "ISBI 2024 reviewer",
      "ICASSP 2024 reviewer",
      "ICASSP 2026 reviewer",
      "AAAI 2026 reviewer",
      "TCAD 2026 reviewer"
    ],
    education: [
      {
        time: "2026.06 - Present",
        title: "Associate Researcher, School of Computer Science and Technology, USTC",
        description: "Lead of the AISC direction at ACSA Lab."
      },
      {
        time: "2024.08 - 2026.06",
        title: "Postdoctoral Researcher, School of Computer Science and Technology, USTC",
        description: "Lead of the AISC direction at ACSA Lab."
      },
      {
        time: "2018.09 - 2024.06",
        title: "Ph.D. Student, School of Computer Science and Technology, USTC",
        description: "Lead of the HPDA direction at ACSA Lab."
      }
    ],
    awards: [
      "2025 China Meteorological Administration AI Weather Forecasting Model Demonstration Program",
      "2025 Excellent Paper Award, Journal of Image and Graphics",
      "2025 Ocean Foundation Model Benchmark Award, Qingdao Marine AI Innovation Application Competition",
      "2024 USTC Xiaomi Young Scholar",
      "2024 USTC Mozi Outstanding Young Talent Special Allowance, First Class",
      "2024 National Top 100 Graduate Student Party Member Model",
      "2024 USTC Guo Yonghuai Scholarship",
      "2024 Outstanding Graduate of Anhui Province",
      "2024 Outstanding Graduate of USTC",
      "2023 Outstanding Communist Party Member of USTC",
      "2023 USTC-Intel Scholarship",
      "2020-2022 iFLYTEK 1024 AI Developer Competition, 10 algorithm championships, Team Leader",
      "2022 Anhui Graduate Student Party Member Model",
      "2022 USTC-Intel Scholarship",
      "2021 Top 10 Emerging AI Teams at the World Voice Expo, Team Leader",
      "2021 Intel Global AI Impact Festival, Creator Track Grand Prize, Team Leader",
      "2023 ASC Student Supercomputer Challenge Runner-up, Coach",
      "2020 ISC Student Cluster Competition Champion, Coach"
    ]
  }
};

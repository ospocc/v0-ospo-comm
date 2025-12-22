import { Users, Globe, Building } from "lucide-react"

export const communityData = {
  global: [
    {
      name: "TODO Group",
      description: "全球 OSPO 从业者的开放社区，分享最佳实践和工具",
      type: "社区",
      icon: "Users",
      url: "https://todogroup.org/",
    },
    {
      name: "Linux Foundation",
      description: "全球最大的开源基金会，支持众多重要开源项目",
      type: "基金会",
      icon: "Building",
      url: "https://www.linuxfoundation.org/",
    },
    {
      name: "Apache Software Foundation",
      description: "支持 Apache 系列开源项目的非营利组织",
      type: "基金会",
      icon: "Building",
      url: "https://www.apache.org/",
    },
    {
      name: "Cloud Native Computing Foundation",
      description: "推动云原生技术发展的开源基金会",
      type: "基金会",
      icon: "Building",
      url: "https://www.cncf.io/",
    },
    {
      name: "OpenSSF",
      description: "专注于开源软件安全的跨行业组织",
      type: "组织",
      icon: "Globe",
      url: "https://openssf.org/",
    },
    {
      name: "InnerSource Commons",
      description: "推广企业内部开源实践的全球社区",
      type: "社区",
      icon: "Users",
      url: "https://innersourcecommons.org/",
    },
  ],
  domestic: [
    {
      name: "中国开源软件推进联盟",
      description: "推动中国开源软件发展的行业联盟",
      type: "联盟",
      url: "http://www.copu.org.cn/",
    },
    {
      name: "开放原子开源基金会",
      description: "中国首个开源基金会，孵化多个重要项目",
      type: "基金会",
      url: "https://www.openatom.org/",
    },
    {
      name: "LFOSSA Linux软件学园",
      description: "Linux 基金会亚太 教育服务，推动区域开源发展",
      type: "组织",
      url: "https://training.linuxfoundation.cn/",
    },
    {
      name: "OSPO Group",
      description: "中国 OSPO 从业者交流社区",
      type: "社区",
      url: "https://ospo.event/",
    },
    {
      name: "开源之道",
      description: "开源之道 共读·对话·连接·参与",
      type: "社区",
      url: "https://opensourceway.community/",
    },
    {
      name: "OSPO.CC OSPO中文社区",
      description: "中国 OSPO 主题的开放知识社区",
      type: "社区",
      url: "https://ospo.cc/",
    },
  ],
  events: [
    {
      name: "Open Source Summit",
      description: "Linux 基金会主办的全球开源峰会",
      frequency: "每年多场",
      url: "https://events.linuxfoundation.org/open-source-summit-north-america/",
    },
    {
      name: "OSPOCon",
      description: "专注于 OSPO 的国际会议",
      frequency: "每年一次",
      url: "https://events.linuxfoundation.org/ospocon/",
    },
    {
      name: "KubeCon + CloudNativeCon",
      description: "云原生技术的旗舰会议",
      frequency: "每年多场",
      url: "https://www.cncf.io/kubecon-cloudnativecon-events/",
    },
    {
      name: "OSPO Summit中国",
      description: "中国最大的OSPO主题会议",
      frequency: "每年一次",
      url: "https://www.bagevent.com/event/ospo-summit-2025",
    },
    {
      name: "GOTC 全球开源技术峰会",
      description: "开放原子基金会主办的开源峰会",
      frequency: "每年一次",
      url: "https://gotc.oschina.net/",
    },
    {
      name: "COSCon 中国开源年会",
      description: "由开源社主办的社区驱动会议",
      frequency: "每年一次",
      url: "https://www.coscon.cn/",
    },
  ],
  participation: [
    {
      title: "加入在线社区",
      description: "大多数 OSPO 社区都有 Slack、Discord 或邮件列表。加入这些平台，与全球的 OSPO 从业者交流经验。",
    },
    {
      title: "参加线下活动",
      description: "参加开源峰会和 OSPO 专题会议，面对面交流，建立人脉网络。许多会议都有专门的 OSPO 分会场。",
    },
    {
      title: "贡献内容",
      description: "分享你的 OSPO 实践经验，撰写博客文章，在会议上演讲。帮助其他企业建立和改进他们的 OSPO。",
    },
    {
      title: "参与项目",
      description: "TODO Group 等社区有许多开源项目，如 OSPO 工具和指南。参与这些项目的开发和维护。",
    },
  ],
}

export const iconMap = {
  Users,
  Globe,
  Building,
}

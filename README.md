<!--
 * @Author: chenyingxuan chenyingxuan@abc.com
 * @Date: 2026-06-08 14:59:28
 * @LastEditors: chenyingxuan chenyingxuan@abc.com
 * @LastEditTime: 2026-06-12 16:31:36
 * @FilePath: /cccynthia33.github.io/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# cccynthia33.github.io

陈莹璇 · AI 产品经理 个人作品集

> 用 AI 重塑产品体验 — 从 PRD 到落地的全流程作品展示

## 项目简介

本仓库为个人产品经理作品集网站，展示了在 AI 产品领域的三个完整项目实践。站点采用纯前端实现，通过 GitHub Pages 部署，呈现项目背景、产品设计、技术架构与 PRD 文档。

## 项目列表

### 1. 宠宠记事本 — 多宠家庭喂养管理小程序

专为多宠家庭设计的微信小程序，涵盖喂食记录、排泄追踪、定期提醒与多宠档案管理等功能，帮助宠主科学管理宠物日常生活。

### 2. 易筑智能助手 — 建筑行业 AI 知识助手

基于 RAG 架构的建筑行业智能问答系统，支持 NL2SQL 数据查询、知识库管理、上下文感知推荐与多步骤流程引导，深度融入了大语言模型能力。

### 3. 废柴打卡器 — 情侣 & 个人习惯打卡小程序

支持单人/情侣双模式的习惯打卡小程序，提供日历打卡、连续天数追踪、月度统计与自定义打卡项等功能，兼顾趣味性与数据可视化。

## 技术栈

- **前端**: HTML5 · CSS3 · JavaScript (ES6+)
- **动画**: Canvas 粒子动画 · IntersectionObserver 滚动渐入 · 打字机效果
- **部署**: GitHub Pages
- **工具**: AI Vibe Coding 辅助开发

## 本地运行

```bash
# 克隆仓库
git clone https://github.com/cccynthia33/cccynthia33.github.io.git

# 进入目录
cd cccynthia33.github.io

# 使用任意 HTTP 服务器启动（Python 示例）
python3 -m http.server 8000

# 浏览器打开
# http://localhost:8000
```

## 目录结构

```
.
├── index.html              # 作品集首页（粒子动画 · 项目展示 · 联系信息）
├── project-pet.html        # 宠宠记事本项目详情
├── project-checkin.html    # 废柴打卡器项目详情
├── project-evo.html        # 易筑智能助手项目详情
├── prd/                    # 产品需求文档
│   ├── 宠宠记事本PRD.md
│   ├── 废柴打卡器PRD.md
│   └── 易筑智能助手AI产品PRD.md
├── assets/                 # 项目截图资源
│   ├── pet/                # 宠宠记事本截图
│   ├── checkin/            # 废柴打卡器截图
│   └── evo/                # 易筑智能助手截图
└── README.md
```


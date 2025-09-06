# 🛡️ BlueShield Alert System

A web-based disaster alert and hazard visualization system.  
BlueShield allows users to view different types of hazard alerts and visualize their impact across Indian states using an interactive map.  

---

## 📌 Features
- **Alert Types Dashboard**
  - Select hazard types (e.g., flood, cyclone, earthquake, fire).
  - Intuitive button UI with active/inactive states.
- **Interactive India Map**
  - Displays hazards on a state-wise level.
  - Hover to view details, click for alerts.
  - Color-coded severity indicators.
- **Real-Time Updates (Planned)**
  - Future integration with APIs for live disaster feeds.
- **Responsive Layout**
  - Left: Alert type controls.
  - Right: India map visualization.

---

## 🛠️ Tech Stack
- **Frontend**: React + Tailwind CSS  
- **Maps**:  
  - [`@vishalvoid/react-india-map`](https://www.npmjs.com/package/@vishalvoid/react-india-map) (interactive state-wise map)  
  - or [`react-datamaps-india`](https://www.npmjs.com/package/react-datamaps-india) (gradient-based data visualization)  
- **Package Manager**: npm  

---

## 🚀 Installation & Setup

Clone the repo:
```bash
git clone https://github.com/your-username/blueshield-alert-system.git
cd blueshield-alert-system
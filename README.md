 BudgetFlow — Modern Personal Finance Tracker

BudgetFlow is a premium, high-fidelity personal finance tracking application designed with a state-of-the-art dark mode UI, glowing glassmorphism, responsive data charts, and interactive tools to empower users to manage wealth with absolute precision.



 Features & Layout Components

The frontend application consists of a fully responsive homepage structure and clean authentication flows:

1.  Sticky Navigation 
* Features a sticky, high-z-index navigation bar with glassmorphic blur effects .
* Standard links for quick navigation, styled brand logos, and React Router routing links to sign in and sign up.

2.  Hero Section 
* Vibrant heading using a neon gradient color spectrum.
* Dynamic, interactive glass-card containing a custom **Recharts Line Chart** that acts as a real-time balance trend simulator.

3.  Spacious Metrics Bar 
* A responsive multi-column grid displaying key statistics (Capital Tracked, Active Users, Satisfaction Rate, and Savings Boost).
* Leverages CSS Grid layout  to scale cleanly on mobile, tablet, and widescreen.

4.  Financial Tool Grid
* Interactive grid of 6 cards illustrating the core components of the platform (Expense Tracking, Budgeting, Smart Analytics, and AI Spending Insights).
* Features hover effects that scale cards (`hover:scale-[1.02]`) and shift border glow strengths.

5. Interactive Analytics Showcase 
* Side-by-side interactive section highlighting high-fidelity visualizations.
* A live **Recharts Bar Chart** representing "Wealth Trajectory" that allows users to toggle datasets dynamically between `Monthly` and `Yearly` views with smooth CSS transitions.

6. Savvy Saver Reviews
* Renders reviews from individuals with customized titles, verified star ratings, and premium user avatars.

 7.  Flexible Pricing Plans 
* A beautiful three-tier layout showcasing Starter, Pro, and Enterprise subscription cards.
* The **Pro Plan** is emphasized as "Most Popular" with a glowing emerald focus border and elevated hover dimensions.

8. Premium Authentication 
* Fully complete, responsive signup and login portals.
* Features SSO login options (Google & Apple), inline email validations, input placeholders, lock/mail SVG accents, and interactive password hide/show visibility toggles.
* Integrated with **`react-toastify`** to trigger custom notification feedback upon successful authentication simulation.

---

## Technology Stack & Styling

* **Framework:** React.js (via Vite)
* **Routing:** React Router DOM (v6)
* **Styling:** CSS & Tailwind CSS v4 
* **Data Visualization:** Recharts
* **Icons Library:** Lucide React
* **Notifications:** React Toastify

---


// client/src/assets/assets.js

import G from '../assets/G.svg'
import apple from '../assets/apple.svg';
import logo from '../assets/bf-logo.svg';

export {
    G,apple,logo
}

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "BudgetFlow completely changed how I look at my money. The automated categorization has saved me at least 4 hours every month!",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "The visual analytics are incredibly smooth. I love watching my wealth trajectory climb every time I stay under budget.",
  },
  {
    name: "Rohan Das",
    role: "Financial Analyst",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "Highly detailed and secure. The ability to export clean financial reports instantly is a game-changer for tax seasons.",
  },
  {
    name: "Ananya Iyer",
    role: "Freelance Marketer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "As a freelancer, my monthly income is unpredictable. BudgetFlow's flexible savings goals keep me on track no matter what.",
  },
  {
    name: "Vikram Malhotra",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    review: "The AI spending insights alerted me to a subscription I forgot about. That insight alone paid for the service for the entire year!",
  },
];


export const pricingPlans = [
  {
    name: "Starter",
    price: "₹0",
    period: "/forever",
    buttonText: "Get Started",
    popular: false,
    features: [
      { text: "Basic Expense Tracking", included: true },
      { text: "3 Savings Goals", included: true },
      { text: "Weekly Reports", included: true },
      { text: "AI Insights", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    buttonText: "Go Pro Now",
    popular: true, // Displays 'MOST POPULAR' badge
    features: [
      { text: "Unlimited Tracking", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Unlimited Goals", included: true },
      { text: "AI Spending Insights", included: true },
      { text: "Bank Sync (Early Access)", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    buttonText: "Contact Sales",
    popular: false,
    features: [
      { text: "Multi-user Management", included: true },
      { text: "Custom API Access", included: true },
      { text: "Priority Support", included: true },
      { text: "Dedicated Success Manager", included: true },
    ],
  },
];
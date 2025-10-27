import { TrendingUp, Package, Users, Star } from 'lucide-react'
import { string } from 'three/tsl'

export const caseStudies = [
  {
    game: "Wobbly Life",
    website: "https://wobblylifegame.com",
    tagline: "From Zero to Hero: Building a Merch Empire",
    description: "We partnered with Wobbly Life to create their first-ever official merchandise store, transforming their passionate fanbase into a thriving merch community with personalized products and premium quality.",
    stats: [
      {
        icon: "TrendingUp",
        label: "Revenue Generated",
        value: "$250K+",
        change: "340% vs projection"
      },
      {
        icon: "Package",
        label: "Products Sold",
        value: "12,500+",
        change: "First 6 months"
      },
      {
        icon: "Users",
        label: "Customer Satisfaction",
        value: "4.8/5",
        change: "2,100+ reviews"
      },
      {
        icon: "Star",
        label: "Repeat Purchase Rate",
        value: "38%",
        change: "Industry avg: 18%"
      }
    ],
    products: [
      {
        name: "Wobbly Character Hoodie",
        image: "/wobbly-life/hoodie.png"
      },
      {
        name: "Personalized Player ID",
        image: "/wobbly-life/id-card.png"
      },
      {
        name: "Collector's Mug Set",
        image: "/wobbly-life/mug.png"
      },
      {
        name: "Limited Edition Poster",
        image: "/wobbly-life/poster.png"
      }
    ],
    testimonial: {
      quote: "IV Creative didn't just build us a store - they built us a revenue stream. The personalization features are exactly what our fans wanted.",
      author: "Wobbly Life Team",
      role: "Game Developers"
    },
    accentColor: "#FFD700",
    background: "bg-gradient-to-br from-yellow-900/20 to-black"
  },
  {
    game: "Enshrouded",
    website: "https://enshroudedstore.com/",
    tagline: "Premium Collectibles for a Premium Survival Game",
    description: "For Enshrouded's dedicated survival RPG community, we crafted a high-end merchandise line featuring personalized gear, limited editions, and collectibles that match the game's epic fantasy aesthetic.",
    stats: [
      {
        icon: "TrendingUp",
        label: "Launch Revenue",
        value: "$180K",
        change: "First 90 days"
      },
      {
        icon: "Package",
        label: "Limited Editions Sold",
        value: "100%",
        change: "Sold out in 48hrs"
      },
      {
        icon: "Users",
        label: "Community Engagement",
        value: "15K+",
        change: "Discord interactions"
      },
      {
        icon: "Star",
        label: "Premium Tier Sales",
        value: "62%",
        change: "vs 38% standard"
      }
    ],
    products: [
      {
        name: "Enshrouded Beanie",
        image: "/enshrouded/beanieEN.png"
      },
      {
        name: "Enshrouded Key Art Gaming mat",
        image: "/enshrouded/ENKEY.png"
      },
      {
        name: "Founders Mark Pin Badge Limited Edition Pin",
        image: "/enshrouded/fpin.png"
      },
      {
        name: "Shroudbreaker Hoodie",
        image: "/enshrouded/sensh.png"
      }
    ],
    testimonial: {
      quote: "The quality exceeded our expectations. Our players are proudly sharing their merch on social media - it's become part of the game's culture.",
      author: "Keen Games",
      role: "Enshrouded Development Team"
    },
    accentColor: "#FF6B35",
    background: "bg-gradient-to-br from-orange-900/20 to-black"
  }
]
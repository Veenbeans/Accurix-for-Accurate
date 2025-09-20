import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Dashboard specific colors
        "dashboard-bg": "hsl(var(--dashboard-bg))",
        "sidebar-bg": "hsl(var(--sidebar-bg))",
        "right-panel-bg": "hsl(var(--right-panel-bg))",
        "kpi-gradient-start": "hsl(var(--kpi-gradient-start))",
        "kpi-gradient-end": "hsl(var(--kpi-gradient-end))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        "chart-primary": "hsl(var(--chart-primary))",
        "chart-secondary": "hsl(var(--chart-secondary))",
        "chart-orange": "hsl(var(--chart-orange))",
        "chart-green": "hsl(var(--chart-green))",
        "chart-purple": "hsl(var(--chart-purple))",
        "chart-red": "hsl(var(--chart-red))",
        "chart-yellow": "hsl(var(--chart-yellow))",
        "chart-blue": "hsl(var(--chart-blue))",
        "neumorphic-shadow-light": "hsl(var(--neumorphic-shadow-light))",
        "neumorphic-shadow-dark": "hsl(var(--neumorphic-shadow-dark))",
      },
      backgroundImage: {
        'gradient-kpi': 'linear-gradient(135deg, hsl(var(--kpi-gradient-start)), hsl(var(--kpi-gradient-end)))',
        'gradient-hero': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--chart-secondary)))',
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px hsl(var(--neumorphic-shadow-dark)), -8px -8px 16px hsl(var(--neumorphic-shadow-light))',
        'neumorphic-inset': 'inset 8px 8px 16px hsl(var(--neumorphic-shadow-dark)), inset -8px -8px 16px hsl(var(--neumorphic-shadow-light))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

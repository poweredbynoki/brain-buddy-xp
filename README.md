# Brain Buddy

A cozy, gamified productivity web app that transforms overwhelming goals into achievable missions.

## Overview

Brain Buddy is a behavioral productivity platform designed to reduce the gap between intention and action. It helps users start tasks, build momentum, and maintain consistency through light gamification, companion systems, and structured mission management.

## Tech Stack

- **Frontend**: React 18 + TypeScript, Vite, React Router v7 (in `webapp/`)
- **Backend**: Hono + Bun + Prisma + SQLite (in `backend/`, port 3000)
- **Fonts**: Fraunces (display) + Nunito (body)
- **Animations**: CSS keyframes, vanilla JS canvas
- **Styling**: Inline styles with CSS variables + shadcn/ui components

## App Structure

```
/                    -> Landing page (cozy 3D diorama world hero)
/signin              -> Sign in page
/signup              -> Sign up page
/onboarding          -> Username + Theme selection + Welcome
/app/focus           -> Focus Lane (active mission, timer, companion, onboarding hints)
/app/tasks           -> Mission Inventory (list view + calendar, collapsible sections)
/app/executive       -> Executive View (analytics, reflection)
/app/intake          -> Mission Intake Hub (manual or CSV import)
/app/settings        -> Settings (theme, sound, notifications, sign out, reset)
/privacy             -> Privacy Policy page
/terms               -> Terms of Use page
```

## Key Features

1. **Focus Lane** -- Active mission card with XP/penalty display, 5-minute initiation timer, companion health, streak tracking, "Hi [username]" greeting
2. **Mission Inventory** -- List view + calendar with alternating row colors, collapsible sections, expandable tasks with mission brief and resources
3. **Mission Intake Hub** -- Manual precision mode with execution steps, AI prompt generator, CSV bulk import, inline tab switcher
4. **AI Prompt Generator** -- Expert-driven task generation with domain-specific knowledge, resource links, and structured CSV output
5. **5-Minute Initiation Timer** -- Research-backed timer with science explanations and challenge prompts to encourage starting
6. **"Make it Easier" Feature** -- Context-aware micro-step suggestions personalized to each task type
7. **XP & Gamification** -- XP rewards, penalties, level progression, daily momentum score
8. **Companion Evolution System** -- 4-stage evolution: Egg → Hatchling → Sprout → Bloom with full-screen celebration overlays
9. **Executive View** -- Decision quality, learning velocity, completion rate, daily momentum metrics
10. **Theme System** -- 6 themes: Mint, Peach, Sky Blue, Lavender, Soft Pink, Amber
11. **Landing Page** -- Cozy 3D diorama world scene with floating game elements, canvas particle effects, parallax mouse tracking
12. **Creator Feedback Popup** -- Personal message from Nuha shown after 60 seconds, once per session
13. **First-Time Guidance** -- "Start Here" onboarding hints on Focus Lane, dismissable
14. **Task Restart System** -- Completed tasks can be restarted within 3 days, then auto-removed
15. **Soft Reset** -- "Start Fresh" resets tasks and buddy without logging out
16. **Beautiful Calendar** -- Alternating row colors, weekend styling, gradient headers, task dots with animations
17. **Bottom Tab Navigation** -- Clean bottom tab bar with icons for Focus, Tasks, New, Stats, and Settings

## Buddy Evolution Stages

The companion starts as an Egg and evolves through 4 stages based on user level:

| Stage | Name | Min Level | Description |
|-------|------|-----------|-------------|
| 0 | Egg | 1 | Cute cartoon egg with blush, shell texture, and wobble animation |
| 1 | Hatchling | 3 | Small green creature with eggshell piece on head |
| 2 | Sprout | 6 | Full-bodied companion with ears and happy expression |
| 3 | Bloom | 10 | Sprout with flower crown/petals and sparkles |

When the buddy evolves:
- Full-screen celebration overlay appears
- Magical evolution sound plays
- Before/After comparison shown
- Thank you message from buddy
- Confetti and sparkle effects

## AI Prompt CSV Format

The AI prompt generates tasks in CSV format with strong emphasis on CSV-only output:
```
title,category,priority,xp,due_days,steps,resources
```

Column definitions:
- **title**: Concise task name (max 8 words)
- **category**: Work / Study / Health / Personal / Finance / Creative
- **priority**: high / medium / low
- **xp**: 20-200 based on effort
- **due_days**: Days from today (0=today, 1=tomorrow)
- **steps**: Semicolon-separated personalized micro-steps (3-5 steps)
- **resources**: Semicolon-separated helpful links/resources (YouTube tutorials, courses, Reddit communities, etc.)

The prompt is specifically designed to:
- Return CSV data only (no explanations or markdown)
- Include personalized breakdown steps based on user descriptors
- Provide real, helpful resources for each task

## Project Structure

```
/home/user/workspace/
  webapp/              <- Vite frontend (port 8000, auto-running)
    src/
      main.tsx         <- React entry point
      App.tsx          <- Routes
      context/         <- ThemeContext, UserStore, TaskStore
      components/      <- Landing, App, UI components
      pages/           <- All page components
      styles/          <- globals.css
  backend/             <- Hono API server (port 3000, auto-running)
```

## State Management

- Theme: React Context (ThemeContext) + localStorage (`bb_theme`)
- User: React Context (UserStore) + localStorage (`bb_user`)
- Tasks: React Context (TaskStore) + localStorage (`bb_tasks`)
- Buddy stage: localStorage (`bb_buddy_stage`)
- Buddy health: localStorage (`bb_buddy_health`)
- Onboarding hints: sessionStorage (`bb_onboarding_dismissed`)
- Creator feedback popup: sessionStorage (`bb_feedback_shown`)
- Collapsed sections: sessionStorage (`bb_collapsed_sections`)

## Development

Both the frontend and backend are auto-running via Vibecode services. No manual startup required.

## Security Features

The backend implements:
- **CORS Protection**: Restricted to trusted origins (localhost, vibecode.run, sandbox.dev domains)
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Rate Limiting**: 100 requests per minute per IP
- **Error Handling**: Global error handler that prevents information disclosure
- **Input Sanitization**: React's built-in XSS protection via JSX

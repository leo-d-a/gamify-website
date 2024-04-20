# Gamify

Application to improve its users' life by gamifying their goals and tasks.

## Features

- Add a task/goal, it's reward (number of points) and mark it as done when
  you complete it.

## Database structure

```mermaid
erDiagram

players {
  id string PK,FK
  username string
}
players ||--o{ quests: have

quests {
  id string PK
  player_id string FK
  title string
  description string
  xp number
}
```

## Stack

- Frontend: React TS + Next.js deployed on Vercel
- Backend: Supabase deployed on Supabase

## Commit messages

[FEAT] - new feature ||\
[CLEAN] - refactor ||\
[BUILD] - project dependancies ||\
[FIX] - fix a bug ||\
[BUG] - introduce a feature / refactor but with a bug (to avoid)

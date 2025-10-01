# ðŸ› ï¸ DECISIONES TÃ‰CNICAS - Academias Rivales

**Proyecto:** Academias Rivales  
**Fecha:** 30 de Septiembre, 2025  
**VersiÃ³n:** 1.0

---

## ðŸ“š STACK TECNOLÃ“GICO

### Frontend
- **Framework**: Next.js 14 (con App Router)
- **UI Library**: React 18
- **Estilos**: TailwindCSS 3.4
- **State Management**: Zustand (para estado global ligero)
- **Tiempo Real**: Socket.io-client
- **Juegos Visuales**: Phaser.js 3.60 (para minijuegos mÃ¡s complejos)
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod (validaciÃ³n)
- **Peticiones HTTP**: Axios

### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Express 4.18
- **Lenguaje**: TypeScript 5.x
- **Tiempo Real**: Socket.io 4.7
- **AutenticaciÃ³n**: JWT (jsonwebtoken) + bcrypt
- **ValidaciÃ³n**: Zod
- **ORM**: Prisma 5.x (para PostgreSQL)
- **Task Scheduling**: node-cron (para eventos automÃ¡ticos)

### Base de Datos
- **Principal**: PostgreSQL 15
  - Usuarios, Academias, Recursos, Misiones
  - Historial de partidas
  - Sistema de votaciones
- **Cache/Sesiones**: Redis 7
  - Sesiones activas
  - Salas de juego en tiempo real
  - Cooldowns y lÃ­mites temporales
  - Leaderboards (por rendimiento)

### DevOps e Infraestructura
- **Contenedores**: Docker + Docker Compose
- **Control de Versiones**: Git + GitHub
- **CI/CD**: GitHub Actions (cuando sea necesario)
- **Ambiente Dev**: WSL2 (Ubuntu 22.04)
- **Ambiente Staging**: Linode VPS
- **Ambiente ProducciÃ³n**: TBD (Linode o Railway/Render)

### Testing (para mÃ¡s adelante)
- **Unit Testing**: Jest
- **E2E Testing**: Playwright
- **API Testing**: Supertest

---

## ðŸ—ï¸ ARQUITECTURA DEL PROYECTO

### Estructura de Carpetas

```
academias-rivales/
â”‚
â”œâ”€â”€ frontend/                     # AplicaciÃ³n Next.js
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ app/                  # App Router de Next.js
â”‚   â”‚   â”‚   â”œâ”€â”€ (auth)/          # Rutas de autenticaciÃ³n
â”‚   â”‚   â”‚   â”œâ”€â”€ dashboard/       # Dashboard principal
â”‚   â”‚   â”‚   â”œâ”€â”€ games/           # PÃ¡ginas de minijuegos
â”‚   â”‚   â”‚   â”œâ”€â”€ academy/         # PÃ¡ginas de academia
â”‚   â”‚   â”‚   â””â”€â”€ layout.tsx
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”œâ”€â”€ ui/              # Componentes bÃ¡sicos (botones, inputs)
â”‚   â”‚   â”‚   â”œâ”€â”€ games/           # Componentes de minijuegos
â”‚   â”‚   â”‚   â”œâ”€â”€ academy/         # Componentes de academia
â”‚   â”‚   â”‚   â”œâ”€â”€ voting/          # Sistema de votaciones
â”‚   â”‚   â”‚   â””â”€â”€ shared/          # Componentes compartidos
â”‚   â”‚   â”œâ”€â”€ hooks/               # Custom React hooks
â”‚   â”‚   â”‚   â”œâ”€â”€ useSocket.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ useGame.ts
â”‚   â”‚   â”‚   â””â”€â”€ useAcademy.ts
â”‚   â”‚   â”œâ”€â”€ services/            # Servicios de API y Socket
â”‚   â”‚   â”‚   â”œâ”€â”€ api.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ socket.ts
â”‚   â”‚   â”‚   â””â”€â”€ auth.ts
â”‚   â”‚   â”œâ”€â”€ stores/              # Zustand stores
â”‚   â”‚   â”‚   â”œâ”€â”€ userStore.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ academyStore.ts
â”‚   â”‚   â”‚   â””â”€â”€ gameStore.ts
â”‚   â”‚   â”œâ”€â”€ lib/                 # Utilidades
â”‚   â”‚   â”‚   â”œâ”€â”€ constants.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ helpers.ts
â”‚   â”‚   â”‚   â””â”€â”€ validators.ts
â”‚   â”‚   â””â”€â”€ types/               # TypeScript types
â”‚   â”‚       â”œâ”€â”€ user.types.ts
â”‚   â”‚       â”œâ”€â”€ academy.types.ts
â”‚   â”‚       â””â”€â”€ game.types.ts
â”‚   â”œâ”€â”€ public/
â”‚   â”‚   â”œâ”€â”€ images/
â”‚   â”‚   â”œâ”€â”€ sounds/
â”‚   â”‚   â””â”€â”€ assets/
â”‚   â”œâ”€â”€ package.json
â”‚   â”œâ”€â”€ tsconfig.json
â”‚   â”œâ”€â”€ tailwind.config.ts
â”‚   â””â”€â”€ next.config.js
â”‚
â”œâ”€â”€ backend/                      # Servidor Node.js
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ controllers/         # LÃ³gica de negocio
â”‚   â”‚   â”‚   â”œâ”€â”€ authController.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ academyController.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ gameController.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ votingController.ts
â”‚   â”‚   â”‚   â””â”€â”€ warController.ts
â”‚   â”‚   â”œâ”€â”€ models/              # Modelos de BD (Prisma)
â”‚   â”‚   â”œâ”€â”€ routes/              # Rutas API REST
â”‚   â”‚   â”‚   â”œâ”€â”€ auth.routes.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ academy.routes.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ game.routes.ts
â”‚   â”‚   â”‚   â””â”€â”€ user.routes.ts
â”‚   â”‚   â”œâ”€â”€ sockets/             # Eventos Socket.io
â”‚   â”‚   â”‚   â”œâ”€â”€ gameSocket.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ academySocket.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ chatSocket.ts
â”‚   â”‚   â”‚   â””â”€â”€ warSocket.ts
â”‚   â”‚   â”œâ”€â”€ services/            # LÃ³gica de servicios
â”‚   â”‚   â”‚   â”œâ”€â”€ gameService.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ resourceService.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ votingService.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ warService.ts
â”‚   â”‚   â”‚   â””â”€â”€ cronService.ts
â”‚   â”‚   â”œâ”€â”€ middleware/          # Middlewares
â”‚   â”‚   â”‚   â”œâ”€â”€ auth.middleware.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ validation.middleware.ts
â”‚   â”‚   â”‚   â””â”€â”€ rateLimit.middleware.ts
â”‚   â”‚   â”œâ”€â”€ utils/               # Utilidades
â”‚   â”‚   â”‚   â”œâ”€â”€ constants.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ helpers.ts
â”‚   â”‚   â”‚   â””â”€â”€ logger.ts
â”‚   â”‚   â”œâ”€â”€ types/               # TypeScript types
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”œâ”€â”€ config/              # Configuraciones
â”‚   â”‚   â”‚   â”œâ”€â”€ database.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ redis.ts
â”‚   â”‚   â”‚   â””â”€â”€ socket.ts
â”‚   â”‚   â””â”€â”€ server.ts            # Punto de entrada
â”‚   â”œâ”€â”€ prisma/
â”‚   â”‚   â”œâ”€â”€ schema.prisma
â”‚   â”‚   â”œâ”€â”€ migrations/
â”‚   â”‚   â””â”€â”€ seed.ts
â”‚   â”œâ”€â”€ package.json
â”‚   â”œâ”€â”€ tsconfig.json
â”‚   â””â”€â”€ .env
â”‚
â”œâ”€â”€ shared/                       # CÃ³digo compartido (opcional)
â”‚   â””â”€â”€ types/                    # Types compartidos entre front y back
â”‚
â”œâ”€â”€ docker-compose.yml            # PostgreSQL + Redis
â”œâ”€â”€ .gitignore
â””â”€â”€ README.md
```

---

## ðŸ” SISTEMA DE AUTENTICACIÃ“N

### Flujo de AutenticaciÃ³n

1. Usuario se registra con email/username/password
2. Password se hashea con bcrypt (10 rounds)
3. Se genera JWT con payload:
   ```json
   {
     "userId": "uuid",
     "username": "string",
     "academyId": "uuid",
     "role": "player|moderator|admin"
   }
   ```
4. JWT se envÃ­a al cliente y se guarda en httpOnly cookie
5. Cada request incluye el JWT para autenticaciÃ³n

### Seguridad
- Passwords hasheados con bcrypt
- JWTs con expiraciÃ³n de 7 dÃ­as
- Refresh tokens para renovar sesiÃ³n
- Rate limiting en endpoints de autenticaciÃ³n
- ValidaciÃ³n de inputs con Zod en backend

---

## ðŸŒ ARQUITECTURA DE TIEMPO REAL (Socket.io)

### Namespaces

```javascript
// Socket.io organization
/game       â†’ Para partidas en tiempo real
/academy    â†’ Para actualizaciones de academia
/chat       â†’ Para chat en tiempo real
/war        â†’ Para eventos de guerra
/global     â†’ Para eventos globales (Eclipse Oscuro)
```

### Rooms

```javascript
// Ejemplo de rooms
academy:${academyId}          â†’ Todos los miembros de una academia
game:${gameId}                â†’ Jugadores en una partida especÃ­fica
war:${warId}                  â†’ Academias en guerra
global:all                    â†’ Todos los usuarios conectados
```

### Eventos Principales

**Cliente â†’ Servidor:**
- `game:join` - Unirse a una partida
- `game:move` - Realizar jugada
- `chat:message` - Enviar mensaje
- `vote:cast` - Emitir voto
- `war:challenge` - Desafiar en guerra

**Servidor â†’ Cliente:**
- `game:update` - ActualizaciÃ³n de estado del juego
- `academy:resources` - Recursos actualizados
- `chat:newMessage` - Nuevo mensaje
- `vote:result` - Resultado de votaciÃ³n
- `war:notification` - NotificaciÃ³n de guerra

---

## ðŸ’¾ ESTRUCTURA DE BASE DE DATOS

### Tablas Principales (Prisma Schema)

```prisma
// Users
model User {
  id            String    @id @default(uuid())
  username      String    @unique
  email         String    @unique
  passwordHash  String
  level         Int       @default(1)
  xp            Int       @default(0)
  academyId     String?
  academy       Academy?  @relation(fields: [academyId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Academies
model Academy {
  id                String   @id @default(uuid())
  name              String   @unique
  color             String
  philosophy        String
  bonusType         String
  bonusValue        Float
  prestigePoints    Int      @default(0)
  crystals          Int      @default(0)
  essences          Int      @default(0)
  mentalEnergy      Int      @default(0)
  coreState         String   @default("WEAK")
  members           User[]
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

// Games
model Game {
  id              String    @id @default(uuid())
  type            String
  status          String    @default("WAITING")
  players         Json
  winner          String?
  duration        Int?
  createdAt       DateTime  @default(now())
  completedAt     DateTime?
}

// Votes
model Vote {
  id              String    @id @default(uuid())
  proposalId      String
  userId          String
  academyId       String
  votesCount      Int       @default(1)
  energySpent     Int
  createdAt       DateTime  @default(now())
}

// Wars
model War {
  id                String    @id @default(uuid())
  attackerAcademyId String
  defenderAcademyId String
  status            String    @default("PREPARATION")
  startDate         DateTime
  endDate           DateTime
  attackerWins      Int       @default(0)
  defenderWins      Int       @default(0)
  resourcesStolen   Json
  createdAt         DateTime  @default(now())
}

// Missions
model Mission {
  id              String    @id @default(uuid())
  type            String
  title           String
  description     String
  objectives      Json
  rewards         Json
  expiryDate      DateTime
  isDaily         Boolean   @default(true)
  createdAt       DateTime  @default(now())
}
```

---

## ðŸ”„ FLUJO DE DATOS

### Ejemplo: Jugar una Partida de Trivia

```
1. Usuario click "Jugar Trivia"
   â†“
2. Frontend â†’ Socket.io: emit('game:join', { gameType: 'trivia' })
   â†“
3. Backend â†’ Redis: Buscar sala disponible o crear nueva
   â†“
4. Backend â†’ Socket.io: emit('game:matched', { gameId, opponent })
   â†“
5. Frontend: Renderiza juego de Trivia
   â†“
6. Usuario responde pregunta
   â†“
7. Frontend â†’ Socket.io: emit('game:answer', { answer })
   â†“
8. Backend: Valida respuesta (server-side)
   â†“
9. Backend â†’ PostgreSQL: Actualiza estadÃ­sticas
   â†“
10. Backend â†’ PostgreSQL: Agrega recursos a academia
    â†“
11. Backend â†’ Socket.io: emit('game:result', { winner, resources })
    â†“
12. Frontend: Muestra resultado y recursos ganados
```

---

## ðŸŽ® LÃ“GICA DE MINIJUEGOS

### Principios Fundamentales

1. **Server Authority**: La lÃ³gica del juego SIEMPRE se ejecuta en el servidor
2. **Client Prediction**: El cliente predice el resultado para mejor UX
3. **Reconciliation**: El servidor envÃ­a el estado real y el cliente se ajusta
4. **Anti-Cheat**: Todas las acciones se validan server-side

### Ejemplo: ValidaciÃ³n de Trivia

```typescript
// Backend: gameService.ts
export function validateAnswer(question: Question, answer: string): boolean {
  // Validar en servidor, NUNCA confiar en el cliente
  return question.correctAnswer === answer;
}

// Frontend: Optimistic update
function handleAnswer(answer: string) {
  // Mostrar feedback inmediato
  setSelectedAnswer(answer);
  
  // Enviar al servidor
  socket.emit('game:answer', { answer });
  
  // Esperar confirmaciÃ³n del servidor
  socket.once('game:result', (result) => {
    // Ajustar UI segÃºn resultado real
    if (result.correct) {
      showSuccess();
    } else {
      showError();
    }
  });
}
```

---

## â° TAREAS AUTOMATIZADAS (Cron Jobs)

### Jobs Programados

```typescript
// Backend: cronService.ts

// DIARIO a las 6:00 AM
cron.schedule('0 6 * * *', async () => {
  await generateDailyMissions();
});

// DIARIO a las 11:59 PM
cron.schedule('59 23 * * *', async () => {
  await resetDailyStats();
  await consumeAcademyCoreEnergy(2000);
});

// SEMANAL: Domingo a las 8 PM
cron.schedule('0 20 * * 0', async () => {
  await openCouncilVoting();
});

// SEMANAL: Martes a las 8 PM
cron.schedule('0 20 * * 2', async () => {
  await closeCouncilVoting();
  await executeVotingResults();
});

// MENSUAL: Primer dÃ­a del mes
cron.schedule('0 0 1 * *', async () => {
  await electArcanoSupremo();
  await electConsejeros();
});
```

---

## ðŸ“Š SISTEMA DE CACHÃ‰ (Redis)

### Uso de Redis

```typescript
// Estructura de keys en Redis

// Sesiones de usuario
`session:${userId}` â†’ { token, academyId, lastActive }

// Salas de juego activas
`room:${gameId}` â†’ { players, state, createdAt }

// Cooldowns
`cooldown:attack:${academyId}` â†’ timestamp (TTL: 1 semana)
`cooldown:vote:${userId}` â†’ timestamp (TTL: 48 horas)

// Leaderboards
`leaderboard:prestige` â†’ Sorted Set de academias
`leaderboard:daily:${userId}` â†’ Stats del dÃ­a

// Cache de recursos
`academy:${academyId}:resources` â†’ { crystals, essences, energy }
```

### Estrategia de Cache

- **Write-Through**: Escribir en Redis y PostgreSQL simultÃ¡neamente
- **TTL**: Cache expira segÃºn frecuencia de cambio
- **Invalidation**: Invalidar cache cuando se actualiza en BD

---

## ðŸ”’ SEGURIDAD

### Medidas Implementadas

1. **ValidaciÃ³n de Inputs**: Zod en backend para todos los endpoints
2. **Rate Limiting**: LÃ­mite de requests por IP/usuario
3. **SQL Injection**: Prisma previene automÃ¡ticamente
4. **XSS**: SanitizaciÃ³n de inputs en frontend y backend
5. **CSRF**: Tokens CSRF en formularios importantes
6. **CORS**: ConfiguraciÃ³n estricta de CORS
7. **Helmet**: Headers de seguridad HTTP
8. **Environment Variables**: Secretos en .env (nunca en cÃ³digo)

### Rate Limits

```typescript
// Ejemplos de rate limits
POST /api/auth/login      â†’ 5 requests/minuto
POST /api/auth/register   â†’ 3 requests/minuto
POST /api/vote            â†’ 10 requests/minuto
POST /api/game/join       â†’ 30 requests/minuto
```

---

## ðŸš€ OPTIMIZACIONES DE RENDIMIENTO

### Frontend
- Code splitting por ruta (Next.js automÃ¡tico)
- Lazy loading de componentes pesados (Phaser games)
- MemoizaciÃ³n de componentes con React.memo
- Debouncing de inputs
- Infinite scroll para listas largas
- Service Worker para PWA (opcional)

### Backend
- IndexaciÃ³n de BD en columnas frecuentes
- Connection pooling para PostgreSQL
- Redis para queries repetitivas
- PaginaciÃ³n en endpoints que retornan listas
- CompresiÃ³n de respuestas HTTP (gzip)

---

## ðŸ“ CONVENCIONES DE CÃ“DIGO

### Naming Conventions

- **Variables/Funciones**: camelCase
- **Componentes React**: PascalCase
- **Archivos**: kebab-case o PascalCase (componentes)
- **Constantes**: UPPER_SNAKE_CASE
- **Database Tables**: PascalCase (Prisma)

### Git Conventions

```bash
# Formato de commits
feat: agregar sistema de votaciÃ³n
fix: corregir bug en cÃ¡lculo de recursos
refactor: mejorar estructura de sockets
docs: actualizar README

# Branches
main              â†’ ProducciÃ³n
develop           â†’ Desarrollo principal
feature/nombre    â†’ Nuevas caracterÃ­sticas
bugfix/nombre     â†’ CorrecciÃ³n de bugs
hotfix/nombre     â†’ Fixes urgentes en producciÃ³n
```

### TypeScript

- Strict mode activado
- Evitar `any`, usar `unknown` si es necesario
- Interfaces para objetos, Types para unions/intersections
- Tipos compartidos en carpeta `/shared/types`

---

## ðŸŒ VARIABLES DE ENTORNO

### Backend (.env)

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/academias_db"

# Redis
REDIS_URL="redis://localhost:6379"

# JWT
JWT_SECRET="tu-secret-super-seguro-aqui"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="development"

# CORS
ALLOWED_ORIGINS="http://localhost:3000"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (.env.local)

```bash
# API
NEXT_PUBLIC_API_URL="http://localhost:5000"
NEXT_PUBLIC_SOCKET_URL="http://localhost:5000"

# Environment
NEXT_PUBLIC_ENV="development"
```

---

## ðŸ“¦ DEPENDENCIAS PRINCIPALES

### Frontend (package.json)

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "socket.io-client": "^4.7.0",
    "zustand": "^4.4.0",
    "axios": "^1.6.0",
    "phaser": "^3.60.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "@types/react": "^18.2.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

### Backend (package.json)

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "socket.io": "^4.7.0",
    "@prisma/client": "^5.7.0",
    "jsonwebtoken": "^9.0.0",
    "bcrypt": "^5.1.0",
    "redis": "^4.6.0",
    "zod": "^3.22.0",
    "node-cron": "^3.0.0",
    "helmet": "^7.1.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "prisma": "^5.7.0",
    "@types/express": "^4.17.0",
    "@types/node": "^20.10.0",
    "ts-node-dev": "^2.0.0",
    "eslint": "^8.55.0"
  }
}
```

---

## ðŸŽ¯ PRÃ“XIMOS PASOS TÃ‰CNICOS

1. âœ… Setup de WSL2 con Ubuntu 22.04
2. âœ… InstalaciÃ³n de Node.js 20 con nvm
3. âœ… ConfiguraciÃ³n de Docker Compose
4. [ ] Inicializar proyectos (frontend y backend)
5. [ ] Configurar Prisma y crear schema
6. [ ] Setup de Socket.io bÃ¡sico
7. [ ] Implementar autenticaciÃ³n
8. [ ] Crear primer minijuego (Trivia)

---

**Documento creado el 30 de Septiembre, 2025**  
**Ãšltima actualizaciÃ³n: 30 de Septiembre, 2025**

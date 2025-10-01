# ðŸ—ºï¸ ROADMAP DE DESARROLLO - Academias Rivales

**Proyecto:** Academias Rivales  
**Fecha de Inicio:** 30 de Septiembre, 2025  
**DuraciÃ³n Estimada:** 6-8 meses para MVP completo

---

## ðŸ“‹ VISIÃ“N GENERAL

### Objetivo del MVP (VersiÃ³n 1.0)
Lanzar una plataforma funcional con:
- 3-4 minijuegos jugables
- Sistema de academias completamente funcional
- MecÃ¡nica de recursos y votaciones
- Sistema de guerras entre academias
- Al menos 1 evento mensual (Eclipse Oscuro)

### Criterios de Ã‰xito
- âœ… 100+ usuarios activos en beta cerrada
- âœ… 5 academias activas con mÃ­nimo 20 miembros cada una
- âœ… Juegos funcionando sin lag (<100ms latencia)
- âœ… Sistema de votaciÃ³n usado semanalmente
- âœ… Al menos 1 guerra completada exitosamente

---

## ðŸ—ï¸ FASE 0: SETUP INICIAL (1-2 semanas)

### Objetivos
Preparar el ambiente de desarrollo y estructura base del proyecto.

### Tareas

#### Ambiente de Desarrollo
- [ ] Instalar Ubuntu 22.04 en WSL2
- [ ] Configurar Node.js 20 con nvm
- [ ] Instalar Docker Desktop y verificar integraciÃ³n con WSL2
- [ ] Configurar VS Code con extensiones necesarias
- [ ] Crear repositorio en GitHub

#### Estructura del Proyecto
- [ ] Crear estructura de carpetas (frontend/backend)
- [ ] Inicializar proyecto Next.js (frontend)
- [ ] Inicializar proyecto Express (backend)
- [ ] Configurar TypeScript en ambos proyectos
- [ ] Setup de ESLint y Prettier

#### Base de Datos e Infraestructura
- [ ] Crear `docker-compose.yml` para PostgreSQL y Redis
- [ ] Levantar contenedores y verificar conexiÃ³n
- [ ] Configurar Prisma en el backend
- [ ] Crear schema inicial de Prisma
- [ ] Ejecutar primera migraciÃ³n

#### DocumentaciÃ³n
- [ ] Crear README.md principal
- [ ] Documentar comandos de desarrollo
- [ ] Crear .env.example para ambos proyectos

### Entregable
âœ… Proyecto inicializado con frontend, backend, y base de datos funcionando localmente.

---

## ðŸŽ¯ FASE 1: FUNDACIÃ“N (2-3 semanas)

### Objetivos
Implementar la base del sistema: autenticaciÃ³n, modelos de datos principales y Socket.io.

### Tareas

#### Sistema de AutenticaciÃ³n
- [ ] Crear modelo User en Prisma
- [ ] Implementar registro de usuarios (POST /api/auth/register)
- [ ] Implementar login (POST /api/auth/login)
- [ ] Implementar JWT y refresh tokens
- [ ] Crear middleware de autenticaciÃ³n
- [ ] Proteger rutas privadas
- [ ] PÃ¡gina de registro en frontend
- [ ] PÃ¡gina de login en frontend
- [ ] Manejo de sesiÃ³n en frontend (Zustand store)

#### Modelos de Base de Datos
- [ ] Crear modelo Academy en Prisma
- [ ] Crear modelo Game en Prisma
- [ ] Crear modelo Resource en Prisma
- [ ] Crear modelo Vote en Prisma
- [ ] Crear modelo Mission en Prisma
- [ ] Ejecutar migraciones

#### Socket.io Setup
- [ ] Configurar Socket.io en backend
- [ ] Crear namespaces bÃ¡sicos (/game, /academy, /chat)
- [ ] Implementar autenticaciÃ³n de sockets
- [ ] Configurar Socket.io client en frontend
- [ ] Crear custom hook useSocket
- [ ] Probar conexiÃ³n y eventos bÃ¡sicos

#### UI BÃ¡sica
- [ ] Crear sistema de diseÃ±o base (colores, fuentes)
- [ ] Componentes UI bÃ¡sicos (Button, Input, Card)
- [ ] Layout principal de la aplicaciÃ³n
- [ ] Navbar con navegaciÃ³n
- [ ] Dashboard principal (estructura vacÃ­a)

### Entregable
âœ… Sistema de autenticaciÃ³n completo y Socket.io funcionando. Usuarios pueden registrarse, hacer login, y conectarse via WebSockets.

---

## ðŸŽ® FASE 2: PRIMER MINIJUEGO (2-3 semanas)

### Objetivos
Implementar completamente un minijuego (Trivia) con todo el flujo: matchmaking, juego, resultados, y recompensas.

### Tareas

#### Backend - LÃ³gica del Juego
- [ ] Crear servicio de Trivia (gameService.ts)
- [ ] Sistema de preguntas (crear base de datos de preguntas)
- [ ] Implementar matchmaking (encontrar oponente)
- [ ] LÃ³gica de juego en tiempo real (Socket.io)
- [ ] ValidaciÃ³n de respuestas (server-side)
- [ ] CÃ¡lculo de ganador
- [ ] DistribuciÃ³n de recursos al ganador

#### Frontend - Interfaz del Juego
- [ ] Pantalla de bÃºsqueda de partida
- [ ] Componente de pregunta de trivia
- [ ] Temporizador visual
- [ ] Mostrar respuestas del oponente en tiempo real
- [ ] Pantalla de resultados
- [ ] Animaciones de victoria/derrota
- [ ] Mostrar recursos ganados

#### Sistema de Recursos
- [ ] Endpoint para obtener recursos de academia (GET /api/academy/resources)
- [ ] Actualizar recursos despuÃ©s de cada partida
- [ ] Mostrar recursos en UI (navbar o dashboard)
- [ ] AnimaciÃ³n de recursos al ganar

#### Testing
- [ ] Probar partida completa 1v1
- [ ] Probar desconexiÃ³n durante partida
- [ ] Probar mÃºltiples partidas simultÃ¡neas
- [ ] Validar que recursos se otorguen correctamente

### Entregable
âœ… Minijuego de Trivia completamente funcional. Usuarios pueden jugar, ganar recursos, y ver resultados.

---

## ðŸ« FASE 3: SISTEMA DE ACADEMIAS (2-3 semanas)

### Objetivos
Implementar el core del sistema: crear academias, unirse, ver miembros, y gestiÃ³n bÃ¡sica.

### Tareas

#### Backend - Academias
- [ ] Endpoint para crear academia (POST /api/academy)
- [ ] Endpoint para unirse a academia (POST /api/academy/join)
- [ ] Endpoint para listar academias (GET /api/academies)
- [ ] Endpoint para obtener detalles de academia (GET /api/academy/:id)
- [ ] Endpoint para obtener miembros (GET /api/academy/:id/members)
- [ ] LÃ³gica de lÃ­mite de miembros por academia
- [ ] Sistema de bonificaciones segÃºn academia

#### Frontend - Academia
- [ ] PÃ¡gina de selecciÃ³n de academia (primera vez)
- [ ] PÃ¡gina de detalles de mi academia
- [ ] Lista de miembros con estadÃ­sticas
- [ ] VisualizaciÃ³n del NÃºcleo de Poder
- [ ] Indicador de estado del nÃºcleo (Agonizante, DÃ©bil, etc.)
- [ ] Ranking de academias (simple)

#### Sistema del NÃºcleo
- [ ] Implementar estados del nÃºcleo (Agonizante a Trascendente)
- [ ] Cron job para consumir energÃ­a semanalmente (2,000)
- [ ] Calcular efectos del nÃºcleo (+% recursos)
- [ ] Notificaciones cuando nÃºcleo cambia de estado
- [ ] VisualizaciÃ³n en tiempo real del nÃºcleo

#### Seed Data
- [ ] Crear script de seed para las 5 academias
- [ ] Poblar base de datos con academias iniciales
- [ ] Asegurar que bonificaciones estÃ©n configuradas

### Entregable
âœ… Sistema de academias funcional. Usuarios pueden elegir academia, ver miembros, y el nÃºcleo afecta el juego.

---

## ðŸ—³ï¸ FASE 4: SISTEMA DE VOTACIONES (2-3 semanas)

### Objetivos
Implementar el Consejo de Academia con votaciones semanales y propuestas.

### Tareas

#### Backend - Votaciones
- [ ] Crear modelo Proposal en Prisma
- [ ] Endpoint para crear propuesta (POST /api/proposal)
- [ ] Endpoint para votar (POST /api/proposal/:id/vote)
- [ ] Endpoint para obtener propuestas activas (GET /api/proposals)
- [ ] Sistema de "firmas" para propuestas de jugadores
- [ ] Validar que usuario tenga suficiente energÃ­a para votar
- [ ] Consumir energÃ­a al votar
- [ ] Calcular ganador de votaciÃ³n

#### Cron Jobs para Votaciones
- [ ] Job: Abrir consejo (Domingo 8 PM)
- [ ] Job: Cerrar consejo (Martes 8 PM)
- [ ] Job: Ejecutar resultados de votaciÃ³n
- [ ] Job: Notificar a todos los miembros

#### Frontend - Votaciones
- [ ] PÃ¡gina de Consejo de Academia
- [ ] Lista de propuestas activas
- [ ] UI para votar (slider para cantidad de votos)
- [ ] Mostrar energÃ­a disponible
- [ ] Crear nueva propuesta (con sistema de firmas)
- [ ] Ver resultados de votaciones pasadas
- [ ] Countdown hasta cierre de votaciÃ³n

#### Propuestas Iniciales
- [ ] Implementar propuesta: "Â¿A quiÃ©n atacar?"
- [ ] Implementar propuesta: "Â¿QuÃ© investigar?"
- [ ] Implementar propuesta: "Â¿Activar defensa reforzada?"

#### Notificaciones
- [ ] Sistema de notificaciones en tiempo real (Socket.io)
- [ ] Notificar cuando se abre votaciÃ³n
- [ ] Notificar cuando se cierra votaciÃ³n
- [ ] Notificar resultado de votaciÃ³n

### Entregable
âœ… Sistema de votaciones completo. Academias pueden votar semanalmente y las decisiones se ejecutan automÃ¡ticamente.

---

## âš”ï¸ FASE 5: SISTEMA DE GUERRAS (3-4 semanas)

### Objetivos
Implementar la mecÃ¡nica de guerras entre academias: declaraciÃ³n, combate, y robo de recursos.

### Tareas

#### Backend - Guerras
- [ ] Crear modelo War en Prisma
- [ ] Endpoint para declarar guerra (POST /api/war/declare)
- [ ] Validar que academia tenga recursos para atacar
- [ ] Crear "Campo de Batalla" (namespace Socket.io)
- [ ] Sistema de desafÃ­os durante guerra
- [ ] ValidaciÃ³n de resultados de desafÃ­os
- [ ] CÃ¡lculo de recursos robados
- [ ] Sistema de victorias defensivas (doble recompensa)
- [ ] Finalizar guerra despuÃ©s de 48 horas
- [ ] Distribuir prestigio segÃºn resultado

#### Frontend - Guerras
- [ ] Pantalla de declaraciÃ³n de guerra (desde votaciÃ³n)
- [ ] NotificaciÃ³n cuando tu academia es atacada
- [ ] PÃ¡gina de "Campo de Batalla"
- [ ] Lista de desafÃ­os activos
- [ ] Crear desafÃ­o contra jugador enemigo
- [ ] Aceptar/rechazar desafÃ­os
- [ ] Contador de victorias/derrotas
- [ ] VisualizaciÃ³n de recursos en juego
- [ ] Pantalla de resultados finales de guerra

#### LÃ­mites y Validaciones
- [ ] Solo 1 guerra por semana por academia
- [ ] No atacar a academias dÃ©biles (<20% prestigio)
- [ ] MÃ¡ximo 5 desafÃ­os por jugador por dÃ­a
- [ ] Sistema anti-farming (perder a propÃ³sito)

#### Testing
- [ ] Simular guerra completa entre dos academias
- [ ] Probar lÃ­mites de desafÃ­os
- [ ] Validar cÃ¡lculo de recursos robados
- [ ] Probar finalizaciÃ³n automÃ¡tica despuÃ©s de 48hrs

### Entregable
âœ… Sistema de guerras funcional. Academias pueden declarar guerra, combatir, y robar recursos.

---

## ðŸ”¬ FASE 6: SISTEMA DE INVESTIGACIÃ“N (1-2 semanas)

### Objetivos
Implementar el Ã¡rbol de tecnologÃ­as que academias pueden investigar.

### Tareas

#### Backend - InvestigaciÃ³n
- [ ] Crear modelo Technology en Prisma
- [ ] Seed con tecnologÃ­as TIER 1-4
- [ ] Endpoint para investigar (POST /api/research)
- [ ] Validar que academia tenga recursos
- [ ] Validar prerrequisitos (TIER anterior)
- [ ] Aplicar efectos de tecnologÃ­a investigada
- [ ] Endpoint para ver tecnologÃ­as disponibles (GET /api/research)

#### Frontend - InvestigaciÃ³n
- [ ] PÃ¡gina de Ã¡rbol de tecnologÃ­as
- [ ] VisualizaciÃ³n de TIER 1-4
- [ ] Mostrar tecnologÃ­as bloqueadas/desbloqueadas
- [ ] AnimaciÃ³n al investigar
- [ ] Tooltip con descripciÃ³n de cada tecnologÃ­a
- [ ] Mostrar tecnologÃ­as activas de mi academia

#### Efectos de TecnologÃ­as
- [ ] Implementar bonificaciÃ³n de "Memoria Mejorada" (+5% XP)
- [ ] Implementar "Reflejos Arcanos" (-10% tiempo)
- [ ] Implementar "Bibliotecas Mejoradas" (+3 cristales)
- [ ] (Implementar el resto segÃºn prioridad)

### Entregable
âœ… Sistema de investigaciÃ³n funcional. Academias pueden investigar tecnologÃ­as que dan ventajas.

---

## ðŸŽ® FASE 7: MINIJUEGOS ADICIONALES (3-4 semanas)

### Objetivos
Agregar 2-3 minijuegos mÃ¡s para diversificar la experiencia.

### Prioridad de Minijuegos
1. **Ahorcado** (descifrar runas) - Simple de implementar
2. **Memory Match** (entrenamiento mental) - MecÃ¡nica conocida
3. **Puzzle Simple** (reparar portales) - Puede ser Sliding Puzzle o Jigsaw

### Por Cada Minijuego:

#### Backend
- [ ] Crear lÃ³gica de juego en gameService
- [ ] Implementar eventos Socket.io especÃ­ficos
- [ ] ValidaciÃ³n server-side de movimientos
- [ ] Calcular ganador y recursos

#### Frontend
- [ ] DiseÃ±ar UI del juego
- [ ] Implementar lÃ³gica de juego
- [ ] Animaciones y efectos visuales
- [ ] Pantalla de resultados

#### Testing
- [ ] Probar partidas completas
- [ ] Validar distribuciÃ³n de recursos
- [ ] Probar mÃºltiples jugadores simultÃ¡neos

### Entregable
âœ… 3-4 minijuegos totales funcionando. Usuarios tienen variedad de juegos para elegir.

---

## ðŸ“… FASE 8: EVENTOS Y MISIONES (2-3 semanas)

### Objetivos
Implementar el sistema de misiones diarias y el evento mensual "Eclipse Oscuro".

### Tareas

#### Misiones Diarias
- [ ] Cron job para generar misiones a las 6 AM
- [ ] Modelo MissionProgress en Prisma
- [ ] Endpoint para obtener misiones (GET /api/missions)
- [ ] Sistema de tracking de progreso
- [ ] Endpoint para reclamar recompensa (POST /api/mission/:id/claim)
- [ ] Frontend: Lista de misiones diarias
- [ ] Frontend: Barra de progreso
- [ ] Frontend: AnimaciÃ³n al completar

#### Eclipse Oscuro (Evento Cooperativo)
- [ ] DiseÃ±ar primera amenaza: "La Plaga de Sombras"
- [ ] Cron job para iniciar evento (Ãºltima semana del mes)
- [ ] Sistema de contribuciÃ³n colectiva
- [ ] Barra de progreso global (todas las academias)
- [ ] CÃ¡lculo de recompensas si se completa
- [ ] Consecuencias si falla
- [ ] Frontend: Pantalla de evento
- [ ] Frontend: ContribuciÃ³n de cada academia
- [ ] Frontend: Contador de tiempo restante

#### Misiones Cooperativas Semanales
- [ ] Crear 3-5 misiones cooperativas
- [ ] Sistema de objetivos para toda la academia
- [ ] Recompensas de prestigio al completar

### Entregable
âœ… Sistema de misiones y eventos funcionando. Usuarios tienen objetivos diarios y eventos mensuales cooperativos.

---

## ðŸŽ¨ FASE 9: POLISH Y UX (2-3 semanas)

### Objetivos
Mejorar la experiencia de usuario, agregar animaciones, y pulir detalles visuales.

### Tareas

#### UI/UX Improvements
- [ ] Animaciones con Framer Motion
- [ ] Loading states en todas las acciones
- [ ] Skeleton screens
- [ ] Toasts para notificaciones
- [ ] Sonidos para acciones importantes
- [ ] MÃºsica de fondo (opcional, con mute)
- [ ] Modo oscuro (opcional)

#### VisualizaciÃ³n de Datos
- [ ] Dashboard con estadÃ­sticas visuales
- [ ] GrÃ¡ficos de progreso personal
- [ ] GrÃ¡ficos de progreso de academia
- [ ] Historial de partidas
- [ ] Leaderboard visual atractivo

#### Responsive Design
- [ ] Optimizar para tablet
- [ ] Optimizar para mÃ³vil (navegaciÃ³n bÃ¡sica)
- [ ] Asegurar que minijuegos funcionen en diferentes tamaÃ±os

#### Accesibilidad
- [ ] Etiquetas ARIA
- [ ] NavegaciÃ³n por teclado
- [ ] Contraste de colores adecuado
- [ ] Texto alt en imÃ¡genes

#### Onboarding
- [ ] Tutorial interactivo para nuevos usuarios
- [ ] Tooltips explicativos
- [ ] GuÃ­a de primeros pasos
- [ ] Video explicativo (opcional)

### Entregable
âœ… AplicaciÃ³n pulida y profesional. Experiencia de usuario fluida y atractiva.

---

## ðŸ§ª FASE 10: TESTING Y OPTIMIZACIÃ“N (2 semanas)

### Objetivos
Asegurar estabilidad, rendimiento, y preparar para beta cerrada.

### Tareas

#### Testing Manual
- [ ] Probar todos los flujos de usuario
- [ ] Probar cada minijuego 10+ veces
- [ ] Probar votaciones completas
- [ ] Probar guerras completas
- [ ] Probar eventos cooperativos

#### Testing Automatizado
- [ ] Unit tests para servicios crÃ­ticos
- [ ] Integration tests para endpoints principales
- [ ] E2E tests para flujos crÃ­ticos (login, jugar, votar)

#### OptimizaciÃ³n de Rendimiento
- [ ] Optimizar queries de base de datos
- [ ] Agregar Ã­ndices donde sea necesario
- [ ] Optimizar bundle size del frontend
- [ ] Lazy loading de componentes pesados
- [ ] Implementar paginaciÃ³n en listas largas
- [ ] Comprimir assets (imÃ¡genes, etc.)

#### Seguridad
- [ ] Audit de dependencias (npm audit)
- [ ] Validar todos los inputs
- [ ] Revisar permisos y autorizaciones
- [ ] Implementar rate limiting en todos los endpoints
- [ ] Sanitizar datos de usuarios

#### Monitoreo
- [ ] Setup de logging (Winston o similar)
- [ ] Error tracking (Sentry o similar - opcional)
- [ ] MÃ©tricas bÃ¡sicas (usuarios online, partidas jugadas)

### Entregable
âœ… AplicaciÃ³n estable, testeada, y optimizada. Lista para usuarios reales.

---

## ðŸš€ FASE 11: BETA CERRADA (1 mes)

### Objetivos
Lanzar con usuarios reales, recopilar feedback, y ajustar segÃºn necesidad.

### Tareas

#### Pre-Lanzamiento
- [ ] Deploy en Linode (staging)
- [ ] Configurar dominio y SSL
- [ ] Crear pÃ¡gina de "Coming Soon" o landing page
- [ ] Configurar backups automÃ¡ticos de BD
- [ ] Documentar proceso de deploy

#### InvitaciÃ³n de Beta Testers
- [ ] Invitar 50-100 usuarios iniciales
- [ ] Crear servidor de Discord para comunidad
- [ ] Documento de "CÃ³mo jugar"
- [ ] Canal de feedback y bugs

#### Monitoreo Activo
- [ ] Revisar logs diariamente
- [ ] Responder bugs crÃ­ticos en <24hrs
- [ ] Monitorear rendimiento del servidor
- [ ] Ajustar balance de juego segÃºn feedback

#### IteraciÃ³n RÃ¡pida
- [ ] Fix de bugs reportados
- [ ] Ajustes de balance (recursos, tiempos)
- [ ] Mejoras de UX segÃºn feedback
- [ ] Parches semanales

### Entregable
âœ… Beta cerrada exitosa con usuarios reales jugando. Feedback recopilado e implementado.

---

## ðŸŽ‰ FASE 12: LANZAMIENTO PÃšBLICO (DespuÃ©s de beta)

### Objetivos
Lanzar oficialmente con la primera Temporada.

### Tareas

#### Pre-Lanzamiento PÃºblico
- [ ] Fix de todos los bugs crÃ­ticos de beta
- [ ] Deploy a servidor de producciÃ³n
- [ ] Configurar CDN (Cloudflare - opcional)
- [ ] Optimizar base de datos para carga
- [ ] Preparar monitoreo de producciÃ³n

#### Marketing y Comunidad
- [ ] Crear contenido para redes sociales
- [ ] Video trailer del juego
- [ ] Post en Reddit/comunidades relevantes
- [ ] CampaÃ±a de invitaciÃ³n de usuarios

#### Temporada 1 Oficial
- [ ] Resetear todas las estadÃ­sticas
- [ ] Iniciar contador de Temporada 1
- [ ] Anunciar recompensas del final de temporada
- [ ] Evento de lanzamiento especial

#### Post-Lanzamiento
- [ ] Soporte activo 24/7 (primera semana)
- [ ] Hotfixes segÃºn sea necesario
- [ ] RecopilaciÃ³n continua de feedback
- [ ] Plan de contenido futuro

### Entregable
âœ… Juego lanzado pÃºblicamente con primera temporada activa.

---

## ðŸ“ˆ ROADMAP POST-MVP (Futuro)

### Nuevas CaracterÃ­sticas (Prioridad Media)
- [ ] Sistema de amigos
- [ ] Chat privado entre jugadores
- [ ] MÃ¡s minijuegos (Chess, Tower Defense, Word Games)
- [ ] Sistema de logros/achievements
- [ ] Perfil personalizable
- [ ] Sistema de clanes dentro de academias
- [ ] Modo torneo 1v1
- [ ] Replays de partidas

### MonetizaciÃ³n (Si aplica)
- [ ] Sistema de cosmÃ©ticos premium
- [ ] Battle Pass por temporada
- [ ] Avatares y marcos especiales
- [ ] Emotes y efectos visuales

### CaracterÃ­sticas Avanzadas (Prioridad Baja)
- [ ] App mÃ³vil nativa (React Native)
- [ ] Sistema de espectadores
- [ ] Streaming de partidas
- [ ] API pÃºblica para estadÃ­sticas
- [ ] Modo prÃ¡ctica vs IA
- [ ] Sistema de reputaciÃ³n de jugadores

---

## ðŸ“Š MÃ‰TRICAS DE Ã‰XITO

### Durante Desarrollo
- Commits por semana: 10+
- Tests passing: 100%
- Bugs crÃ­ticos: 0
- Tiempo de build: <5 minutos

### Post-Lanzamiento
- DAU (Usuarios Activos Diarios): 500+
- RetenciÃ³n dÃ­a 7: >40%
- Tiempo de sesiÃ³n promedio: >20 minutos
- Partidas jugadas por usuario/dÃ­a: 5+
- ParticipaciÃ³n en votaciones: >60% de miembros activos
- Guerras activas por semana: 3+

---

## ðŸŽ¯ HITOS IMPORTANTES

| Fecha | Hito |
|-------|------|
| Semana 2 | âœ… Setup completo |
| Semana 5 | âœ… Primer minijuego funcional |
| Semana 8 | âœ… Sistema de academias |
| Semana 11 | âœ… Votaciones activas |
| Semana 15 | âœ… Guerras funcionales |
| Semana 19 | âœ… 3-4 minijuegos totales |
| Semana 22 | âœ… Beta cerrada |
| Semana 26 | ðŸš€ **LANZAMIENTO PÃšBLICO** |

---

## ðŸ’¡ NOTAS IMPORTANTES

### Flexibilidad del Roadmap
Este roadmap es una guÃ­a, NO un contrato. Podemos:
- Cambiar el orden de fases si tiene sentido
- Agregar/quitar caracterÃ­sticas segÃºn feedback
- Ajustar tiempos segÃºn progreso real
- Priorizar bugs sobre features nuevas

### Revisiones Semanales
Cada semana revisar:
- Â¿QuÃ© se completÃ³?
- Â¿QuÃ© estÃ¡ bloqueado?
- Â¿Necesitamos ajustar prioridades?

### Scope Creep
Evitar agregar features no planeadas sin evaluar:
- Â¿Es crÃ­tico para el MVP?
- Â¿Retrasa el lanzamiento?
- Â¿Vale la pena el tiempo de desarrollo?

---

**Documento creado el 30 de Septiembre, 2025**  
**Ãšltima actualizaciÃ³n: 30 de Septiembre, 2025**

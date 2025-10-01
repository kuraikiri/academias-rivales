# ðŸ° LAS ACADEMIAS RIVALES - Documento de DiseÃ±o Completo

**Proyecto:** Plataforma de Minijuegos con Sistema de Comunidades  
**Fecha de CreaciÃ³n:** 30 de Septiembre, 2025  
**VersiÃ³n:** 1.0

---

## ðŸ“– CONCEPTO BASE

**AmbientaciÃ³n**: AÃ±o 2847 del Calendario Arcano. La magia del mundo se estÃ¡ agotando. Quedan solo **5 Academias Antiguas** que compiten por los Ãºltimos **Pozos de ManÃ¡** del continente.

**Objetivo Final**: La academia que acumule **100,000 Puntos de Prestigio** al final de la Temporada (3 meses) serÃ¡ declarada **"Academia Suprema"** y recibirÃ¡ recompensas legendarias.

---

## ðŸŽ“ LAS 5 ACADEMIAS

| Academia | Color | FilosofÃ­a | BonificaciÃ³n Ãšnica |
|----------|-------|-----------|-------------------|
| **Academia CarmesÃ­** | Rojo | Poder y Combate | +15% en juegos de estrategia |
| **Academia Azur** | Azul | Conocimiento y LÃ³gica | +15% en trivias y puzzles |
| **Academia Esmeralda** | Verde | Equilibrio y Naturaleza | +10% en TODOS los recursos |
| **Academia Ãmbar** | Naranja | Velocidad y Competencia | Partidas 20% mÃ¡s rÃ¡pidas |
| **Academia Sombra** | Morado | Astucia y EngaÃ±o | +20% al robar recursos |

**NOTA**: Los jugadores eligen UNA academia al registrarse y **NO pueden cambiar** durante la temporada.

---

## ðŸ’Ž SISTEMA DE RECURSOS (DETALLADO)

Cada academia tiene **3 tipos de recursos** que se usan para TODO:

### 1. Cristales de Conocimiento ðŸ”µ

**CÃ³mo se obtienen:**
- Ganar trivias: 10 cristales
- Completar puzzles: 8 cristales
- Ganar en ahorcado: 5 cristales

**Para quÃ© sirven:**
- Investigar nuevas tecnologÃ­as (ver secciÃ³n de investigaciÃ³n)
- Desbloquear misiones especiales
- Comprar informaciÃ³n de otras academias

### 2. Esencia de Estrategia âš”ï¸

**CÃ³mo se obtienen:**
- Ganar juegos de estrategia: 15 esencias
- Ganar duelos 1v1: 10 esencias
- Defender ataques: 20 esencias

**Para quÃ© sirven:**
- Atacar a otras academias (necesitas mÃ­nimo 100 esencias para atacar)
- Defender tu territorio (50 esencias por defensa)
- Crear alianzas formales (200 esencias)

### 3. EnergÃ­a Mental âš¡

**CÃ³mo se obtienen:**
- Participar en CUALQUIER juego: 3 energÃ­as (ganes o pierdas)
- Jugar con miembros de tu academia: +2 bonus
- Racha de 3+ victorias: +5 bonus

**Para quÃ© sirven:**
- **MUY IMPORTANTE**: Es el "combustible" de la academia
- Se necesita para VOTAR en decisiones (20 energÃ­as por voto)
- Se necesita para activar el NÃºcleo (ver abajo)
- Sin energÃ­a, la academia no puede funcionar

---

## ðŸ›ï¸ EL NÃšCLEO DE PODER

Cada academia tiene un **"NÃºcleo"** visual en el hub principal (como un cristal gigante flotante).

### Estados del NÃºcleo:

| Estado | EnergÃ­a Acumulada | Efectos |
|--------|-------------------|---------|
| **Agonizante** | 0-999 | -50% de recursos ganados, no puedes atacar |
| **DÃ©bil** | 1,000-4,999 | Funcionamiento normal |
| **Estable** | 5,000-9,999 | +10% de recursos ganados |
| **Radiante** | 10,000-19,999 | +25% de recursos, puedes atacar a 2 academias |
| **Trascendente** | 20,000+ | +50% de recursos, inmune a robos por 48hrs |

**Cada semana el NÃºcleo CONSUME 2,000 energÃ­as automÃ¡ticamente** (simulando que mantener la academia activa cuesta).

---

## ðŸ—¡ï¸ MECÃNICA DE ROBO (MUY DETALLADO)

### Â¿CÃ³mo funciona un ATAQUE?

#### PASO 1: DeclaraciÃ³n de Guerra
- El Consejo de tu academia vota atacar a otra academia
- Necesitas mayorÃ­a simple (51% de votos)
- Cuesta: **100 Esencias de Estrategia** (se restan del pool)

#### PASO 2: Periodo de PreparaciÃ³n (24 horas)
- Ambas academias son notificadas
- Se abre un **"Campo de Batalla"** especial
- Ambas academias pueden reclutar defensores/atacantes

#### PASO 3: La Batalla (48 horas)
Durante estas 48 horas hay una **"Zona de Guerra"** donde:

**Atacantes pueden:**
- Jugar minijuegos contra miembros de la academia enemiga
- Cada victoria = roban recursos especÃ­ficos:
  - Victoria en trivia = 5 Cristales robados
  - Victoria en estrategia = 10 Esencias robadas
  - Victoria en puzzle = 8 Cristales robados

**Defensores pueden:**
- Rechazar desafÃ­os del atacante
- Cada victoria = devuelves el doble de lo que intentaban robar
- Si ganas 3+ defensas seguidas = contraataque (robas tÃº)

#### PASO 4: Resultado Final
DespuÃ©s de 48 horas se cuentan:
- **Victorias totales** de cada lado
- **Recursos robados netos**
- La academia ganadora recibe **Prestigio** extra

### Ejemplo Concreto de Robo:

```
DÃA 1 - 10:00 AM
Academia CarmesÃ­ declara guerra a Academia Azur
Costo: 100 Esencias (CarmesÃ­ ahora tiene 900 esencias)

DÃA 2 - 10:00 AM (Comienza la batalla)
- Jugador de CarmesÃ­ desafÃ­a a jugador de Azur en Trivia
- Gana el de CarmesÃ­
- Azur PIERDE 5 Cristales âŒ
- CarmesÃ­ GANA 5 Cristales âœ…

- Jugador de Azur desafÃ­a a jugador de CarmesÃ­ en Puzzle
- Gana el de Azur (DEFENSA EXITOSA)
- Azur RECUPERA 10 Cristales âœ…âœ… (doble)
- CarmesÃ­ PIERDE 10 Cristales âŒ

DÃA 4 - 10:00 AM (Termina la batalla)
Resultado: Azur ganÃ³ 15 vs 12
- Azur recuperÃ³ todo + ganÃ³ 50 cristales netos
- Azur gana +500 Prestigio
- CarmesÃ­ pierde las 100 esencias que gastÃ³
```

### LÃ­mites Anti-Abuso:
- Solo puedes atacar a 1 academia por semana
- No puedes atacar a una academia que ya estÃ© en guerra
- No puedes atacar a academias con menos del 20% de tu Prestigio (protecciÃ³n a dÃ©biles)
- MÃ¡ximo 5 desafÃ­os por jugador por dÃ­a durante guerra

---

## ðŸ—³ï¸ SISTEMA DE VOTACIÃ“N Y DECISIONES

Cada **Domingo a las 8 PM** se abre un **Consejo de Academia** que dura 48 horas.

### Estructura de VotaciÃ³n:

#### 1. Propuestas AutomÃ¡ticas (siempre aparecen):
- Â¿A quÃ© academia atacar? (o "No atacar")
- Â¿QuÃ© investigar esta semana?
- Â¿Activar defensa reforzada? (cuesta 500 energÃ­as)

#### 2. Propuestas de Jugadores (cualquiera puede proponer):
- Requiere 50 firmas (50 miembros que apoyen)
- Ejemplos:
  - "Propongo alianza con Academia Esmeralda"
  - "Propongo explorar la Zona Prohibida"
  - "Propongo cambiar a nuestro lÃ­der actual"

### Sistema de Votos:
- **1 voto = 20 EnergÃ­as Mentales** (se consumen al votar)
- Puedes votar en mÃºltiples propuestas
- Puedes poner VARIOS votos en una misma opciÃ³n (apoyo fuerte)

**Ejemplo:**
```
Propuesta: Â¿A quiÃ©n atacar?
- Academia Azur: 245 votos (4,900 energÃ­as gastadas)
- Academia Ãmbar: 180 votos (3,600 energÃ­as gastadas)
- No atacar: 95 votos (1,900 energÃ­as gastadas)

GANADOR: Academia Azur serÃ¡ atacada
```

### Roles Especiales:

**Arcano Supremo** (1 por academia):
- Es elegido cada mes por votaciÃ³n
- Su voto cuenta DOBLE
- Puede vetar 1 decisiÃ³n por semana
- Puede convocar Consejo de Emergencia

**Consejeros** (5 por academia):
- Los 5 jugadores con mÃ¡s contribuciÃ³n del mes
- Sus votos cuentan 1.5x
- Pueden proponer sin necesitar 50 firmas

---

## ðŸ”¬ SISTEMA DE INVESTIGACIÃ“N

Cada semana puedes investigar **UNA** tecnologÃ­a que beneficia a TODA la academia:

### Ãrbol de Investigaciones:

#### TIER 1 (Costo: 500 Cristales)
- **Memoria Mejorada**: +5% XP en juegos de memoria
- **Reflejos Arcanos**: -10% tiempo en juegos rÃ¡pidos
- **Bibliotecas Mejoradas**: +3 Cristales por trivia ganada

#### TIER 2 (Costo: 1,500 Cristales + investigaciÃ³n TIER 1)
- **TeletransportaciÃ³n Menor**: 2 jugadores pueden jugar juntos sin esperar cola
- **Barreras MÃ¡gicas**: Primera defensa de la semana es gratis
- **DuplicaciÃ³n Arcana**: 1 recurso aleatorio se duplica cada dÃ­a

#### TIER 3 (Costo: 5,000 Cristales + 2 investigaciones TIER 2)
- **Portal Dimensional**: Pueden jugar minijuegos de otras academias (y robar sus bonos)
- **InvocaciÃ³n Mayor**: 1 vez por mes pueden invocar un "CampeÃ³n" NPC que juega por ustedes
- **NÃºcleo Eterno**: El NÃºcleo consume 50% menos energÃ­a

#### TIER 4 (Costo: 15,000 Cristales + todas TIER 3)
- **Trascendencia**: La academia puede mantener 2 investigaciones activas simultÃ¡neamente
- **Eclipse Arcano**: 1 vez por temporada pueden "robar" una investigaciÃ³n de otra academia

---

## ðŸ“… CICLOS DE JUEGO

### CICLO DIARIO

**6:00 AM**: Aparecen 3 misiones diarias aleatorias
- "Gana 5 trivias" â†’ +50 Cristales
- "Juega con 3 miembros diferentes" â†’ +30 EnergÃ­as
- "Completa 10 partidas" â†’ +20 de cada recurso

**8:00 PM**: BonificaciÃ³n de "Hora Pico"
- Todos los recursos se ganan x1.5 durante 2 horas
- MÃ¡s jugadores online = mejor ambiente

**11:59 PM**: Cierre del dÃ­a
- Se cuentan recursos del dÃ­a
- Se actualiza ranking diario

### CICLO SEMANAL

- **Domingo 8 PM - Martes 8 PM**: Votaciones del Consejo
- **MiÃ©rcoles**: Se ejecutan las decisiones votadas
- **Jueves-SÃ¡bado**: Periodo normal de juego
- **SÃ¡bado 8 PM**: "Evento Sorpresa" semanal
  - Pueden ser: Torneos, Invasiones, Ofertas especiales, etc.

### CICLO MENSUAL

- **Primera semana**: ElecciÃ³n de Arcano Supremo y Consejeros
- **Segunda semana**: "Gran Torneo Inter-Academias" (todos vs todos)
- **Tercera semana**: "Semana de ExploraciÃ³n" (misiones PvE difÃ­ciles)
- **Cuarta semana**: "Eclipse Oscuro" (EVENTO COOP)

---

## ðŸŒ‘ EL ECLIPSE OSCURO (EVENTO COOPERATIVO)

**Â¿QuÃ© es?**  
Una vez al mes, durante 5 dÃ­as, aparece una amenaza que afecta a TODAS las academias.

### Ejemplos de Amenazas:

#### 1. La Plaga de Sombras
- Los NÃºcleos de TODAS las academias pierden 500 energÃ­as por dÃ­a
- Deben cooperar jugando minijuegos PvE
- Si la amenaza no se derrota, TODAS pierden 50% de recursos

#### 2. El LadrÃ³n Arcano
- Un NPC poderoso roba recursos de todas las academias
- Deben votarse juntas para enviarlo a una "prisiÃ³n dimensional"
- Si no cooperan, sigue robando toda la temporada

#### 3. Grieta Dimensional
- Se abre un portal y salen monstruos
- Cada academia debe aportar "puntos de defensa" jugando
- Si no llegan al objetivo colectivo, el mapa se cierra 1 semana (no se puede jugar)

### Recompensas por Cooperar:
- TecnologÃ­as exclusivas
- Recursos masivos
- Cosmetics especiales
- TÃ­tulo temporal: "Defensor del Reino"

### Consecuencias de Fallar:
- PÃ©rdida de recursos
- El mes siguiente es mÃ¡s difÃ­cil
- Otras consecuencias narrativas

---

## â­ SISTEMA DE PRESTIGIO (EL SCORE FINAL)

Cada academia acumula **Prestigio** que es el puntaje FINAL para ganar la temporada.

### CÃ³mo Ganar Prestigio:

| AcciÃ³n | Prestigio Ganado |
|--------|------------------|
| Miembro gana una partida | +1 |
| Miembro gana 10 partidas en un dÃ­a | +25 bonus |
| Ganar una guerra | +500 |
| Investigar tecnologÃ­a TIER 2+ | +300 |
| Defender exitosamente un ataque | +400 |
| Completar misiÃ³n cooperativa semanal | +200 |
| Alcanzar NÃºcleo Trascendente | +100/dÃ­a |
| Formar alianza formal | +150 |
| Romper alianza (traiciÃ³n) | +300 pero -50% recursos 3 dÃ­as |

### CÃ³mo Perder Prestigio:

| AcciÃ³n | Prestigio Perdido |
|--------|-------------------|
| Perder una guerra | -300 |
| NÃºcleo Agonizante por 48hrs | -500 |
| Miembros inactivos 7+ dÃ­as | -10 por miembro |
| Fallar evento Eclipse Oscuro | -1000 |

---

## ðŸ¤ SISTEMA DE ALIANZAS

### Â¿QuÃ© es una Alianza?
Dos academias pueden formar una alianza **formal** que dura mÃ­nimo 2 semanas.

### Beneficios:
- Comparten 10% de recursos ganados
- No pueden atacarse entre sÃ­
- Pueden hacer misiones cooperativas exclusivas
- Pool compartido de energÃ­as para emergencias

### Costo de Formar Alianza:
- 200 Esencias de Estrategia (cada academia)
- VotaciÃ³n mayoritaria en ambas academias
- Periodo de negociaciÃ³n de 48 horas

### Romper Alianza:
- VotaciÃ³n de 66% (super-mayorÃ­a)
- Consecuencias: Pierdes el 50% de recursos por 3 dÃ­as
- Ganas 300 Prestigio pero la otra academia te odia

### Alianzas Temporales vs Formales:

**Temporal** (cualquier momento):
- Solo para 1 evento especÃ­fico
- Sin costos
- Sin penalizaciones por romperla

**Formal** (proceso completo):
- Dura mÃ­nimo 2 semanas
- Beneficios mayores
- Romperla tiene consecuencias

---

## ðŸŽ® JUSTIFICACIÃ“N NARRATIVA DE MINIJUEGOS

| Minijuego | Lore / JustificaciÃ³n |
|-----------|---------------------|
| **Trivia** | "ExÃ¡menes de Historia Arcana" - Recordar hechizos antiguos |
| **Ahorcado** | "Descifrador de Runas" - Las runas estÃ¡n incompletas |
| **Puzzles** | "Reparar Portales Dimensionales" - Reordenar fragmentos mÃ¡gicos |
| **Memory Match** | "Entrenamiento Mental" - Necesario para lanzar hechizos mÃºltiples |
| **Strategy** | "Duelos de InvocaciÃ³n" - Cada jugador invoca criaturas |
| **Tower Defense** | "Defensa del NÃºcleo" - Proteger la academia de invasiones |
| **Word Games** | "Encantamientos Verbales" - Crear hechizos con palabras |
| **Racing** | "Carrera de Escobas Arcanas" - Competencias deportivas |
| **2048** | "FusiÃ³n de Cristales" - Combinar energÃ­as mÃ¡gicas |

---

## ðŸ“Š EJEMPLO DE SEMANA COMPLETA

### LUNES
- Academia CarmesÃ­ tiene: 3,500 Cristales, 800 Esencias, 5,200 EnergÃ­as
- NÃºcleo: Estado Estable (+10% recursos)
- Aparecen misiones diarias

### MARTES (Fin de Votaciones)
- Resultado: Atacar a Academia Azur (62% votos)
- Resultado: Investigar "Memoria Mejorada" (48% votos)
- Se gastan: 100 Esencias (para atacar) + 500 Cristales (investigaciÃ³n)
- Quedan: 3,000 Cristales, 700 Esencias

### MIÃ‰RCOLES (Comienza la Guerra)
- Se abre Campo de Batalla vs Academia Azur
- Periodo de preparaciÃ³n de 24 horas
- Los jugadores se organizan en Discord para coordinarse

### JUEVES-VIERNES (Guerra Activa)
- 156 duelos totales
- CarmesÃ­ gana 89, Azur gana 67
- CarmesÃ­ roba: 450 Cristales, 230 Esencias netas
- Gana +500 Prestigio

### SÃBADO (Evento Sorpresa)
- Aparece "Torneo de la Luna Roja"
- Todos los minijuegos dan x2 Prestigio
- Hay 4 horas de competencia intensa

### DOMINGO (Nuevo Consejo)
- Se cierran votaciones anteriores
- Academia ha ganado durante la semana:
  - +2,300 Cristales (por partidas normales + guerra)
  - +800 Esencias (por partidas)
  - +1,200 EnergÃ­as (pero se consumieron 2,000 del NÃºcleo)
- Total al final: 5,300 Cristales, 1,500 Esencias, 4,400 EnergÃ­as
- **Nueva votaciÃ³n se abre**: Â¿QuÃ© hacer esta semana?

---

## ðŸŽ¯ BALANCE Y FAIRNESS

### Protecciones Anti-Snowball:
1. Academia con mÃ¡s Prestigio tiene -10% en recursos ganados
2. Academia con menos Prestigio tiene +15% en recursos ganados
3. No puedes atacar a academias con menos del 20% de tu Prestigio
4. Eventos Eclipse FUERZAN cooperaciÃ³n

### Protecciones Anti-Inactividad:
1. Si un miembro no juega 7 dÃ­as, no puede votar
2. Si 30%+ de la academia estÃ¡ inactiva, pierden Prestigio automÃ¡tico
3. Pueden "exiliar" miembros inactivos por votaciÃ³n

### Sistema Anti-Trampas:
1. Todas las partidas validadas server-side
2. Imposible manipular resultados
3. Matches sospechosos se investigan (ej: perder a propÃ³sito 50 veces)

---

## ðŸ† FINAL DE TEMPORADA (3 MESES)

### Semana Final:
- **NO hay votaciones** (se juega con lo que tienen)
- **NO se pueden investigar** nuevas tecnologÃ­as
- **SOLO se puede acumular Prestigio** mediante partidas

### Ceremonia de Cierre:
Academia ganadora recibe:
- TÃ­tulo permanente: "Magos Supremos S1"
- Cosmetics legendarios exclusivos
- Su nombre en el "SalÃ³n de la Fama"
- Avatar especial Ãºnico
- Descuento 20% en prÃ³xima temporada (microtransacciones)

### Temporada 2:
- Se resetean recursos (todos empiezan de 0)
- Se mantienen niveles individuales
- Pueden cambiar de academia (solo entre temporadas)
- Nueva narrativa: "La BÃºsqueda del Artefacto Perdido"

---

## ðŸ’­ RESUMEN ULTRA-RÃPIDO

1. **5 Academias compiten** por Prestigio durante 3 meses
2. **Jugar minijuegos** genera 3 tipos de recursos
3. **Cada semana votan** quÃ© hacer (atacar, investigar, aliarse)
4. **Pueden robarse recursos** en guerras de 48 horas
5. **Eventos mensuales** los obligan a cooperar o todos pierden
6. **Gana quien tenga mÃ¡s Prestigio** al final

---

## â“ PREGUNTAS FRECUENTES

**Â¿Por quÃ© robar?** â†’ Para debilitar rivales y ganar recursos SIN jugar tanto

**Â¿CÃ³mo se roba?** â†’ Desafiando a miembros enemigos en minijuegos durante 48hrs

**Â¿Puedo jugar solo casual?** â†’ SÃ­, puedes jugar sin votar ni participar en guerras

**Â¿QuÃ© pasa si mi academia pierde?** â†’ No pasa nada grave, la prÃ³xima temporada resetea

**Â¿Hay pay-to-win?** â†’ NO, solo cosmÃ©ticos. Skill + participaciÃ³n = victoria

---

**Documento creado el 30 de Septiembre, 2025**  
**Ãšltima actualizaciÃ³n: 30 de Septiembre, 2025**

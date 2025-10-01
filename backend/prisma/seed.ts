import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ACADEMIAS = [
  {
    name: 'Academia Carmesí',
    color: '#DC2626',
    philosophy: 'Poder y Combate',
    bonusType: 'STRATEGY_GAMES',
    bonusValue: 0.15,
    prestigePoints: 0,
    crystals: 1000,
    essences: 500,
    mentalEnergy: 5000,
    coreState: 'WEAK',
  },
  {
    name: 'Academia Azur',
    color: '#2563EB',
    philosophy: 'Conocimiento y Lógica',
    bonusType: 'TRIVIA_PUZZLES',
    bonusValue: 0.15,
    prestigePoints: 0,
    crystals: 1000,
    essences: 500,
    mentalEnergy: 5000,
    coreState: 'WEAK',
  },
  {
    name: 'Academia Esmeralda',
    color: '#059669',
    philosophy: 'Equilibrio y Naturaleza',
    bonusType: 'ALL_RESOURCES',
    bonusValue: 0.10,
    prestigePoints: 0,
    crystals: 1000,
    essences: 500,
    mentalEnergy: 5000,
    coreState: 'WEAK',
  },
  {
    name: 'Academia Ámbar',
    color: '#F59E0B',
    philosophy: 'Velocidad y Competencia',
    bonusType: 'GAME_SPEED',
    bonusValue: 0.20,
    prestigePoints: 0,
    crystals: 1000,
    essences: 500,
    mentalEnergy: 5000,
    coreState: 'WEAK',
  },
  {
    name: 'Academia Sombra',
    color: '#7C3AED',
    philosophy: 'Astucia y Engaño',
    bonusType: 'STEAL_BONUS',
    bonusValue: 0.20,
    prestigePoints: 0,
    crystals: 1000,
    essences: 500,
    mentalEnergy: 5000,
    coreState: 'WEAK',
  },
];

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Limpiar datos existentes (opcional)
  console.log('🗑️  Limpiando datos existentes...');
  // await prisma.academy.deleteMany();

  // Crear academias
  console.log('🏰 Creando academias...');
  for (const academia of ACADEMIAS) {
    const existing = await prisma.academy.findUnique({
      where: { name: academia.name },
    });

    if (!existing) {
      await prisma.academy.create({ data: academia });
      console.log(`  ✅ ${academia.name} creada`);
    } else {
      console.log(`  ⏭️  ${academia.name} ya existe`);
    }
  }

  console.log('✅ Seed completado!');
  console.log(`📊 Total de academias: ${await prisma.academy.count()}`);
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

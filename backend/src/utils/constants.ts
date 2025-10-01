export const PORT = process.env.PORT || 5000;
export const JWT_SECRET = process.env.JWT_SECRET || 'tu-secret-super-seguro-cambiame-en-produccion';
export const JWT_EXPIRES_IN = '7d';
export const BCRYPT_ROUNDS = 10;

export const CORE_STATES = {
  AGONIZING: 'AGONIZING',
  WEAK: 'WEAK',
  STABLE: 'STABLE',
  RADIANT: 'RADIANT',
  TRANSCENDENT: 'TRANSCENDENT',
} as const;

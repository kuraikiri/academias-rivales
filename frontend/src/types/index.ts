export interface User {
  id: string;
  username: string;
  email: string;
  level: number;
  xp: number;
  academyId: string | null;
  academy?: {
    id: string;
    name: string;
    color: string;
  } | null;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export interface UserAccountInterface {
  username: string,
  password: string,
}

export interface AuthState {
  user: string | null,
  error: string | null,
  loading: boolean,
  isAuthenticate: boolean
}


import { get, post } from '@/api/http'
import { encryptPassword } from '@/utils/rsa'

export interface LoginRequest {
  username: string
  password: string
  authType?: string
  userClient?: string
  appId?: string
  encrypted?: boolean
}

export interface LoginResult {
  accessToken: string
  tokenType: string
  expiresIn: number
}

export interface LoginResponse {
  code: number
  msg: string
  data: LoginResult
}

export interface SsoExchangeRequest {
  ticket: string
}

/**
 * 用户登录（密码使用 RSA 加密）
 */
export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const encryptedPwd = await encryptPassword(data.password)

  return post('/forge-report-api/auth/login', {
    username: data.username,
    password: encryptedPwd,
    authType: data.authType || 'password',
    userClient: data.userClient || 'forge_report',
    appId: data.appId || 'forge_report',
    appSecret: 'forage_pc123',
    encrypted: true,
  }) as unknown as Promise<LoginResponse>
}

/**
 * 用户登出
 */
export const logoutApi = (): Promise<any> => {
  return post('/forge-report-api/auth/logout') as Promise<any>
}

/**
 * SSO 票据交换
 */
export const ssoExchangeApi = (data: SsoExchangeRequest): Promise<LoginResponse> => {
  return post('/forge-report-api/auth/sso/exchange', data) as unknown as Promise<LoginResponse>
}

/**
 * 获取当前用户信息
 */
export const getUserInfoApi = () => {
  return get('/forge-report-api/auth/userInfo') as unknown as Promise<{ code: number; data: any; msg: string }>
}

/**
 * 获取当前用户菜单树
 */
export const getUserMenuApi = () => {
  return get('/forge-report-api/auth/current/menu') as unknown as Promise<{ code: number; data: any; msg: string }>
}

/**
 * 获取当前用户权限标识列表
 */
export const getUserPermissionsApi = () => {
  return get('/forge-report-api/auth/current/permissions') as unknown as Promise<{ code: number; data: string[]; msg: string }>
}

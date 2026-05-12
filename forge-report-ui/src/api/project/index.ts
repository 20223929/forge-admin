import { del, get, post, put } from '@/api/http'
import type { ChartEditStorage } from '@/store/modules/chartEditStore/chartEditStore.d'

export interface ForgeProject {
  id: number | string
  projectName: string
  remark?: string
  indexImg?: string
  status?: string
  canvasWidth?: number
  canvasHeight?: number
  backgroundColor?: string
  componentData?: string
  publishStatus?: string
  publishUrl?: string
  publishTime?: string
  createTime?: string
}

export interface ProjectPageResponse {
  records: ForgeProject[]
  total: number
  size: number
  current: number
}

export const getProjectPageApi = (params?: { pageNum?: number; pageSize?: number; projectName?: string }) => {
  return get('/forge-report-api/goview/project/page', params) as unknown as Promise<{ code: number; data: ProjectPageResponse; msg: string }>
}

export const getProjectDetailApi = (id: string | number) => {
  return get(`/forge-report-api/goview/project/${id}`) as unknown as Promise<{ code: number; data: ForgeProject; msg: string }>
}

export const createProjectApi = (data: Partial<ForgeProject>) => {
  return post('/forge-report-api/goview/project', data) as unknown as Promise<{ code: number; data?: any; msg: string }>
}

export const updateProjectApi = (data: Partial<ForgeProject>) => {
  return put('/forge-report-api/goview/project', data) as unknown as Promise<{ code: number; data?: any; msg: string }>
}

export const deleteProjectApi = (id: string | number) => {
  return del(`/forge-report-api/goview/project/${id}`) as unknown as Promise<{ code: number; data?: any; msg: string }>
}

export const publishProjectApi = (id: string | number, publishUrl: string) => {
  return post(`/forge-report-api/goview/project/publish/${id}?publishUrl=${encodeURIComponent(publishUrl)}`) as unknown as Promise<{ code: number; data?: any; msg: string }>
}

export const buildProjectPayload = (rawId: string | string[] | number, storageInfo: ChartEditStorage, indexImg?: string) => {
  const id = Array.isArray(rawId) ? rawId[0] : rawId
  const payload: Partial<ForgeProject> = {
    id,
    projectName: storageInfo.editCanvasConfig?.projectName || '新项目',
    canvasWidth: storageInfo.editCanvasConfig?.width,
    canvasHeight: storageInfo.editCanvasConfig?.height,
    backgroundColor: storageInfo.editCanvasConfig?.background || '',
    componentData: JSON.stringify(storageInfo),
    status: '0',
  }
  if (indexImg) {
    payload.indexImg = indexImg
  }
  return payload
}

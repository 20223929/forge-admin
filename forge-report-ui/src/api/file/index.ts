import type { AxiosRequestConfig } from 'axios'
import axiosInstance from '@/api/axios'
import { del, get, put } from '@/api/http'

export interface FileUploadResult {
  fileId: string
  fileName: string
  fileSize: number
  contentType: string
  businessType: string
  businessId?: string
  accessUrl: string
  storageType: string
  createTime?: string
}

export const uploadFileApi = async (file: File, businessType = 'project_screenshot', businessId?: string, isPrivate = true) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('businessType', businessType)
  if (businessId) {
    formData.append('businessId', businessId)
  }
  formData.append('isPrivate', String(isPrivate))

  const config: AxiosRequestConfig & { encrypt?: boolean } = {
    url: '/forge-report-api/api/file/upload',
    method: 'post',
    data: formData,
    encrypt: false
  }

  return axiosInstance(config) as unknown as Promise<{ code: number; data: FileUploadResult; msg: string }>
}

export const getFileUrlApi = (fileId: string, expires = 3600) => {
  return `/forge-report-api/api/file/url/${fileId}?expires=${expires}`
}

export const fetchFileAccessUrlApi = (fileId: string, expires = 43200) => {
  return get(`/forge-report-api/api/file/url/${fileId}`, { expires }) as unknown as Promise<{ code: number; data: string; msg: string }>
}

export interface MaterialAsset {
  id: number | string
  fileId: string
  originalName: string
  fileSize: number
  mimeType: string
  extension?: string
  storageType?: string
  businessType?: string
  businessId?: string
  isPrivate?: boolean
  accessUrl?: string
  uploadTime?: string
  downloadCount?: number
}

export interface MaterialAssetPageResponse {
  records: MaterialAsset[]
  total: number
  size: number
  current: number
}

export const REPORT_MATERIAL_BUSINESS_TYPE = 'report_material'

export const reportMaterialCategoryOptions = [
  { label: '全部素材', value: 'all' },
  { label: '背景', value: 'background' },
  { label: '面板', value: 'panel' },
  { label: '图标', value: 'icon' },
  { label: '插画', value: 'illustration' }
] as const

export type ReportMaterialCategory = typeof reportMaterialCategoryOptions[number]['value']

export const getMaterialAssetPageApi = (params?: {
  pageNum?: number
  pageSize?: number
  originalName?: string
  businessId?: string
  isPrivate?: boolean
}) => {
  return get('/forge-report-api/system/file/metadata/page', {
    pageNum: params?.pageNum ?? 1,
    pageSize: params?.pageSize ?? 24,
    businessType: REPORT_MATERIAL_BUSINESS_TYPE,
    businessId: params?.businessId,
    originalName: params?.originalName,
    isPrivate: params?.isPrivate,
    mimeType: 'image/'
  }) as unknown as Promise<{ code: number; data: MaterialAssetPageResponse; msg: string }>
}

export const deleteMaterialAssetApi = (fileId: string) => {
  return del(`/forge-report-api/system/file/metadata/delete/${fileId}`) as unknown as Promise<{ code: number; data?: boolean; msg: string }>
}

export const getMaterialAssetDownloadUrl = (fileId: string) => `/forge-report-api/api/file/download/${fileId}`

export const renameMaterialAssetApi = (fileId: string, originalName: string) => {
  const params = `fileId=${encodeURIComponent(fileId)}&originalName=${encodeURIComponent(originalName)}`
  return put(`/forge-report-api/system/file/metadata/rename?${params}`) as unknown as Promise<{ code: number; msg: string }>
}

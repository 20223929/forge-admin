import { defineStore } from 'pinia'
import { ConfigType, PackagesStoreType, PackagesType } from './packagesStore.d'
import { packagesList } from '@/packages/index'
import { deleteMaterialAssetApi, getMaterialAssetPageApi, type MaterialAsset } from '@/api/file'
import { parseFileAssetRef } from '@/utils'
import { buildMaterialUploadEntry, mapMaterialAssetToPhotoConfig } from '@/packages/components/Photos/materialAssetAdapter'
import SharePhotos from '@/packages/components/Photos/Share'

// 组件 packages
export const usePackagesStore = defineStore({
  id: 'usePackagesStore',
  state: (): PackagesStoreType => ({
    packagesList: Object.freeze(packagesList),
    newPhoto: undefined,
    materialUploadVisible: false,
    materialUploadCategory: 'background',
    materialPhotosVersion: 0
  }),
  getters: {
    getPackagesList(): PackagesType {
      return this.packagesList
    }
  },
  actions: {
    setPhotos(nextPhotos: ConfigType[]) {
      this.packagesList.Photos.splice(0, this.packagesList.Photos.length, ...nextPhotos)
      this.materialPhotosVersion += 1
    },
    async loadMaterialPhotos() {
      const response = await getMaterialAssetPageApi({
        pageNum: 1,
        pageSize: 200
      })
      const records = (response.data?.records || []) as MaterialAsset[]
      const nextPhotos = [
        buildMaterialUploadEntry(),
        ...records.map(mapMaterialAssetToPhotoConfig),
        ...SharePhotos
      ]
      this.setPhotos(nextPhotos)
    },
    addPhotos(newPhoto: ConfigType, index: number) {
      this.newPhoto = newPhoto
      this.packagesList.Photos.splice(index, 0, newPhoto)
      this.materialPhotosVersion += 1
    },
    async deletePhotos(photoInfo: ConfigType) {
      const fileId = parseFileAssetRef(photoInfo.dataset || photoInfo.image)
      if (!fileId) {
        return
      }
      await deleteMaterialAssetApi(fileId)
      await this.loadMaterialPhotos()
    },
    openMaterialUploadDialog(category = 'background') {
      this.materialUploadCategory = category
      this.materialUploadVisible = true
    },
    closeMaterialUploadDialog() {
      this.materialUploadVisible = false
    }
  }
})

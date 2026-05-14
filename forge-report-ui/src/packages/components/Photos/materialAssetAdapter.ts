import { ChartFrameEnum, ConfigType, PackagesCategoryEnum } from '@/packages/index.d'
import { ImageConfig } from '@/packages/components/Informations/Mores/Image/index'
import { ChatCategoryEnum, ChatCategoryEnumName } from './index.d'
import { createFileAssetRef } from '@/utils'
import type { MaterialAsset } from '@/api/file'
import { usePackagesStore } from '@/store/modules/packagesStore/packagesStore'

export const buildMaterialUploadEntry = (): ConfigType => ({
  ...ImageConfig,
  category: ChatCategoryEnum.PRIVATE,
  categoryName: ChatCategoryEnumName.PRIVATE,
  package: PackagesCategoryEnum.PHOTOS,
  chartFrame: ChartFrameEnum.STATIC,
  title: '上传图片',
  image: 'upload.png',
  redirectComponent: `${ImageConfig.package}/${ImageConfig.category}/${ImageConfig.key}`,
  disabled: true,
  configEvents: {
    addHandle: () => {
      const packagesStore = usePackagesStore()
      packagesStore.openMaterialUploadDialog('background')
    }
  }
})

export const mapMaterialAssetToPhotoConfig = (asset: MaterialAsset): ConfigType => {
  const fileRef = createFileAssetRef(asset.fileId)
  return {
    ...ImageConfig,
    category: ChatCategoryEnum.PRIVATE,
    categoryName: ChatCategoryEnumName.PRIVATE,
    package: PackagesCategoryEnum.PHOTOS,
    chartFrame: ChartFrameEnum.STATIC,
    title: asset.originalName,
    image: fileRef,
    dataset: fileRef,
    redirectComponent: `${ImageConfig.package}/${ImageConfig.category}/${ImageConfig.key}`
  }
}

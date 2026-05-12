/**
 * 大屏设计器 - 字体清单配置
 * label: 下拉显示名称
 * value: CSS font-family 名称（与 fonts.css 中声明的 font-family 对应）
 */
export const fontFamilyOptions = [
  /* ---------- 系统字体（无需 @font-face） ---------- */
  { label: '默认', value: '' },
  { label: '黑体 (SimHei)', value: 'SimHei' },
  { label: '宋体 (SimSun)', value: 'SimSun' },
  { label: '楷体 (KaiTi)', value: 'KaiTi' },
  { label: '微软雅黑', value: 'Microsoft YaHei' },
  { label: '苹方 (PingFang SC)', value: 'PingFang SC' },
  { label: 'Arial', value: 'Arial' },
  { label: 'Helvetica', value: 'Helvetica' },
  { label: 'Times New Roman', value: 'Times New Roman' },
  { label: 'Georgia', value: 'Georgia' },

  /* ---------- Noto Sans Hans 系列 ---------- */
  { label: 'Noto Sans Hans Black', value: 'NotoSansHans-Black' },
  { label: 'Noto Sans Hans Bold', value: 'NotoSansHans-Bold' },
  { label: 'Noto Sans Hans DemiLight', value: 'NotoSansHans-DemiLight' },
  { label: 'Noto Sans Hans Light', value: 'NotoSansHans-Light' },
  { label: 'Noto Sans Hans Medium', value: 'NotoSansHans-Medium' },
  { label: 'Noto Sans Hans Regular', value: 'NotoSansHans-Regular' },
  { label: 'Noto Sans Hans Thin', value: 'NotoSansHans-Thin' },

  /* ---------- 思源黑体 系列 ---------- */
  { label: '思源黑体 Bold', value: 'SourceHanSansCN-Bold' },
  { label: '思源黑体 ExtraLight', value: 'SourceHanSansCN-ExtraLight' },
  { label: '思源黑体 Heavy', value: 'SourceHanSansCN-Heavy' },
  { label: '思源黑体 Light', value: 'SourceHanSansCN-Light' },
  { label: '思源黑体 Medium', value: 'SourceHanSansCN-Medium' },
  { label: '思源黑体 Normal', value: 'SourceHanSansCN-Normal' },
  { label: '思源黑体 Regular', value: 'SourceHanSansCN-Regular' },

  /* ---------- 蒙纳 系列 ---------- */
  { label: '蒙纳简中黑', value: '蒙纳简中黑' },
  { label: '蒙纳简优皮', value: '蒙纳简优皮' },
  { label: '蒙纳简正线', value: '蒙纳简正线' },
  { label: '蒙纳简粗黑', value: '蒙纳简粗黑' },
  { label: '蒙纳繁长宋', value: '蒙纳繁长宋' },
  { label: '蒙纳超刚黑', value: '蒙纳超刚黑' },

  /* ---------- 方正 系列 ---------- */
  { label: '方正俊黑简体', value: '方正俊黑简体' },
  { label: '方正楷体简体', value: '方正楷体简体' },
  { label: '方正流行体简体', value: '方正流行体简体' },
  { label: '方正瘦金书简体', value: '方正瘦金书简体' },
  { label: '方正粗活意简体', value: '方正粗活意简体' },
  { label: '方正颜宋简体', value: '方正颜宋简体' },
  { label: '方正颜宋简体 中', value: '方正颜宋简体_中' },
  { label: '方正颜宋简体 大', value: '方正颜宋简体_大' },
  { label: '方正颜宋简体 纤', value: '方正颜宋简体_纤' },
  { label: '方正有猫在简体', value: '方正有猫在简体' },
  { label: '方正字迹-仿欧简体', value: '方正字迹-仿欧简体' },
  { label: '方正明尚简体', value: '方正明尚简体' },
  { label: '方正行黑简体', value: '方正行黑简体' },
  { label: '方正特雅宋简体', value: '方正特雅宋简体' },

  /* ---------- 汉仪 系列 ---------- */
  { label: '汉仪PP体简', value: '汉仪PP体简' },
  { label: '汉仪中圆简', value: '汉仪中圆简' },
  { label: '汉仪中宋简', value: '汉仪中宋简' },
  { label: '汉仪中楷简', value: '汉仪中楷简' },
  { label: '汉仪中隶书简', value: '汉仪中隶书简' },
  { label: '汉仪字典宋简', value: '汉仪字典宋简' },
  { label: '汉仪竹节体简', value: '汉仪竹节体简' },
  { label: '汉仪综艺体简', value: '汉仪综艺体简' },

  /* ---------- 创意字体 ---------- */
  { label: '不齐幻化体', value: '不齐幻化体' },
  { label: '书信体', value: '书信体' },
  { label: '京都和风体', value: '京都和风体' },
  { label: '俏黑漂游体', value: '俏黑漂游体' },
  { label: '壹心手书', value: '壹心手书' },
  { label: '布丁悠扬体', value: '布丁悠扬体' },
  { label: '文宋体', value: '文宋体' },
  { label: '新楷書体', value: '新楷書体' },
  { label: '正文宋楷', value: '正文宋楷' },
  { label: '江汉手书', value: '江汉手书' },
  { label: '星愿涟漪体', value: '星愿涟漪体' },
  { label: '机械飘旋体', value: '机械飘旋体' },
  { label: '正酷海潮体', value: '正酷海潮体' },
  { label: '正酷空灵体', value: '正酷空灵体' },
  { label: '潮玩嬉戏体', value: '潮玩嬉戏体' },
  { label: '白鹤新风体', value: '白鹤新风体' },
  { label: '综艺扇影体', value: '综艺扇影体' },
  { label: '雅宋漂泊体', value: '雅宋漂泊体' },
  { label: '飞驰标题体', value: '飞驰标题体' },
  { label: '飞鸟简雅黑', value: '飞鸟简雅黑' },
  { label: '江户川招牌体', value: '江户川招牌体' },
  { label: '新潮幻影体', value: '新潮幻影体' },
  { label: '梦幻童话体', value: '梦幻童话体' },
  { label: '飞驰影响体', value: '飞驰影响体' },
  { label: '新潮飞飞体', value: '新潮飞飞体' },
  { label: '快乐空观体', value: '快乐空观体' },
  { label: '创粗面影体', value: '创粗面影体' },
  { label: '无外漂浮体', value: '无外漂浮体' },
  { label: '小恐龙影体', value: '小恐龙影体' },
  { label: '正酷空前体', value: '正酷空前体' },
  { label: '随风手刻体', value: '随风手刻体' },
  { label: '简雅虚影体', value: '简雅虚影体' },
  { label: '萌兔趣味体', value: '萌兔趣味体' },
  { label: '星岩月影体', value: '星岩月影体' },
  { label: '创中影音体', value: '创中影音体' },
  { label: '镇魂手书', value: '镇魂手书' },
  { label: '浪漫情书体', value: '浪漫情书体' }
]

/** 默认字体（无样式时兜底） */
export const defaultFontFamily = ''

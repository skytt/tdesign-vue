/* eslint-disable */
const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc', // 普通文档
    children: [
      {
        title: '快速开始',
        titleEn: 'Quick Start',
        name: 'getting-started',
        path: '/vue/getting-started',
        component: () => import('@/site/docs/getting-started.md'),
      },
      {
        title: '最佳实践',
        titleEn: 'Best Practice',
        name: 'quick-start',
        path: '/vue/quick-start',
        component: () => import('@/site/docs/starter.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/vue/changelog',
        component: () => import('@/CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Component overview',
        name: 'overview',
        path: '/vue/overview',
        component: () => import('@common/docs/web/overview.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'doc',
    children: [
      {
        title: '全局特性配置',
        titleEn: 'Config',
        name: 'config',
        path: '/vue/config',
        component: () => import('@/examples/config-provider/config-provider.md'),
      },
      {
        title: '自定义主题',
        titleEn: 'Custom theme',
        name: 'custom-theme',
        path: '/vue/custom-theme',
        component: () => import('@common/theme.md'),
      },
      {
        title: '暗黑模式',
        titleEn: 'Dark Mode',
        name: 'dark-mode',
        path: '/vue/dark-mode',
        component: () => import('@common/dark-mode.md'),
      },
    ],
  },
  {
    title: '基础',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/vue/components/button',
        component: () => import('@/examples/button/button.md'),
        componentEn: () => import('@/examples/button/button.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/vue/components/icon',
        component: () => import('@/examples/icon/icon.md'),
        componentEn: () => import('@/examples/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Icon',
        name: 'icon',
        path: '/vue/components/link',
        component: () => import('@/examples/link/link.md'),
        componentEn: () => import('@/examples/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '布局',
    titleEn: 'Layout',
    type: 'component',
    children: [
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        path: '/vue/components/divider',
        component: () => import('@/examples/divider/divider.md'),
        componentEn: () => import('@/examples/divider/divider.en-US.md'),
      },
      {
        title: 'Grid 栅格',
        titleEn: 'Grid',
        name: 'grid',
        path: '/vue/components/grid',
        component: () => import('@/examples/grid/grid.md'),
        componentEn: () => import('@/examples/grid/grid.en-US.md'),
      },
      {
        title: 'Layout 布局',
        titleEn: 'Layout',
        name: 'layout',
        path: '/vue/components/layout',
        component: () => import('@/examples/layout/layout.md'),
        componentEn: () => import('@/examples/layout/layout.en-US.md'),
      },
      {
        title: 'Space 间距',
        titleEn: 'Space',
        name: 'space',
        path: '/vue/components/space',
        component: () => import('@/examples/space/space.md'),
        componentEn: () => import('@/examples/space/space.en-US.md'),
      },
    ],
  },
  {
    title: '导航',
    titleEn: 'Navigation',
    type: 'component',
    children: [
      {
        title: 'Affix 固钉',
        titleEn: 'Affix',
        name: 'affix',
        path: '/vue/components/affix',
        component: () => import('@/examples/affix/affix.md'),
        componentEn: () => import('@/examples/affix/affix.en-US.md'),
      },
      {
        title: 'Anchor 锚点',
        titleEn: 'Anchor',
        name: 'anchor',
        path: '/vue/components/anchor',
        component: () => import('@/examples/anchor/anchor.md'),
        componentEn: () => import('@/examples/anchor/anchor.en-US.md'),
      },
      {
        title: 'Breadcrumb 面包屑',
        titleEn: 'Breadcrumb',
        name: 'breadcrumb',
        path: '/vue/components/breadcrumb',
        component: () => import('@/examples/breadcrumb/breadcrumb.md'),
        componentEn: () => import('@/examples/breadcrumb/breadcrumb.en-US.md'),
      },
      {
        title: 'Dropdown 下拉菜单',
        titleEn: 'Dropdown',
        name: 'dropdown',
        path: '/vue/components/dropdown',
        component: () => import('@/examples/dropdown/dropdown.md'),
        componentEn: () => import('@/examples/dropdown/dropdown.en-US.md'),
      },
      {
        title: 'Jumper 跳转',
        titleEn: 'Jumper',
        name: 'jumper',
        path: '/vue/components/jumper',
        component: () => import('@/examples/jumper/jumper.md'),
        componentEn: () => import('@/examples/jumper/jumper.en-US.md'),
      },
      {
        title: 'Menu 导航菜单',
        titleEn: 'Menu',
        name: 'menu',
        path: '/vue/components/menu',
        component: () => import('@/examples/menu/menu.md'),
        componentEn: () => import('@/examples/menu/menu.en-US.md'),
      },
      {
        title: 'Pagination 分页',
        titleEn: 'Pagination',
        name: 'pagination',
        path: '/vue/components/pagination',
        component: () => import('@/examples/pagination/pagination.md'),
        componentEn: () => import('@/examples/pagination/pagination.en-US.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        path: '/vue/components/steps',
        component: () => import('@/examples/steps/steps.md'),
        componentEn: () => import('@/examples/steps/steps.en-US.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        path: '/vue/components/tabs',
        component: () => import('@/examples/tabs/tabs.md'),
        componentEn: () => import('@/examples/tabs/tabs.en-US.md'),
      },
    ],
  },
  {
    title: '输入',
    titleEn: 'Input',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Cascader 级联组件',
        titleEn: 'Cascader',
        name: 'cascader',
        path: '/vue/components/cascader',
        component: () => import('@/examples/cascader/cascader.md'),
        componentEn: () => import('@/examples/cascader/cascader.en-US.md'),
      },
      {
        title: 'Checkbox 多选框',
        titleEn: 'Checkbox',
        name: 'checkbox',
        path: '/vue/components/checkbox',
        component: () => import('@/examples/checkbox/checkbox.md'),
        componentEn: () => import('@/examples/checkbox/checkbox.en-US.md'),
      },
      {
        title: 'ColorPicker 颜色选择器',
        name: 'color-picker',
        path: '/vue/components/color-picker',
        component: () => import('@/examples/color-picker/color-picker.md'),
      },
      {
        title: 'DatePicker 日期选择器',
        titleEn: 'DatePicker',
        name: 'date-picker',
        path: '/vue/components/date-picker',
        component: () => import('@/examples/date-picker/date-picker.md'),
        componentEn: () => import('@/examples/date-picker/date-picker.en-US.md'),
      },
      {
        title: 'Form 表单',
        titleEn: 'Form',
        name: 'form',
        path: '/vue/components/form',
        component: () => import('@/examples/form/form.md'),
        componentEn: () => import('@/examples/form/form.en-US.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        path: '/vue/components/input',
        component: () => import('@/examples/input/input.md'),
        componentEn: () => import('@/examples/input/input.en-US.md'),
      },
      {
        title: 'InputAdornment 输入装饰器',
        titleEn: 'InputAdornment',
        name: 'input-adornment',
        path: '/vue/components/input-adornment',
        component: () => import('@/examples/input-adornment/input-adornment.md'),
        componentEn: () => import('@/examples/input-adornment/input-adornment.en-US.md'),
      },
      {
        title: 'InputNumber 数字输入框',
        titleEn: 'InputNumber',
        name: 'input-number',
        path: '/vue/components/input-number',
        component: () => import('@/examples/input-number/input-number.md'),
        componentEn: () => import('@/examples/input-number/input-number.en-US.md'),
      },
      {
        title: 'TagInput 标签输入框',
        titleEn: 'TagInput',
        name: 'tag-input',
        docType: 'form',
        path: '/vue/components/tag-input',
        component: () => import('@/examples/tag-input/tag-input.md'),
        componentEn: () => import('@/examples/tag-input/tag-input.en-US.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        path: '/vue/components/radio',
        component: () => import('@/examples/radio/radio.md'),
        componentEn: () => import('@/examples/radio/radio.en-US.md'),
      },
      {
        title: 'RangeInput 范围输入框',
        titleEn: 'RangeInput',
        name: 'range-input',
        path: '/vue/components/range-input',
        component: () => import('@/examples/range-input/range-input.md'),
        componentEn: () => import('@/examples/range-input/range-input.en-US.md'),
      },
      {
        title: 'Select 选择器',
        titleEn: 'Select',
        name: 'select',
        path: '/vue/components/select',
        component: () => import('@/examples/select/select.md'),
        componentEn: () => import('@/examples/select/select.en-US.md'),
      },
      {
        title: 'SelectInput 筛选器输入框',
        titleEn: 'SelectInput',
        name: 'select-input',
        docType: 'form',
        path: '/vue/components/select-input',
        component: () => import('@/examples/select-input/select-input.md'),
        componentEn: () => import('@/examples/select-input/select-input.en-US.md'),
      },
      {
        title: 'Slider 滑块',
        titleEn: 'Slider',
        name: 'slider',
        path: '/vue/components/slider',
        component: () => import('@/examples/slider/slider.md'),
        componentEn: () => import('@/examples/slider/slider.en-US.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/vue/components/switch',
        component: () => import('@/examples/switch/switch.md'),
        componentEn: () => import('@/examples/switch/switch.en-US.md'),
      },
      {
        title: 'Textarea 多行文本框',
        titleEn: 'Textarea',
        name: 'textarea',
        path: '/vue/components/textarea',
        component: () => import('@/examples/textarea/textarea.md'),
        componentEn: () => import('@/examples/textarea/textarea.en-US.md'),
      },
      {
        title: 'Transfer 穿梭框',
        titleEn: 'Transfer',
        name: 'transfer',
        path: '/vue/components/transfer',
        component: () => import('@/examples/transfer/transfer.md'),
        componentEn: () => import('@/examples/transfer/transfer.en-US.md'),
      },
      {
        title: 'TimePicker 时间选择器',
        titleEn: 'TimePicker',
        name: 'time-picker',
        path: '/vue/components/time-picker',
        component: () => import('@/examples/time-picker/time-picker.md'),
        componentEn: () => import('@/examples/time-picker/time-picker.en-US.md'),
      },
      {
        title: 'TreeSelect 树选择',
        titleEn: 'TreeSelect',
        name: 'tree-select',
        path: '/vue/components/tree-select',
        component: () => import('@/examples/tree-select/tree-select.md'),
        componentEn: () => import('@/examples/tree-select/tree-select.en-US.md'),
      },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        path: '/vue/components/upload',
        component: () => import('@/examples/upload/upload.md'),
        componentEn: () => import('@/examples/upload/upload.en-US.md'),
      },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        path: '/vue/components/avatar',
        component: () => import('@/examples/avatar/avatar.md'),
        componentEn: () => import('@/examples/avatar/avatar.en-US.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        path: '/vue/components/badge',
        component: () => import('@/examples/badge/badge.md'),
        componentEn: () => import('@/examples/badge/badge.en-US.md'),
      },
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        path: '/vue/components/calendar',
        component: () => import('@/examples/calendar/calendar.md'),
        componentEn: () => import('@/examples/calendar/calendar.en-US.md'),
      },
      {
        title: 'Card 卡片',
        titleEn: 'Card',
        name: 'card',
        docType: 'data',
        path: '/vue/components/card',
        component: () => import('@/examples/card/card.md'),
        componentEn: () => import('@/examples/card/card.en-US.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        docType: 'data',
        path: '/vue/components/collapse',
        component: () => import('@/examples/collapse/collapse.md'),
        componentEn: () => import('@/examples/collapse/collapse.en-US.md'),
      },
      {
        title: 'Comment 评论',
        titleEn: 'Comment',
        name: 'comment',
        path: '/vue/components/comment',
        component: () => import('@/examples/comment/comment.md'),
        componentEn: () => import('@/examples/comment/comment.en-US.md'),
      },
      {
        title: 'List 列表',
        titleEn: 'List',
        name: 'list',
        path: '/vue/components/list',
        component: () => import('@/examples/list/list.md'),
        componentEn: () => import('@/examples/list/list.en-US.md'),
      },
      {
        title: 'Loading 加载',
        titleEn: 'Loading',
        name: 'loading',
        path: '/vue/components/loading',
        component: () => import('@/examples/loading/loading.md'),
        componentEn: () => import('@/examples/loading/loading.en-US.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        path: '/vue/components/progress',
        component: () => import('@/examples/progress/progress.md'),
        componentEn: () => import('@/examples/progress/progress.en-US.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        path: '/vue/components/skeleton',
        component: () => import('@/examples/skeleton/skeleton.md'),
        componentEn: () => import('@/examples/skeleton/skeleton.en-US.md'),
      },
      {
        title: 'Swiper 轮播框',
        titleEn: 'Swiper',
        name: 'swiper',
        path: '/vue/components/swiper',
        component: () => import('@/examples/swiper/swiper.md'),
        componentEn: () => import('@/examples/swiper/swiper.en-US.md'),
      },
      {
        title: 'Table 表格',
        titleEn: 'Table',
        name: 'table',
        path: '/vue/components/table',
        component: () => import('@/examples/table/table.md'),
        componentEn: () => import('@/examples/table/table.en-US.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        path: '/vue/components/tag',
        component: () => import('@/examples/tag/tag.md'),
        componentEn: () => import('@/examples/tag/tag.en-US.md'),
      },
      {
        title: 'Tooltip 文字提示',
        titleEn: 'Tooltip',
        name: 'tooltip',
        path: '/vue/components/tooltip',
        component: () => import('@/examples/tooltip/tooltip.md'),
        componentEn: () => import('@/examples/tooltip/tooltip.en-US.md'),
      },
      {
        title: 'Tree 树',
        titleEn: 'Tree',
        name: 'tree',
        path: '/vue/components/tree',
        component: () => import('@/examples/tree/tree.md'),
        componentEn: () => import('@/examples/tree/tree.en-US.md'),
      },
    ],
  },
  {
    title: '消息提醒',
    titleEn: 'Notifications',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Alert 警告提醒',
        titleEn: 'Alert',
        name: 'alert',
        path: '/vue/components/alert',
        component: () => import('@/examples/alert/alert.md'),
        componentEn: () => import('@/examples/alert/alert.en-US.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        path: '/vue/components/dialog',
        component: () => import('@/examples/dialog/dialog.md'),
        componentEn: () => import('@/examples/dialog/dialog.en-US.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        path: '/vue/components/drawer',
        component: () => import('@/examples/drawer/drawer.md'),
        componentEn: () => import('@/examples/drawer/drawer.en-US.md'),
      },
      {
        title: 'Message 全局提示',
        titleEn: 'Message',
        name: 'message',
        path: '/vue/components/message',
        component: () => import('@/examples/message/message.md'),
        componentEn: () => import('@/examples/message/message.en-US.md'),
      },
      {
        title: 'Notification 消息通知',
        titleEn: 'Notification',
        name: 'notification',
        path: '/vue/components/notification',
        component: () => import('@/examples/notification/notification.md'),
        componentEn: () => import('@/examples/notification/notification.en-US.md'),
      },
      {
        title: 'Popconfirm 气泡确认框',
        titleEn: 'Popconfirm',
        name: 'popconfirm',
        path: '/vue/components/popconfirm',
        component: () => import('@/examples/popconfirm/popconfirm.md'),
        componentEn: () => import('@/examples/popconfirm/popconfirm.en-US.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/vue/components/popup',
        component: () => import('@/examples/popup/popup.md'),
        componentEn: () => import('@/examples/popup/popup.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };

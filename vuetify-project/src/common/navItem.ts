export interface navItem {
  name:string;
  icon:string;
  url:string;
}
export default {
  list: [
    {
      name: '<熱需給管理>',
    },
    {
      name: '熱需要実績・予測',
      icon: 'mdi-finance',
      url: '#'
    },
    {
      name: '供給計画',
      icon: 'mdi-finance',
      url: '#'
    },
    {
      name: '<各種設定>',
    },
    {
      name: '通知先メールアドレス',
      icon: 'mdi-email-outline',
      url: '#'
    },
    {
      name: '検針日',
      icon: 'mdi-gauge-low',
      url: '#'
    },
    {
      name: '請求金額一覧',
      icon: 'mdi-text-box-edit-outline',
      url: '#'
    },
    {
      name: 'パスワード変更',
      icon: 'mdi-key-outline',
      url: '#'
    },
    {
      name: '熱契約情報',
      icon: 'mdi-file-sign',
      url: '#'
    },
    {
      name: 'CO2排出量産出',
      icon: 'mdi-sprout-outline',
      url: '#'
    },
  ]
}
export const Routes = {
  dashboard: '/',
  login: '/login',
  logout: '/logout',
  register: '/register'

  // question: {
  //   ...routesFactory('/questions'),
  // },
}

// routes 커스텀
// function routesFactory(endpoint: string) {
//   return {
//     list: `${endpoint}`,
//     create: `${endpoint}/create`,
//     editWithoutLang: (slug: string, shop?: string) => {
//       return shop
//         ? `/${shop}${endpoint}/${slug}/edit`
//         : `${endpoint}/${slug}/edit`;
//     },
//     edit: (slug: string, language: string, shop?: string) => {
//       return shop
//         ? `/${language}/${shop}${endpoint}/${slug}/edit`
//         : `${language}${endpoint}/${slug}/edit`;
//     },
//     translate: (slug: string, language: string, shop?: string) => {
//       return shop
//         ? `/${language}/${shop}${endpoint}/${slug}/translate`
//         : `${language}${endpoint}/${slug}/translate`;
//     },
//     details: (slug: string) => `${endpoint}/${slug}`,
//   };
// }

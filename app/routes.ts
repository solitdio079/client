import { type RouteConfig } from '@react-router/dev/routes'
import { index, layout, route } from '@react-router/dev/routes'

export default [
  layout('routes/layout.tsx', [
    index('routes/home.tsx'),
    route('login', 'routes/login.tsx'),
    route('logout', 'routes/logout.tsx'),
    route('loaders/posts', 'loaders/allPosts.tsx'),
    // parent route
    route('admin', './dashboard/layout.tsx', [
      // child routes
      route('/admin/profile', './dashboard/profile.tsx'),
      route('/admin/posts', './dashboard/posts/layout.tsx', [
        //Post children
        index('./dashboard/posts/AllPosts.tsx'),
        route('create', './dashboard/posts/CreatePosts.tsx'),
        route('imagesUpload', './dashboard/posts/ImagesUpload.tsx')
      ])
    ]),
  ]),
] satisfies RouteConfig

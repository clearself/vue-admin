import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            // 如果是登陆状态跳转登录页面 就重定向首页
            next({ path: '/' })
            NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
        } else {
            // 确定用户是否已通过getInfo获得其权限角色
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) { // 如果已经通过getInfo获得其权限角色
                next()
            } else {
                try {
                    // 获取用户信息
                    // 注意: 角色信息必须是一个数组对象! 像这样: ['admin'] or ,['developer','editor']
                    const { roles } = await store.dispatch('user/getInfo')

                    // 基于角色生成可访问的路由
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    console.log('accessRoutes', accessRoutes)
                    // 动态添加可访问的路由
                    router.addRoutes(accessRoutes)

                    // hack方法以确保addRoutes是完整的
                    // 设置replace:true，这样导航将不会留下历史记录
                    next({ ...to, replace: true })
                } catch (error) {
                    // 删除令牌并转到登录页面重新登录
                    console.log(3333333333333)
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    } else {
    /* 未登录*/

        if (whiteList.indexOf(to.path) !== -1) {
            // 在登录白名单中，直接进入
            next()
        } else {
            // 没有访问权限的其他页面将重定向到登录页面。
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})

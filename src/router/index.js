import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
        children: [{
                path: "",
                name: "yang",
                component: () =>
                    import ("../views/homes/HomeIndex.vue")
            },
            {
                path: "2-0",
                name: 'HomeUser',
                component: () =>
                    import ("../views/homes/HomeUser.vue")
            },
            {
                path: "2-1",
                name: 'HomeShop',
                component: () =>
                    import ("../views/homes/HomeShop.vue")
            }
        ]
    },
    {
        path: "/login",
        name: "HomeLogin",
        component: () =>
            import ("../views/HomeLogin.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ("../views/AboutView.vue"),
    },
];

const router = new VueRouter({
    routes,
});
//权限管理
router.beforeEach(function(to, from, next) {
    console.log(to, from)
    if (to.name === "MyLogin") {
        next()
    } else {
        let token = localStorage.getItem('token')
        if (!token) return next({ path: "/login" })
        if (token) { //有权限
            next()
        }
    }
})
export default router;
let router= new Router({
    routes:[
        {
            path:'/a/d/x',
            name:"chat",
            component:Chat
        }

    ]
})


router.beforeEach(function (to,from ,next){

})
router.afterEach(function (to,from){})



// 单个路由的钩子函数，组件内的钩子函数
beforeRouterEnter 进入这个组件之前的路由
beforeRouterUpdate 在本路由的下极路由切换的时候使用的
beforeRouterLeave 离开这个组件的路由
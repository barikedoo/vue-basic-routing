// Если приложение большое, можно не импортировать все компоненты сразу, а вместо этого обращаться к серверу, только когда пользователь обращается к компоненту
// import User from './components/user/User.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserList from './components/user/UserList.vue'
import Home from './components/Home.vue'

// Для этого используется синтаксис ниже (Webpack) aka Router Lazy Loading
// Для сокращения числа запросов, часть компонентов можно логически объединить в группу 3им аргументом 'user'
const User = resolve => {
    require.ensure(['./components/user/User.vue'], ()=> {
        resolve(require('./components/user/User.vue'))
    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], ()=> {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], ()=> {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user');
};

const UserList = resolve => {
    require.ensure(['./components/user/UserList.vue'], ()=> {
        resolve(require('./components/user/UserList.vue'))
    }, 'user');
};

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: User, children: [
        {path: '', component: UserList},
        {path: ':id', component:UserDetail, name: 'userDetail'},
        {path: ':id/edit', component:UserEdit, name: 'userEdit'},
    ]},
    {path: '/redirect-route', redirect : '/home' },
    {path: '*', redirect : '/user' },
]
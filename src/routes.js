
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserList from './components/user/UserList.vue'
import Home from './components/Home.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: User, children: [
        {path: '', component: UserList},
        {path: ':id', component:UserDetail},
        {path: ':id/edit', component:UserEdit, name: 'userEdit'},
    ]},
]
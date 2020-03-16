import {
    EditOutlined,
    FormOutlined,
    CopyOutlined
} from '@ant-design/icons';
const menus = [
    {
        title: "首页",
        path: "/home",
        icon: EditOutlined
    },
    {
        title: "用户管理",
        path: "/user-manage",
        icon: FormOutlined,
        children: [
            {
                title: "用户列表",
                path: "/user-manage/users",
                icon: CopyOutlined,
            }
        ]
    },
    {
        title: "权限管理",
        path: "/right-manage",
        icon: FormOutlined,
        children: [
            {
                title: "角色列表",
                path: "/right-manage/roles",
                icon: CopyOutlined,
            },
            {
                title: "权限列表",
                path: "/right-manage/rights",
                icon: CopyOutlined,
            }
        ]
    },

    {
        title: "文章管理",
        path: "/article-manage",
        icon: FormOutlined,
        children: [
            {
                title: "文章列表",
                path: "/article-manage/list",
                icon: CopyOutlined,
            },
            {
                title: "文章分类",
                path: "/article-manage/category",
                icon: CopyOutlined,
            }
        ]
    },
]

export default menus
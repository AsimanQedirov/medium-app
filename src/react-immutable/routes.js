import DashBoard from "../components/child-components/main-childs/DashBoard";
import Users from "../components/child-components/main-childs/Users";
import Message from "../components/child-components/main-childs/Message";
export const routes = [
    {
        path : "/",
        component : DashBoard
    },
    {
        path : "/users",
        component:  Users
    },
    {
        path : "/message",
        component:  Message
    }
]
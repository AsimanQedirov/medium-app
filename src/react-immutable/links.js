import {RiDashboardLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'

export const links = [
    {
        to: "/",
        icon: <RiDashboardLine/>,
        text: "Dashboard"
    },
    {
        to: "/message",
        icon: <AiOutlineMessage/>,
        text: "Message"
    },
    {
        to: "/users",
        icon: < FaUsers/>,
        text : "Users"
    }
]
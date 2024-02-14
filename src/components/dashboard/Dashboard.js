import { useSelector } from "react-redux";
import { dataService } from "../../service/dataService";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { io } from "socket.io-client";
import { Button } from "@mui/material";
const URL = `http://localhost:3008?stock_auth=${localStorage.getItem(
    "token"
)}`;

const socket = io(URL);

const Dashboard = () => {
    const token = useSelector((state) => state.authSaga);
    const [allUsers, setAllUsers] = useState([])
    console.log(allUsers, "maulik8")
    const [selectedUser, setSelectedUser] = useState(null)
    console.log(selectedUser, "maulik19")
    const [message, setMessage] = useState('')

    const getAllUser = () => {
        dataService.get('get-users').then(({ data }) => {
            setAllUsers(data.data)
        })
    }

    const sendPrivateMessage = () => {
        socket.emit("privateMessage", {
            "message": message,
            "userName": selectedUser
        });
    }

    useEffect(() => {
        getAllUser()
    }, [])

    useEffect(() => {
        socket.on("privateMessage", (data) => {
            alert(data);
        });
    }, [socket]);

    return (
        <>
            {
                allUsers?.length ?
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={allUsers?.map((option) => option.userName)}
                        sx={{ width: 300 }}
                        onChange={(e, v) => setSelectedUser(v)}
                        renderInput={(params) => <TextField {...params} />}
                    /> : "No Users"
            }

            <TextField value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={() => sendPrivateMessage()}>Send</Button>
        </>
    )
}
export default Dashboard;
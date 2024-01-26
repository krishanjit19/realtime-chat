import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { Stack } from "react-bootstrap";

const ChatBox = () => {


    const {user} = useContext(AuthContext)
    console.log("users", user)
    const {currentChat, messages, isMessagesLoading, messagesError,} = useContext(ChatContext)
    console.log("chat", currentChat)
    const {recipientUser} = useFetchRecipientUser(currentChat, user)
    console.log("recipient", recipientUser)
    

    if(!recipientUser)
    return(
        <p style={{textAlign: "center", width:"100%"}}>
         No Converstion Selected</p>
    );

    if(isMessagesLoading)
    return(
<p style={{textAlign: "center", width:"100%"}}>
         Loading Chat...</p>
)
 
    return (<>
    <Stack gap={4} className="chat-box">
        <div className="chat-header">
            <strong> {recipientUser}</strong>
        </div>
    </Stack>
    </>  );
  
};
 
export default ChatBox;
import { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  GlobalStyle,
  Header,
  Logo,
  Name,
  Leftside,
  Rightside,
  Activeusers,
  Ul,
  Li,
  Img,
  Chating,
  Message,
  Text,User, Footer,Input,Links

} from "./chatStyle";

let socket;

const Chat = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const [msg, setMsg] = useState(""); 
  const [activeUsers, setActiveUsers] = useState([]);
  const [Recievedmessage, setRecievedMessage] = useState([]); //res

  let url = "http://localhost:8000";

  useEffect(() => {
    const data = new URLSearchParams(window.location.search);
    let user = data.get("username");
    let room = data.get("room");

    let username = user.trim().toLowerCase();
    let rooms = room.trim().toLowerCase();
    setname(username);
    setroom(rooms);

    socket = io(url);
    socket.emit("join", { username, room }, (callback) => {
      if (callback) {
        return console.log(callback);
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [url, window.Location.search]);

  useEffect(() => {
    socket.on("message", (msgs) => {
      setRecievedMessage((prevMsg) => [...prevMsg, msgs]);

      setTimeout(() => {
        var div = document.getElementById("chatings");
        div.scrollTop = div.scrollHeight - div.clientWidth;
      }, 10);
    });

    socket.on("activeUsers", (user) => {
      setActiveUsers(user);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit("sendMsg", msg, () => {
      setMsg("");
    });

    setTimeout(() => {
      var div = document.getElementById("chatings");
      div.scrollTop = div.scrollHeight;
    }, 100);
  };


 
  return (
    <div>
      <GlobalStyle />

      <Header>
        <Name>
          <Logo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190629%2Fourlarge%2Fpngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg&f=1&nofb=1&ipt=fb082d3fd3ac0d22a01308946b50bbb9785b6ffce0f46e22879fa9b550da1af9&ipo=images"/>
          {room}
        </Name>
        <Links to={`/?username=${name}&room=${room}`}>
     <p>Login</p>
      </Links>
      </Header>

      <Leftside>
        <Chating id="chatings">
          {
            Recievedmessage.map((each, index) =>(
                console.log(typeof(`${each.user}`)===typeof(`${name}`)),
             
              each.user === name? <div>
                  <Message bg="#EF233D" color="white" ml="60%" key={index} send>
                  {each.text===`welcome ${name}`?(null):(<User send>you</User>)}
                    <Text>{each.text}</Text>
                    </Message>
                </div> : <div>
                  <Message bg="white" color="black" mr="60%" key={index}>
                  {each.user!=name?(
                    each.text ===`${each.user} has joined` ?null:(each.text === `${each.user} has left`?null:<User>{each.user}</User>))
                    :null} 
                  <Text>{each.text}</Text>
                
                    
                  </Message>
                </div>
              )
            )
            }                                 
        </Chating>
      </Leftside>



      <Rightside>
        <div>
          <Activeusers>Active users</Activeusers>

          <Ul>
            {activeUsers.map((each, idx) => (
              <Li key={idx}>
                <Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1oYMAvXA8eaaRvWbCGgjhwHaHa%26pid%3DApi&f=1&ipt=a157648bd4e3823432f1fa9545481b8faf11981644a4c6f9ad48739a9600d516&ipo=images" />
                {each.name}
              </Li>
            ))}
          </Ul>
        </div>
      </Rightside>



      <Footer>
        <Input
          type="text"
          value={msg}
          placeholder="Write your message here..."
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          onChange={(e) => setMsg(e.target.value)}
        />
      </Footer>

      
    </div>
  );
};

export default Chat;

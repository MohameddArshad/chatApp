import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../login/loginStyle";
import { Box, Input, Label,Div, Button,Link, Img, Name,Greeting} from "./loginStyle";

const Login = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState('');

  useEffect(() => {
    const data = new URLSearchParams(window.location.search);
    let names = data.get("username");
    let rooms = data.get("room");

    setUser(names);
    setRoom(rooms);
  }, []);


  return (
    <div>
      <GlobalStyle />
      <Box>
	   <Div>
	  <Img src="https://img.icons8.com/3d-fluency/94/null/chat-bubble.png"/>
	  <Name>Chat Together</Name>
	  <Greeting>Welcome &#127773;  </Greeting>

	  
	  </Div>
        <form className="container" method="post">
          <Div className="mb-3 mt-3">
            <Label htmlFor="username" className="form-label">
              UserName
            </Label>
            <Input
			 
              type="text"
              id="username"
              required
              placeholder="Username"
              name="username"
              onChange={(e) => setUser(e.target.value)}
              value={user ? user : ""}
            />
          </Div>

          <Div className="mb-3">
            <Label htmlFor="room" className="">
              Room
            </Label>
            <Input
              type="password"
              required
              id="room"
              placeholder="room"
              name="room"
              onChange={(e) => setRoom(e.target.value)}
              value={room ? room : ""}
            />
          </Div>
         
		  <Div className="test">
          <Link
            onClick={(e) => (!user || !room ? e.preventDefault() : null)}
            to={`/chat?username=${user}&room=${room}`}
          >
            <Button type="submit">
              Submit
            </Button>
          </Link>
		  </Div>
        </form>
      </Box>
    </div>
  );
};

export default Login;

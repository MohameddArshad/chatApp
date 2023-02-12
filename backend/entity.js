const users = [];

const addUser = ({ id, username, room }) => {
  
  if (!users.length||users.length) {
  
    let name  = username.trim().toLowerCase();
    let rooms = room.trim().toLowerCase();
   
    if (!name || !rooms) {
      return { error: "username and room is required" };
    }
        
  

    let existing = users.find(
      (item) => item.name === name && item.rooms === rooms
    );
      
    if (existing) {
      return { error: "user already exist" };
    }

    let user = {id,name,rooms}
    users.push(user)
    return{ user }
  }
};

const removeUser = (id)=>{
  
  let existid = users.findIndex(item=> item.id == id )
  if(existid>=0){
    return users.splice(existid,1)[0]
  }
}

const getUser = (id)=>{
  return  users.find(item=> item.id == id) 
}

const getUserInRoom = (rooms)=>{
  return users.filter(item=> item.rooms == rooms) 
}
module.exports = { addUser,removeUser ,getUser,getUserInRoom  };

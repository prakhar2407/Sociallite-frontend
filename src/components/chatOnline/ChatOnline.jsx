import axios from "axios";
import { useEffect, useState} from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  // const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  // const [conversations, setConversations] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const API = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(API+"/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [API, currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  // useEffect(
  //   async (user) => {
  //     const res2 = await axios.post(`/conversations`, {
  //       senderId: currentId,
  //       receiverId: user._id,
  //     });
  //     res2();
  //   },
  //   [currentId, user._id]
  // );

  // useEffect(() => {
  //   const getConversations = async () => {
  //     await axios.post(`/conversations`, {
  //       senderId: currentId,
  //       receiverId: user._id,
  //     });
  //   };
  //   getConversations();
  // });

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `${API}/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}

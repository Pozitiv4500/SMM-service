import { API_URL, TOKEN_HEADER } from "@/shared/lib/constants";
import { Button } from "@/shared/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export const Invite = () => {
  const { invitelink } = useParams();
  const navigate = useNavigate();
  const onClickJoin = async () => {
      const res = await fetch(
        API_URL + "/workspace/join/" + invitelink,
        {
          method: "GET",
          headers: {
            Authorization: TOKEN_HEADER,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      if (res.ok) {
        navigate("/");
      } 
    };

  return (
    <div>
      <Button onClick={() => onClickJoin()}>accept invite</Button>
    </div>
  );
};

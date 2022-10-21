// import { getPosts } from "@libs/api";
// test

import React, { useState } from "react";
import axios from "axios";
import {
  requestDelete,
  requestGet,
  requestPatch,
  requestPost,
} from "@libs/api";
import { config } from "process";

type Props = {
  id: string;
  username: string;
  roles: string[];
  active: boolean;
};

type User = {
  username: string;
  password: string;
  roles: string[];
};

const Test = () => {
  const [data, setData] = useState<Props[] | null>(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([""]);
  const [userID, setUserID] = useState("634d19b1661918e9118ec863");
  const [active, setActive] = useState(false);

  const onClick = () => {
    getApi();
  };

  const getApi = async () => {
    const {
      data,
      config: { status },
    } = await requestGet<Props[]>("http://localhost:3500/users");

    if (status === 400) {
      return;
    }

    setData(data);
  };

  const postApi = async () => {
    const {
      config: { status },
    } = await requestPost<User[]>("http://localhost:3500/users", {
      username: id,
      password: password,
      roles: roles,
    });

    if (status === 201) {
      alert("등록에 성공했습니다!!");
    } else {
      console.log("등록에 실패했습니다..");
    }
    return;
  };

  const patchApi = async () => {
    const {
      config: { status },
    } = await requestPatch<User[]>("http://localhost:3500/users", {
      username: id,
      password: password,
      roles: roles,
      active: active,
      id: userID,
    });

    if (status === 200) {
      alert("수정에 성공했습니다!!");
    } else {
      console.log("수정에 실패했습니다..");
    }
    return;
  };

  const deleteApi = async () => {
    const {
      config: { status },
    } = await requestDelete<User>(`http://localhost:3500/users`, {
      id: userID,
    });

    if (status === 200) {
      alert("삭제에 성공했습니다!!");
    } else {
      console.log("삭제에 실패했습니다..");
    }
    return;
  };

  const handleId = (v: string) => {
    setId(v);
  };

  const handlePassword = (v: string) => {
    setPassword(v);
  };

  const handleRoles = (v: string) => {
    setRoles([v]);
  };

  const onClickedSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    postApi();
  };

  const onClickedPatch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    patchApi();
  };

  const onClickedDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    deleteApi();
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      <form>
        <input
          type="text"
          value={id}
          onChange={(e) => handleId(e.target.value)}
          id="id"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          id="password"
        />
        <input
          type="text"
          value={roles}
          onChange={(e) => handleRoles(e.target.value)}
          id="roles"
        />
        <button onClick={(e) => onClickedSubmit(e)}>등록하기</button>
      </form>
      <form>
        <input
          type="text"
          value={id}
          onChange={(e) => handleId(e.target.value)}
          id="id"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          id="password"
        />
        <input
          type="text"
          value={roles}
          onChange={(e) => handleRoles(e.target.value)}
          id="roles"
        />
        <button onClick={(e) => onClickedPatch(e)}>업데이트하기</button>
      </form>
      <button onClick={(e) => onClickedDelete(e)}>삭제하기</button>
      {data && (
        <div>
          <textarea
            rows={7}
            value={JSON.stringify(data[0].username, null, 2)}
            readOnly={true}
          />
          <p>{data[0].roles}</p>
        </div>
      )}
    </div>
  );
};

export default Test;

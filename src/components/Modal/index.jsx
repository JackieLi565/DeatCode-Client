import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

export default function Modal({ userData }) {
  const [openModal, setOpenModal] = useState(false);
  const [username, setUsername] = useState(userData.username);
  const [bio, setBio] = useState(userData.desc);
  const mutation = useMutation({
    mutationKey: "edit_profile",
    mutationFn: ({ username, bio }) => {
      return axios.put("/api/user/edit", { username, bio });
    },
    onSuccess: () => {
      setOpenModal(false);
    },
  });
  return (
    <>
      <button onClick={() => setOpenModal(true)}>Edit</button>
      {openModal ? (
        <div className="fixed inset-0 bg-background bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
          <div className="p-2 bg-backgroundS w-2/5 h-2/4 rounded">
            <div className="flex justify-between items-center px-4 pt-2 ">
              <h1 className="text-lg">Edit</h1>
              <button
                className="text-headline"
                onClick={() => setOpenModal(false)}
              >
                close
              </button>
            </div>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-2 bg-background text-headline outline-none"
              />
              <textarea
                className="bg-background outline-none p-2"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-end items-center px-4 pt-2 ">
              <button
                className="text-headline"
                onClick={() => mutation.mutate({ username, bio })}
              >
                update
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

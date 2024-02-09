"use client";
import UpdateInput from "@/components/input/updateInput";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateProfile = ({ student }) => {
  // console.log(student.personal);
  const [personal, setPersonal] = useState({
    fullName: student.personal.fullName,
    bio: student.personal.bio,

    fatherName: student.personal.fatherName,
    motherName: student.personal.motherName,

    guardianName: student.personal.guardianName,
    signature: student.personal.signature,

    nid: student.personal.nid,
    nationality: student.personal.nationality,

    dateOfBirth: student.personal.dateOfBirth,
    age: student.personal.age,

    religion: student.personal.religion,
    race: student.personal.race,

    gender: student.personal.gender,
    img: student.personal.img,
  });
  let reg = Cookies.get("reg");
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4444/api/v1/students/${reg}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ personal }),
        }
      );

      if (response.ok) {
        const updatedStudent = await response.json();
        toast.success("Student updated successfully");
      } else {
        const error = await response.json();
        toast.success("Oops!!! data not updated yet");
      }
    } catch (error) {
      console.error("An error occurred during update:", error);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
      <input
        type="submit"
        value={"update"}
        className="absolute top-8 right-8 z-50"
      />
      <h2>Personal Information :</h2>
      <Flex>
        <UpdateInput
          label={"Full Name"}
          value={personal.fullName || "name"}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, fullName: e.target.value }))
          }
        />
        <UpdateInput
          label={"Your Bio"}
          value={personal.bio}
          onChange={(e) => setPersonal((l) => ({ ...l, bio: e.target.value }))}
        />
      </Flex>

      <Flex>
        <UpdateInput
          label={"Father Name"}
          value={personal.fatherName}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, fatherName: e.target.value }))
          }
        />
        <UpdateInput
          label={"Mother Name"}
          value={personal.motherName}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, motherName: e.target.value }))
          }
        />
      </Flex>
      <Flex>
        <UpdateInput
          label={"Guardian Name"}
          value={personal.guardianName}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, guardianName: e.target.value }))
          }
        />
        <UpdateInput
          label={"Signature"}
          value={personal.signature}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, signature: e.target.value }))
          }
        />
      </Flex>
      <Flex>
        <UpdateInput
          label={"Nationality"}
          value={personal.nationality}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, nationality: e.target.value }))
          }
        />
        <UpdateInput
          label={"Nid"}
          value={personal.nid}
          onChange={(e) => setPersonal((l) => ({ ...l, nid: e.target.value }))}
        />
      </Flex>

      <Flex>
        <UpdateInput
          label={"Religion"}
          value={personal.religion}
          onChange={(e) =>
            setPersonal((l) => ({ ...l, religion: e.target.value }))
          }
        />
        <UpdateInput
          label={"Race"}
          value={personal.race}
          onChange={(e) => setPersonal((l) => ({ ...l, race: e.target.value }))}
        />
      </Flex>

      <Flex>
        <div className="flex flex-col flex-1 w-full">
          <label htmlFor="">Date of birth</label>
          <input
            type="date"
            value={personal.dateOfBirth}
            onChange={(e) =>
              setPersonal((l) => ({ ...l, dateOfBirth: e.target.value }))
            }
            className="h-12 px-2 border-b rounded-md"
          />
        </div>
        <UpdateInput
          label={"Age"}
          value={personal.age}
          onChange={(e) => setPersonal((l) => ({ ...l, age: e.target.value }))}
        />
      </Flex>

      <Flex>
        <div>
          <label>Gender</label>

          <div className="flex  items-center justify-between h-12">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={personal.gender === "male"}
                onChange={(e) =>
                  setPersonal((l) => ({ ...l, gender: e.target.value }))
                }
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={personal.gender === "female"}
                onChange={(e) =>
                  setPersonal((l) => ({ ...l, gender: e.target.value }))
                }
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                checked={personal.gender === "other"}
                onChange={(e) =>
                  setPersonal((l) => ({ ...l, gender: e.target.value }))
                }
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>
        <UpdateInput
          label={"Profile img url"}
          value={personal.img}
          onChange={(e) => setPersonal((l) => ({ ...l, img: e.target.value }))}
        />
      </Flex>
    </form>
  );
};

export default UpdateProfile;

const Flex = ({ children }) => {
  return (
    <div className="flex items-center justify-between gap-5 *:flex-1">
      {children}
    </div>
  );
};

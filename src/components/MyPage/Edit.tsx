"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Profile from "@/components/MyPage/Profile";
import SubmitButton from "@/components/UI/SubmitButton";
import CropImageModal from "@/components/MyPage/CropImageModal";
import Image from "next/image";
import edit from "img/edit.svg";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { cropModalActions } from "@/store/cropModal";
import { setImageUrl } from "@/store/image";
import Button from "@/components/UI/Button";
import useFormValidation, {
  Errors,
  ChangeHandler,
  UpdateFormData,
} from "@/hooks/use-formValidation";
import MyPageInput from "./MyPageInput";
import { validationRules } from "@/app/join/validation_rules";
import Title from "@/components/MyPage/Title";

const data = "flex flex-col mb-3";
const input =
  "border border-solid border-[#a0a0a0] rounded-lg px-3 w-full h-10";
const label = "text-[20px]";

export default function Edit() {
  useEffect(() => {
    // Set "CUN" item in sessionStorage
    sessionStorage.setItem("CUN", "error");
  }, []);
  // 사용자가 설정한 사진 또는 서버에서 가저온 사진 url
  const imgUrl = useSelector((state: any) => state.image.imageUrl);
  const [loadImgUrl, setLoadImgUrl] = useState<string | null>(null);
  const [isAvailableName, setIsAvailableName] = useState(true);
  const [showBox, setShowBox] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.cropModal.showModal);
  const [isAuthMailBtnDisabled, setAuthMailBtnDisabled] = useState(false);

  const [isAuthNameBtnDisabled, setIsAuthNameBtnDisabled] = useState(false);

  const [formData, errors, onChangeHandler, onUpdateFormData]: [
    any,
    Errors,
    ChangeHandler,
    UpdateFormData
  ] = useFormValidation(validationRules);

  useEffect(() => {
    axios
      .post(`/member/member/UIS`, {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const dataFromServer = response.data;
        onUpdateFormData({
          email: dataFromServer.email,
          nickname: dataFromServer.myPage.nickname,
          phonenumber: dataFromServer.phonenumber,
          birth: dataFromServer.birth,
          gender: dataFromServer.gender,
        });
        // sessionStorage.setItem("totalpoint", dataFromServer.myPage.point);
      });
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setLoadImgUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();

    if (!isAvailableName && sessionStorage.getItem("CUN") !== "yes") {
      alert("이름 중복 확인을 해주세요.");
      return;
    } else if (!loadImgUrl) {
      if (sessionStorage.getItem("CUN") == "yes") {
        axios
          .post(`/member/member/UIC`, {
            phonenumber: formData.phonenumber,
            email: formData.email, // Include the unchanged email field
            nickname: formData.nickname,
            birth: formData.birth,
            gender: formData.gender,
          })
          .then((response) => {})
          .catch((error) => {
            // Handle errors if needed
          });
        sessionStorage.setItem("name", formData.nickname);
        localStorage.setItem("name", formData.nickname);
        alert("이름 변경이 완료 되었습니다.");
        window.location.reload();
      }
      return;
    } else if (sessionStorage.getItem("CUN") === "yes" && loadImgUrl) {
      const blob = await fetch(loadImgUrl).then((res) => res.blob());
      formdata.append("image", blob);

      try {
        const uicResponse = await axios.post(`/member/member/UIC`, {
          phonenumber: formData.phonenumber,
          email: formData.email,
          nickname: formData.nickname,
          birth: formData.birth,
          gender: formData.gender,
        });

        if (uicResponse.status === 200) {
          const uploadResponse = axios.post(
            `/member/member/upload/${formData.nickname}`,
            formdata,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
        }
        sessionStorage.setItem("name", formData.nickname);
        localStorage.setItem("name", formData.nickname);
        alert("내 정보 수정이 완료되었습니다.");
        sessionStorage.setItem("cropimage", "no");
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
        // Handle errors if needed
      }
    } else if (loadImgUrl) {
      const blob = await fetch(loadImgUrl).then((res) => res.blob());
      formdata.append("image", blob);
      axios
        .post(`/member/member/upload/${formData.nickname}`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {})
        .catch((error) => {});
      sessionStorage.setItem("name", formData.nickname);
      localStorage.setItem("name", formData.nickname);
      alert("사진 변경이 되었습니다.");
      window.location.reload();
    } else if (sessionStorage.getItem("CUN") === "no") {
      alert("아이디가 중복됩니다. 다시 시도 해주세요");
    } else if (sessionStorage.getItem("CUN") === "error") {
      alert("ERROR Code = U102. 관리자에게 문의해주세요.");
    }
  };

  function checknickname() {
    axios
      .get(`/member/member/ChNick/${formData.nickname}`)
      .then((res) => {
        // 중복 아니면 res = 'yes'
        if (res.data === "yes") {
          sessionStorage.setItem("CUN", "yes");
          alert("사용이 가능합니다!");
        } else if (res.data === "no") {
          sessionStorage.setItem("CUN", "no");
          alert("이름이 중복됩니다. 다른 이름을 사용해 주세요.");
        }
      })
      .catch()
      .finally(() => {
        setTimeout(() => {
          setAuthMailBtnDisabled(false);
        }, 10000);
      });
  }

  const editFields = [
    { label: "전화번호", name: "phonenumber" },
    { label: "생년월일", name: "birth" },
    { label: "성별", name: "gender" },
  ];

  return (
    <>
      {showModal &&
        createPortal(
          <div
            className="bg-black opacity-60 w-full h-full fixed top-0"
            onClick={() => {
              dispatch(cropModalActions.click());
            }}
          ></div>,
          document.body
        )}
      {showModal &&
        createPortal(
          <CropImageModal imgUrl={loadImgUrl} showModal={showModal} />,
          document.body
        )}
      <div className="bg-white web:w-[1074px] h-full web:my-10 web:p-10 sm:px-10 mobile:pb-10 rounded-3xl">
        <Title text="내 정보 수정" />
        <div className=" flex-col-reverse md:flex-row flex justify-between">
          <div className="w-full md:mr-[100px]">
            <form>
              <ul className="mb-10">
                <li className={data}>
                  <MyPageInput
                    label="이메일"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                    autoFocus={true}
                  />
                </li>
                <li className={data}>
                  <label htmlFor="nickname" className={label}>
                    이름
                  </label>
                  <div className="flex">
                    <input
                      name="nickname"
                      className={input}
                      value={formData.nickname}
                      onChange={onChangeHandler}
                    ></input>

                    <Button
                      value="이름 중복 확인"
                      color={"#f8b195"}
                      onClick={checknickname}
                      disabled={isAuthNameBtnDisabled}
                    />
                  </div>
                </li>
                {editFields.map((field) => (
                  <li className={data} key={field.name}>
                    <MyPageInput
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={onChangeHandler}
                      readOnly={true}
                    />
                  </li>
                ))}
              </ul>
              <SubmitButton value="수정" onClick={submitHandler} />
            </form>
          </div>
          <div>
            <div className="md:invisible md:w-0 md:h-0 text-[20px] mb-6">
              프로필 사진
            </div>
            <Profile src={imgUrl} width={180} height={180} />
            <button
              className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-solid border-black bg-white relative bottom-[50px]"
              onClick={() => {
                setShowBox(!showBox);
              }}
            >
              <Image src={edit} alt="edit" width={30} height={30} />
            </button>
            {showBox && (
              <div className="relative top-[-30px] border-[1px] border-solid border-[#d9d9d9] py-[5px]">
                <label
                  htmlFor="file"
                  onClick={() => {
                    dispatch(cropModalActions.crop());
                  }}
                  className="w-full flex justify-center text-inherit leading-normal align-middle cursor-pointer hover:bg-[#e7e7e7]"
                >
                  사진 업로드
                </label>
                <form encType="multipart/form-data">
                  <input
                    type="file"
                    id="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    className="hidden absolute w-0 h-0 overflow-hidden hover:bg-[#e7e7e7]"
                  />
                </form>

                {imgUrl !== null && (
                  <button
                    onClick={() => dispatch(setImageUrl(null))}
                    className="w-full hover:bg-[#e7e7e7]"
                  >
                    사진 제거
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

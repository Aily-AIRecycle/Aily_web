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
import { validationRules } from "@/app/join/validation_rules";
import MyPageInput from "./MyPageInput";

const data = "flex flex-col mb-3";
const input =
  "border-[1px] border-solid border-[#a0a0a0] rounded-lg px-3 py-0 w-[500px] h-10";
const label = "text-[20px]";
export default function Edit() {
  const domain = "https://ailymit.store";
  // const domain = "";

  // 사용자가 설정한 사진 또는 서버에서 가저온 사진 url
  const imgUrl = useSelector((state: any) => state.image.imageUrl);
  const [loadImgUrl, setLoadImgUrl] = useState<string | null>(null);
  const [isAvailableName, setIsAvailableName] = useState(true);
  const [showBox, setShowBox] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.cropModal.showModal);
  const [isAuthNameBtnDisabled, setIsAuthNameBtnDisabled] = useState(false);

  const name = sessionStorage.getItem("name") || localStorage.getItem("name");

  const [formData, errors, onChangeHandler, onUpdateFormData]: [
    any,
    Errors,
    ChangeHandler,
    UpdateFormData
  ] = useFormValidation(validationRules);

  // 정보 가져오기
  useEffect(() => {
    axios
      .post(`${domain}/member/member/UIS`, {
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
      });
  }, []);

  useEffect(() => {
    if (name === formData.nickname) {
      setIsAvailableName(true);
    } else {
      setIsAvailableName(false);
    }
  }, [formData.nickname]);

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
    const blob = await fetch(imgUrl).then((res) => res.blob());
    formdata.append("image", blob);

    if (!isAvailableName) {
      alert("이름 중복 확인을 해주세요.");
      return;
    } else {
      // 정보 보내기
      axios
        .post(`${domain}/member/member/UIC`, {
          phonenumber: formData.phonenumber,
          email: formData.email, // Include the unchanged email field
          nickname: formData.nickname,
          birth: formData.birth,
          gender: formData.gender,
        })
        .then((response) => {
          sessionStorage.setItem("name", formData.nickname);
          localStorage.setItem("name", formData.nickname);
        })
        .catch((error) => {
          // Handle errors if needed
        });

      // 사진 보내기
      axios
        .post(`${domain}/member/member/upload/${formData.nickname}`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        })
        .then((response) => {
          // Handle the response if needed
        })
        .catch((error) => {
          // Handle errors if needed
        });

      alert("정보 수정이 완료되었습니다.");
      document.location.href = "/my-page/dashboard";
    }
  };

  // 이름 중복 체크
  function checknickname() {
    if (formData.nickname === name) {
      setIsAvailableName(true);
      alert("지금 사용중인 이름입니다.");
    } else {
      axios
        .get(`${domain}/member/member/ChNick/${formData.nickname}`)
        .then((res) => {
          // 중복 아니면 res = 'yes'
          if (res.data === "yes") {
            setIsAvailableName(true);
            alert("사용이 가능합니다!");
          } else if (res.data === "no") {
            setIsAvailableName(false);
            alert("이름이 중복됩니다. 다른 이름을 사용해 주세요.");
          }
          setIsAuthNameBtnDisabled(true);
        })
        .catch()
        .finally(() => {
          setTimeout(() => {
            setIsAuthNameBtnDisabled(false);
          }, 3000);
        });
    }
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
      <div className="flex w-[994px] h-[875px]">
        <div className="mt-5 mr-[100px]">
          <p className="text-[28px] mb-[50px]">내 정보 수정</p>
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
                <div className="flex w-[500px]">
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
                <li className={data}>
                  <MyPageInput
                    key={field.name}
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
        <div className="mt-[88px]">
          <Profile src={imgUrl} />
          <button
            className="w-[50px] h-[50px] flex justify-center items-center rounded-full border-[1px] border-solid border-black bg-white relative bottom-[50px]"
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
    </>
  );
}

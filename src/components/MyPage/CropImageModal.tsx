import { useDispatch, useSelector } from "react-redux";
import { cropModalActions } from "@/store/cropModal";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import { setImageUrl } from "@/store/image";

const CropImageModal = (props: any) => {
  const dispatch = useDispatch();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [croppedImage, setCroppedImage] = useState<String | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    sessionStorage.setItem("cropimage", "yes");
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(
          props.imgUrl,
          croppedAreaPixels,
          rotation
        );
        console.log("donee", { croppedImage });
        dispatch(setImageUrl(croppedImage));
      } catch (e) {
        console.error(e);
      }
    }
  }, [croppedAreaPixels, rotation]);

  return (
    <>
      <div className="bg-white w-[30rem] rounded-lg absolute left-[calc(50%-14rem)] top-[10%] flex flex-col items-center">
        <div className="w-[28rem] h-14 flex items-center justify-between">
          <h1>원하는 부분을 잘라주세요.</h1>
          <button
            onClick={() => {
              dispatch(cropModalActions.click());
            }}
            className="flex items-center justify-center"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="w-full h-[28rem] flex justify-center items-center py-3 border-y border-solid border-[#d9d9d9]">
          <div className="w-[26rem] h-[26rem] absolute">
            <Cropper
              image={props.imgUrl}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              showCroppedImage();
              dispatch(cropModalActions.click());
            }}
            className="bg-[#f8b195] my-5 w-[28rem] h-10 rounded-lg text-[16px] text-white"
          >
            자르기
          </button>
        </div>
      </div>
    </>
  );
};

export default CropImageModal;

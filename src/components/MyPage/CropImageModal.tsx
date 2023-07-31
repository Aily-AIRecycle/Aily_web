import Image from "next/image";
import classes from "@/components/MyPage/styles/CropImage.module.scss";
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
      <div className={classes.box}>
        <div className={classes.header}>
          <h1>원하는 부분을 잘라주세요.</h1>
          <button
            onClick={() => {
              dispatch(cropModalActions.click());
            }}
          >
            X
          </button>
        </div>
        <div className={classes.cropper_wrap}>
          <div className={classes.cropper}>
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
        <button
          onClick={() => {
            showCroppedImage();
            dispatch(cropModalActions.click());
          }}
          className={classes.button}
        >
          자르기
        </button>
      </div>
    </>
  );
};

export default CropImageModal;

"use client";
import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import axios from 'axios';
import Link from 'next/link';

const ImageUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [name2, setName2] = useState<string | null>(null);

  useEffect(() => {
    const name = sessionStorage.getItem('name');
    const url = 'http://localhost:8072/member/image/'+name;
    console.log("이름"+name);
    setName2(url);
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setPreviewImageUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      const name = sessionStorage.getItem('name');

      if (name) {
        axios
          .post(`/member/member/upload/${name}`, formData)
          .then((response) => {
            // Handle success response
          })
          .catch((error) => {
            // Handle error
          });
      }
    }
    console.log(name2)
    location.reload();
  };

  return (
    <>
      <Header />
      <h1>현재 내 이미지</h1>
      {/* <img src={url + name2 + '/image.png'} alt="Upload Image" /> */}
      <img src={name2 +  '/image.png'} alt="Upload Image" />
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <Link href="/upload">
          <button onClick={handleUpload}>Upload</button>
        </Link>
      </div>
      <h1>선택된 파일</h1>
      {previewImageUrl && (
        <div id="imagePreview">
          <img src={previewImageUrl} alt="Selected Image Preview" />
        </div>
      )}
      <Footer />
    </>
  );
};

export default ImageUploader;


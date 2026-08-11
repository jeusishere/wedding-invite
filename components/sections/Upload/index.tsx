"use client";

import React, { useState } from "react";

// Cloudinary bilgileri
const CLOUD_NAME = "d2vfvibz";
const UPLOAD_PRESET = "wedding_preset";

export default function Upload() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUploadError("");
    setUploadSuccess(false);

    if (!event.target.files) {
      return;
    }

    const files = Array.from(event.target.files);

    // Maksimum 10 fotoğraf
    if (files.length > 10) {
      setUploadError(
        "En fazla 10 fotoğraf seçebilirsiniz."
      );

      setSelectedFiles(files.slice(0, 10));
      return;
    }

    // 10 MB üzerindeki dosyaları engelle
    const tooLarge = files.some(
      (file) => file.size > 10 * 1024 * 1024
    );

    if (tooLarge) {
      setUploadError(
        "Her fotoğraf en fazla 10 MB olabilir."
      );

      return;
    }

    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadError(
        "Lütfen en az bir fotoğraf seçin."
      );

      return;
    }

    setIsUploading(true);
    setUploadError("");
    setUploadSuccess(false);

    try {
      for (const file of selectedFiles) {
        const formData = new FormData();

        formData.append("file", file);
        formData.append(
          "upload_preset",
          UPLOAD_PRESET
        );

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(
            "Fotoğraf yüklenirken bir hata oluştu."
          );
        }

        await response.json();
      }

      setUploadSuccess(true);
      setSelectedFiles([]);
    } catch (error) {
      console.error(error);

      setUploadError(
        "Fotoğraflar yüklenirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const closeModal = () => {
    if (isUploading) {
      return;
    }

    setIsOpen(false);
    setUploadError("");
    setUploadSuccess(false);
  };

  return (
    <>
      {/* =====================================
          FOTOĞRAF BÖLÜMÜ
      ===================================== */}

      <section
        id="upload-section"
        className="
          relative
          overflow-hidden
          bg-[#FAF7F2]
          px-6
          py-24
          sm:py-28
        "
      >
        {/* Dekoratif daire */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#C8A96A]/10
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* Süsleme */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C8A96A]/40" />

            <span className="font-serif text-lg text-[#C8A96A]">
              ❖
            </span>

            <span className="h-px w-10 bg-[#C8A96A]/40" />
          </div>

          {/* Başlık */}

          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#8A8379]
            "
          >
            ANILARIMIZA BİR KARE
          </p>

          <h2
            className="
              font-serif
              text-4xl
              font-light
              text-[#2D2A26]
              sm:text-5xl
            "
          >
            Fotoğraflarınızı Paylaşın
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-base
              italic
              leading-relaxed
              text-[#716B63]
              sm:text-lg
            "
          >
            Bu güzel günden çektiğiniz fotoğrafları
            bizimle paylaşarak anılarımızın bir parçası
            olabilirsiniz.
          </p>

          {/* Ana buton */}

          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setUploadError("");
              setUploadSuccess(false);
            }}
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#C8A96A]
              bg-[#C8A96A]
              px-8
              py-3.5
              text-sm
              tracking-wide
              text-white
              shadow-[0_10px_30px_rgba(200,169,106,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#B8894C]
            "
          >
            <span className="text-lg">
              ♧
            </span>

            Fotoğraf Paylaş
          </button>
        </div>
      </section>


      {/* =====================================
          FOTOĞRAF MODALI
      ===================================== */}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-[#2D2A26]/50
            px-5
            py-8
            backdrop-blur-sm
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-full
              max-w-lg
              rounded-2xl
              border
              border-[#E8D7B0]
              bg-[#FFFDF9]
              p-7
              shadow-2xl
              sm:p-10
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Kapat */}

            <button
              type="button"
              onClick={closeModal}
              disabled={isUploading}
              className="
                absolute
                right-5
                top-4
                text-2xl
                font-light
                text-[#716B63]
                transition-colors
                hover:text-[#2D2A26]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
              aria-label="Pencereyi kapat"
            >
              ×
            </button>


            {/* Başlık */}

            <div className="text-center">

              <div className="mb-4 flex justify-center">

                <span
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8A96A]/30
                    font-serif
                    text-2xl
                    text-[#C8A96A]
                  "
                >
                  ♧
                </span>

              </div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8A8379]
                "
              >
                BİZİMLE PAYLAŞIN
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-light
                  text-[#2D2A26]
                "
              >
                Anılarımıza Bir Kare Bırakın
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-[#716B63]
                "
              >
                Düğünde çektiğiniz fotoğrafları
                seçerek bizimle paylaşabilirsiniz.
              </p>

            </div>


            {/* Başarı mesajı */}

            {uploadSuccess && (
              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-[#C8A96A]/30
                  bg-[#F4F0E8]
                  px-5
                  py-4
                  text-center
                "
              >
                <p
                  className="
                    font-serif
                    text-lg
                    text-[#2D2A26]
                  "
                >
                  Fotoğraflarınız başarıyla gönderildi.
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#716B63]
                  "
                >
                  Güzel anılarımızın bir parçası
                  olduğunuz için teşekkür ederiz. ❤️
                </p>
              </div>
            )}


            {/* Dosya seçme alanı */}

            {!uploadSuccess && (
              <>
                <label
                  className="
                    mt-8
                    flex
                    min-h-[170px]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-dashed
                    border-[#C8A96A]/50
                    bg-[#FAF7F2]
                    px-6
                    py-8
                    text-center
                    transition-colors
                    hover:bg-[#F4F0E8]
                  "
                >
                  <span
                    className="
                      mb-3
                      text-3xl
                      text-[#C8A96A]
                    "
                  >
                    +
                  </span>

                  <span
                    className="
                      font-serif
                      text-lg
                      text-[#2D2A26]
                    "
                  >
                    Fotoğraf Seç
                  </span>

                  <span
                    className="
                      mt-2
                      text-xs
                      text-[#8A8379]
                    "
                  >
                    En fazla 10 fotoğraf,
                    fotoğraf başına 10 MB.
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>


                {/* Hata */}

                {uploadError && (
                  <div
                    className="
                      mt-4
                      rounded-lg
                      bg-red-50
                      px-4
                      py-3
                      text-center
                      text-sm
                      text-red-700
                    "
                  >
                    {uploadError}
                  </div>
                )}


                {/* Seçilen dosyalar */}

                {selectedFiles.length > 0 && (
                  <div
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-[#E8D7B0]
                      bg-[#FAF7F2]
                      p-4
                    "
                  >
                    <p
                      className="
                        mb-3
                        text-xs
                        uppercase
                        tracking-wider
                        text-[#8A8379]
                      "
                    >
                      Seçilen fotoğraflar
                    </p>

                    <div className="max-h-32 space-y-1 overflow-y-auto">

                      {selectedFiles.map(
                        (file, index) => (
                          <p
                            key={`${file.name}-${index}`}
                            className="
                              truncate
                              text-sm
                              text-[#4F4A44]
                            "
                          >
                            {file.name}
                          </p>
                        )
                      )}

                    </div>
                  </div>
                )}


                {/* Gönder */}

                <button
                  type="button"
                  onClick={handleUpload}
                  disabled={
                    isUploading ||
                    selectedFiles.length === 0
                  }
                  className="
                    mt-6
                    w-full
                    rounded-full
                    bg-[#C8A96A]
                    px-8
                    py-3.5
                    text-sm
                    tracking-wide
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#B8894C]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {isUploading
                    ? "Fotoğraflar Gönderiliyor..."
                    : "Fotoğrafları Gönder"}
                </button>

                <p
                  className="
                    mt-4
                    text-center
                    text-[11px]
                    leading-5
                    text-[#8A8379]
                  "
                >
                  Fotoğraflarınız güvenli şekilde
                  Cloudinary'ye yüklenir.
                </p>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}
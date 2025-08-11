import Image from "next/image";

const certificates = [
  { src: "/images/UDYAM.png", alt: "UDYAM Certificate" },
  { src: "/images/DPIIT.png", alt: "DPIIT Certificate" },
  { src: "/images/registrar.png", alt: "Registrar Certificate" },
];

export default function CertificateSection() {
  return (
    <section className="py-16 px-4 ">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="w-full max-w-md  rounded-xl shadow-lg overflow-hidden p-4"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}

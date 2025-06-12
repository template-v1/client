import Image from "next/image";

export function ServiceCard({
  src,
  alt,
  name,
}: {
  src?: any;
  alt?: string;
  name?: string;
}) {
  return (
    <div className="serviceCard">
      <Image src={src} alt={alt || ""} className="serviceImg" />
      <div className="serviceName">
        <h4>{name}</h4>
        <div className="serviceUnderline"></div>
      </div>
    </div>
  );
}

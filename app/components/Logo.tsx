import Image from "next/image";

export default function Logo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/dsportslab-logo.jpg"
      alt="D Sports Lab logo"
      width={size}
      height={size}
      className="rounded-full object-cover"
      priority
    />
  );
}

import React from "react";

interface ButtonV2Props {
  label: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  size?: "small" | "middle" | "large";
  loading?: boolean;
  type?: "primary" | "default";
}

const getButtonClass = (
  type: "primary" | "default",
  size: "small" | "middle" | "large",
  disabled?: boolean
) => {
  let base =
    "inline-flex items-center justify-center rounded transition focus:outline-none";
  base +=
    type === "primary"
      ? " bg-[#FF4D30] text-white hover:bg-[#e03d20]"
      : " bg-gray-100 text-[#183153] hover:bg-gray-200";
  base +=
    size === "small"
      ? " px-4 py-1.5 text-sm"
      : size === "large"
      ? " px-8 py-3 text-lg"
      : " px-6 py-2 text-base";
  base += " cursor-pointer";
  if (disabled) base += " opacity-60 cursor-not-allowed";
  return base;
};

const ButtonV2: React.FC<ButtonV2Props> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  htmlType = "button",
  size = "middle",
  loading = false,
  type = "primary",
}) => {
  return (
    <button
      type={htmlType}
      className={`${getButtonClass(type, size, disabled)} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-white border-t-[#FF4D30] rounded-full animate-spin mr-2 inline-block"></span>
      ) : null}
      {label}
    </button>
  );
};

export default ButtonV2;
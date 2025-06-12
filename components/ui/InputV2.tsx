'use client'

import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";
import styles from '@/public/styles/Input.module.css';

type InputV2Props = {
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
  defaultValue?: number | string;
  rowsTextarea?: number;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

const InputV2: React.FC<InputV2Props> = ({
  label,
  name,
  type = "text",
  required = false,
  disabled = false,
  placeholder = "",
  className = "",
  min,
  max,
  defaultValue = "",
  rowsTextarea = 2,
  error,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className={`${styles.inputV2Container ?? ""} input-v2-container ${className}`}>
      {label && (
        <label className={styles.inputV2Label ?? ""}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          rows={rowsTextarea}
          value={value}
          onChange={handleChange}
          className={styles.inputV2Textarea ?? ""}
          {...rest}
        />
      ) : (
        <input
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className={styles.inputV2Input ?? ""}
          {...rest}
        />
      )}
      {error && <div className={styles.inputV2Error ?? ""} style={{ color: "red", fontSize: 13 }}>{error}</div>}
    </div>
  );
};

export default InputV2;
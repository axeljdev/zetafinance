import { useState, useEffect } from "react";

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
  className?: string;
  required?: boolean;
  suffix?: string;
}

const NumericInput = ({
  value,
  onChange,
  placeholder = "",
  min = 0,
  className = "",
  required = false,
  suffix = "",
}: NumericInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setDisplayValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="number"
      min={min}
      value={displayValue === "0" ? "" : displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};

export default NumericInput;

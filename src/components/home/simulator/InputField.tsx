interface InputFieldProps {
  label: string;
  placeholder: string;
  unit: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  unit,
}) => (
  <div className="flex items-center justify-around">
    <p>{label}</p>
    <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
      <input
        type="number"
        min="0"
        placeholder={placeholder}
        className="grow w-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
        required
      />
      {unit}
    </label>
  </div>
);

export default InputField;

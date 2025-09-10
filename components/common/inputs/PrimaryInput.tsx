import React from 'react';

interface PrimaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  label,
  error,
  ...props
}) => {
  const generatedId = React.useId();
  const inputId = props.id || generatedId;
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`border rounded-full py-3 px-4 w-full focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-[#7A8D5D]'
        }`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default PrimaryInput;

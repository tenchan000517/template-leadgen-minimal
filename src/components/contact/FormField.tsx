interface FormFieldProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FormField({
  name,
  label,
  type,
  required = false,
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) {
  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;

  const baseInputClasses = `
    w-full px-4 bg-white
    border border-[#d0d0d0] rounded-[4px]
    text-[16px] text-primary
    transition-colors duration-200
    focus:outline-none focus:border-primary
    ${error ? 'border-[#dc2626]' : ''}
  `;

  return (
    <div>
      <label htmlFor={inputId} className="block text-[14px] lg:text-[15px] font-medium mb-2">
        {label}
        {required ? (
          <span className="text-primary ml-1">（必須）</span>
        ) : (
          <span className="text-text-light ml-1">（任意）</span>
        )}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={error ? errorId : undefined}
          className={`${baseInputClasses} h-[140px] lg:h-[160px] py-4 resize-none`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={error ? errorId : undefined}
          className={`${baseInputClasses} h-[52px] lg:h-[56px]`}
        />
      )}

      {error && (
        <p id={errorId} className="text-[14px] text-[#dc2626] mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

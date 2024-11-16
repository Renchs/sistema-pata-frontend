import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface ICampoInput<T extends FieldValues> {
    nomeLabel: string;
    placeholder?: string;
    type: string;
    nomeRegistro:  Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    rules?: object;
}

export function CampoInput<T extends FieldValues>({nomeLabel, nomeRegistro, register, placeholder, type, error, rules}: ICampoInput<T>) {
  return (
      <div className="flex flex-col gap-1">
          <label>{nomeLabel}</label>
          <input {...register(nomeRegistro, rules)} max={200} className="w-[281px] text-sm p-3 h-[35px] border rounded-lg border-primary" type={type} placeholder={placeholder} />
          {error && <p className="text-xs w-[280px] text-red-500">{error.message}</p>}
      </div>
  )
}

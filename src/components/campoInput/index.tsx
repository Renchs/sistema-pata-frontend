import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface ICampoInput<T extends FieldValues> {
    nomeLabel: string;
    placeholder?: string;
    type: string;
    nomeRegistro: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    defalultValue?: string;
}

export function CampoInput<T extends FieldValues>({ nomeLabel, nomeRegistro, register, placeholder, type, error, defalultValue }: ICampoInput<T>) {
    return (
        <div className="flex flex-col gap-1">
            <label id={nomeLabel}>{nomeLabel}</label>
            <input
                {...register(nomeRegistro)}
                value={defalultValue}
                max={200}
                placeholder={placeholder}
                type={type}
                className="w-[281px] text-sm p-3 h-[35px] border rounded-lg border-primary"
            />
            {error && <p className="text-xs w-[280px] text-red-500">{error.message}</p>}
        </div>
    )
}

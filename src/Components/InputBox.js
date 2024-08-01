const InputBox = ({ placeholder, value, type, onChange, label, name, maxLength,minLength }) => {
    const onChangeHandler = (e) => {
        onChange({ [label]: e?.target?.value })
    }
    return (
        <input placeholder={placeholder} name={name} minLength={minLength ?? minLength} maxLength={maxLength ?? maxLength} value={value} type={type} onChange={onChangeHandler} />

    )
}

export default InputBox
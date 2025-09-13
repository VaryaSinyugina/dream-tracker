import "./Input.scss";

export default function Input({className, type, name, id, placeholder, value, onChange, required}) {
    return <label className={`ui-input ${className}`}>
        <span>{placeholder}</span>
        <input type={type} name={name} id={id} value={value} onChange={onChange} required={required}/>
    </label>
}
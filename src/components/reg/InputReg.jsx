export default function InputReg({placeholder, value, onChange, name}) {
    return (
        <div className="regInputWrapper">
            <input 
                className="regInput"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={`${name === "password" ? "password": ""}`}
                name={name} 
            />
        </div>
    )
}
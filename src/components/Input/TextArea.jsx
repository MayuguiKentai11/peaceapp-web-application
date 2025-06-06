import React from "react";

const TextArea = ({ label, placeholder, value, onChange, width }) => {
    const widthClassName = width ? `` : 'w-[100%]';
    
    return (
        <div className={`text-left mb-4 relative ${widthClassName}`}>
            <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 no-spinner resize-none" style={{ padding: "0.5rem 1rem"}}
            />
            <label className="text-xs text-[#010101] bg-white absolute -top-2 left-3">{label}</label>
        </div>
        );
 }

 export default TextArea;
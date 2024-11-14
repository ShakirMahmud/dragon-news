import React from 'react';

const AdZone = () => {
    return (
        <div className="h-[500px] bg-gradient-to-r from-[#05001DCC] via-[#1C0037CC] to-[#05001DCC] relative flex items-center justify-center">
            <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                    background: "radial-gradient(circle, #711CA5 0%, transparent 70%)",
                    width: "300px",
                    height: "500px",
                    margin: "auto",
                }}
            ></div>
        </div>

    );
};

export default AdZone;
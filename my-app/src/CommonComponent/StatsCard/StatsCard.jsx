import React from "react";

const StatsCard = ({ heading, number }) => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            backgroundColor: 'white', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px', 
            width: '30%', 
            // minWidth: '120px', 
            // minHeight: '80px', 
            height:"50%",
            padding: '10px',
            margin: '10px',
            textAlign: 'center',
            transition: 'all 0.3s ease-in-out'
        }}>
            <span style={{ fontSize: 'clamp(14px, 3vw, 24px)', fontWeight: 'bold' }}>{number}</span>
            <span style={{ fontSize: 'clamp(12px, 2vw, 18px)', fontWeight: '600', marginTop: '4px' }}>
                {heading}
            </span>
        </div>
    );
};

export default StatsCard;

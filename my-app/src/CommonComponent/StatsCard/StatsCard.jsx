import React from "react"


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
            width: '33%', 
            height: '90%',
            margin:"10px",
            minWidth: '120px', 
            minHeight: '80px',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '2vw', fontWeight: 'bold' }}>{number}</span>
            <span style={{ fontSize: '1vw', fontWeight: '600', marginTop: '4px' }}>
              {heading}
            </span>
          </div>
    );
  };
  


  export default StatsCard;

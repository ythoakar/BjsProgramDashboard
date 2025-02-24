import React from "react"










const CommitteeCard = ({ heading, number }) => {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'white', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px', 
        padding: '16px', 
        width: '100%' 
      }}>
        <span style={{ fontSize: '36px', fontWeight: 'bold' }}>{number}</span>
        <button style={{ 
          marginTop: '8px', 
          width: '100%', 
          backgroundColor: '#FFC107', 
          color: 'black', 
          fontWeight: '600', 
          padding: '10px', 
          borderRadius: '4px', 
          border: 'none', 
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          {heading}
        </button>
      </div>
    );
  };

  export default CommitteeCard;

  
  // Example usage:
  // <InfoCard heading="Regional Executive Committee" number={28} />
  
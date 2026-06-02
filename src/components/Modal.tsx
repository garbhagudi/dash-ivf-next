import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string; // Optional custom max-width (e.g. '530px' or '800px')
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, maxWidth }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="modal fade show modal-fade-show" 
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1050 }}
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered modal-zoom" 
        onClick={(e) => e.stopPropagation()}
        style={maxWidth ? { maxWidth: maxWidth, width: '100%' } : undefined}
      >
        <div className="modal-content" style={{ position: 'relative', border: 'none', borderRadius: '15px' }}>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose} 
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              backgroundColor: '#EE3F65',
              opacity: 1,
              borderRadius: '50%',
              padding: '10px',
              fontSize: '12px',
              color: '#FFF',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          >
            <span style={{ display: 'none' }}>Close</span>
          </button>
          <div className="modal-body" style={{ padding: 0, overflow: 'hidden', borderRadius: '15px' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// src/ResumeModal.tsx
import React from 'react';
import resumeImage from '../assets/manish-resume.jpg'; // Update with the actual path to your resume image

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = 'resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="relative p-4 bg-white rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button className="absolute text-xl font-bold top-2 right-2" onClick={onClose}>×</button>
        <img src={resumeImage} alt="Resume" className="h-auto max-w-full mb-4" />
        <button onClick={downloadResume} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Download</button>
      </div>
    </div>
  );
};

export default ResumeModal;

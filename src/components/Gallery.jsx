import React from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <img
        data-aos="fade-up"
        className="four-grid-cells"
        src="https://images.unsplash.com/photo-1620818480520-c4c6c9020195?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Model in fashion pose"
      />

      <img
        data-aos="fade-down"
        src="https://images.unsplash.com/photo-1508853363419-a9263d752c59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fashionable outfit"
      />

      <img
        data-aos="fade-left"
        className="wide-image"
        src="https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Street style fashion"
      />

      <img
        data-aos="fade-up"
        src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Casual fashion look"
      />

      <img
        data-aos="fade-up"
        src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Elegant fashion shoot"
      />

      <img
        data-aos="fade-up"
        className="wide-image"
        src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Model showcasing fashion trends"
      />

      <img
        data-aos="fade-left"
        src="https://images.unsplash.com/photo-1622445275992-e7efb32d2257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fashion model portrait"
      />
    </div>
  );
};

export default Gallery;

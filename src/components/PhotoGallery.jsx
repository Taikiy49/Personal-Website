import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/PhotoGallery.css';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const photos = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "travel",
      title: "Fushimi Inari Shrine, Kyoto",
      location: "Kyoto, Japan",
      date: "Summer 2024",
      description: "Exploring my cultural heritage at one of Japan's most iconic shrines"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "hobbies",
      title: "Perfect Golf Day",
      location: "Ala Wai Golf Course, HI",
      date: "December 2024",
      description: "Working on my swing at my favorite local course"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "hobbies",
      title: "Gym Session",
      location: "UC Irvine Recreation Center",
      date: "November 2024",
      description: "Staying fit and focused for those long coding sessions"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "work",
      title: "Geolabs Office",
      location: "Honolulu, HI",
      date: "October 2024",
      description: "Building the future of geotechnical engineering software"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "travel",
      title: "Tokyo Skyline",
      location: "Tokyo, Japan",
      date: "Summer 2024",
      description: "The incredible blend of tradition and technology in Tokyo"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "hobbies",
      title: "Pickleball Tournament",
      location: "Irvine Community Center",
      date: "September 2024",
      description: "Competing in the local doubles tournament"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "travel",
      title: "Hawaiian Sunset",
      location: "Waikiki Beach, HI",
      date: "August 2024",
      description: "Home sweet home - nothing beats a Hawaiian sunset"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "work",
      title: "Research Presentation",
      location: "UC Irvine",
      date: "July 2024",
      description: "Presenting my NSF health data research findings"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'travel', label: 'Travel' },
    { key: 'hobbies', label: 'Hobbies' },
    { key: 'work', label: 'Work' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredPhotos[newIndex]);
  };

  return (
    <section id="photo-gallery" className="photo-gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Life in Pictures</h2>
          <p className="section-subtitle">Moments from work, travel, and play</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="photo-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(photo)}
            >
              <img src={photo.src} alt={photo.title} />
              <div className="photo-overlay">
                <h4 className="photo-title">{photo.title}</h4>
                <p className="photo-location">
                  <FaMapMarkerAlt /> {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <button className="modal-nav prev" onClick={() => navigateImage('prev')}>
                <FaChevronLeft />
              </button>
              
              <button className="modal-nav next" onClick={() => navigateImage('next')}>
                <FaChevronRight />
              </button>
              
              <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
              
              <div className="modal-info">
                <h3 className="modal-title">{selectedImage.title}</h3>
                <div className="modal-meta">
                  <span className="modal-location">
                    <FaMapMarkerAlt /> {selectedImage.location}
                  </span>
                  <span className="modal-date">
                    <FaCalendarAlt /> {selectedImage.date}
                  </span>
                </div>
                <p className="modal-description">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
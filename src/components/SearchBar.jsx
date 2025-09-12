import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import '../styles/SearchBar.css';

const searchableContent = [
  { type: 'section', title: 'About Me', id: 'about', content: 'software engineer hawaii japanese ado music golf pickleball' },
  { type: 'section', title: 'Experience', id: 'experience', content: 'geolabs software engineer intern nsf research uc irvine' },
  { type: 'section', title: 'Tech Stack', id: 'techstack', content: 'python javascript react flask ai machine learning' },
  { type: 'section', title: 'Projects', id: 'projects', content: 'ado music golf pickleball gym fitness travel japan' },
  { type: 'section', title: 'Portfolio', id: 'portfolio', content: 'geolabs platform ai health data golf analytics' },
  { type: 'section', title: 'Blog', id: 'blog', content: 'ai search music golf healthcare machine learning' },
  { type: 'section', title: 'Contact', id: 'contact', content: 'email phone linkedin github connect' },
  { type: 'skill', title: 'Python Programming', content: 'python flask tensorflow scikit-learn pandas numpy' },
  { type: 'skill', title: 'AI & Machine Learning', content: 'artificial intelligence machine learning tensorflow pytorch' },
  { type: 'skill', title: 'React Development', content: 'react javascript typescript frontend web development' },
  { type: 'project', title: 'Geolabs Software Platform', content: 'enterprise ai document management microsoft sso ocr' },
  { type: 'project', title: 'Health Data Analysis', content: 'nsf research 400k health records machine learning prediction' },
  { type: 'interest', title: 'Ado Music', content: 'ado japanese singer usseewa show gira gira music' },
  { type: 'interest', title: 'Golf', content: 'golf ala wai course hawaii handicap breaking 90' },
  { type: 'interest', title: 'Japan Travel', content: 'japan tokyo kyoto japanese culture heritage family' }
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Sample searchable content

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

 useEffect(() => {
  if (query.length > 1) {
    const q = query.toLowerCase();
    const filtered = searchableContent.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(filtered);
  } else {
    setResults([]);
  }
}, [query]);

  const handleResultClick = (result) => {
    if (result.id) {
      const element = document.getElementById(result.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const getResultIcon = (type) => {
    switch (type) {
      case 'section': return '📄';
      case 'skill': return '🛠️';
      case 'project': return '🚀';
      case 'interest': return '❤️';
      default: return '📄';
    }
  };

  return (
    <>
      <button className="search-trigger" onClick={() => setIsOpen(true)} title="Search (Ctrl+K)">
        <FaSearch />
        <span className="search-hint">Search</span>
        <kbd className="search-kbd">⌘K</kbd>
      </button>

      {isOpen && (
        <div className="search-overlay" onClick={() => setIsOpen(false)}>
          <div className="search-modal" ref={searchRef} onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <div className="search-input-container">
                <FaSearch className="search-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search anything..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-close" onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="search-results">
              {query.length > 1 && results.length === 0 && (
                <div className="no-results">
                  <p>No results found for "{query}"</p>
                  <p className="search-suggestion">Try searching for: projects, skills, experience, or interests</p>
                </div>
              )}

              {results.map((result, index) => (
                <button
                  key={index}
                  className="search-result"
                  onClick={() => handleResultClick(result)}
                >
                  <span className="result-icon">{getResultIcon(result.type)}</span>
                  <div className="result-content">
                    <div className="result-title">{result.title}</div>
                    <div className="result-type">{result.type}</div>
                  </div>
                </button>
              ))}

              {query.length <= 1 && (
                <div className="search-suggestions">
                  <p className="suggestions-title">Popular searches:</p>
                  <div className="suggestion-tags">
                    {['Geolabs', 'Ado music', 'Golf', 'Python', 'AI projects', 'Japan travel'].map((tag, index) => (
                      <button
                        key={index}
                        className="suggestion-tag"
                        onClick={() => setQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="search-footer">
              <div className="search-shortcuts">
                <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
                <span><kbd>Enter</kbd> Select</span>
                <span><kbd>Esc</kbd> Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
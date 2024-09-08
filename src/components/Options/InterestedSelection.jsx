        import React, { useState } from 'react';

        // Categories data
        const categories = [
            { id: 1, name: 'World', imgSrc: '/world.jpg' },
            { id: 2, name: 'India', imgSrc: '/india.jpg' },
            { id: 3, name: 'Sports', imgSrc: '/sports.jpg' },
            { id: 4, name: 'Entertainment', imgSrc: '/entertainment.jpg' },
            { id: 5, name: 'Technology', imgSrc: '/technology.jpg' },
            { id: 6, name: 'Business', imgSrc: '/business.jpg' },
            { id: 7, name: 'Accidents', imgSrc: '/accident.jpg' },
            { id: 8, name: 'Court', imgSrc: '/court.jpg' },
            { id: 9, name: 'Lifestyle', imgSrc: '/lifestyle.jpg' },
        ];

        const InterestSelection = () => {
            const [selectedCategories, setSelectedCategories] = useState([]);

            // Handle category selection logic
            const handleSelect = (category) => {
                if (selectedCategories.includes(category)) {
                    setSelectedCategories(selectedCategories.filter(item => item !== category));
                } else if (selectedCategories.length < 3) {
                    setSelectedCategories([...selectedCategories, category]);
                }
            };

            // Handle form submission
            const handleSubmit = () => {
                if (selectedCategories.length === 3) {
                    alert(`You selected: ${selectedCategories.join(', ')}`);
                    // Proceed to the next step or make API calls
                } else {
                    alert('Please select 3 categories.');
                }
            };

            // Inline styles for components
            const cardStyle = {
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease',
            };

            const imageStyle = {
                height: '200px',
                width: '100%',
                objectFit: 'cover',
                filter: 'brightness(90%)', // Darken the image
            };

            const overlayStyle = {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text contrast
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'opacity 0.3s ease',
                opacity: 1,
                color: 'white', // Text color
                fontWeight: 'bold',
            };

            const checkmarkStyle = {
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: '#0d6efd',
                color: 'white',
                borderRadius: '80%',
                padding: '0.7rem',
                margin: '0.5rem',
            };
            const buttonStyle = {
                backgroundColor: '#0d6efd',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            };

            const buttonHoverStyle = {
                backgroundColor: '#0b56as',
                cursor: 'pointer',
            };

            return (
                <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                    <div className="w-100 p-5 bg-light rounded shadow">
                        {/* Title */}
                        <h1 className="text-center mb-4">Select Your Interests</h1>
                        <p className="text-center text-muted mb-5">Choose 3 topics you're interested in to customize your news feed</p>

                        {/* Grid layout for categories */}
                        <div className="row g-4">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    className={`col-sm-6 col-md-4`}
                                    onClick={() => handleSelect(category.name)}
                                >
                                    <div
                                        className={`category-card position-relative ${selectedCategories.includes(category.name) ? 'selected' : ''}`}
                                        style={{
                                            ...cardStyle,
                                            border: selectedCategories.includes(category.name)
                                                ? '2px solid #0d6efd'
                                                : 'none',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                    >
                                        {/* Category Image */}
                                        <img
                                            src={category.imgSrc}
                                            alt={category.name}
                                            style={imageStyle}
                                        />
                                        {/* Title Overlay */}
                                        <div
                                            style={overlayStyle}
                                        >
                                            <h2>{category.name}</h2>
                                        </div>
                                        {/* Checkmark for selected items */}
                                        {selectedCategories.includes(category.name) && (
                                            <div style={checkmarkStyle}>
                                                ✓
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-5">
                            <button
                            style={{
                                ...buttonStyle,
                                ...(selectedCategories.length === 3 ? buttonHoverStyle : {}),
                            }}
                                className={`btn btn-lg ${selectedCategories.length === 3 ? 'btn-primary' : 'btn-secondary disabled'}`}
                                onClick={handleSubmit}
                                disabled={selectedCategories.length !== 3}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        export default InterestSelection;

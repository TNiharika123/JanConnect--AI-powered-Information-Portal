    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom'; // Import for navigation
// import './InterestSelection.css';

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

    const InterestSelection = ({ children }) => {
        const [selectedCategories, setSelectedCategories] = useState([]);
        const navigate = useNavigate(); // Initialize navigation

        // Handle form submission
    const handleSubmit = () => {
        if (selectedCategories.length === 3) {
            // Pass selected categories to the next page (FirstSelection)
            navigate('/home', { state: { selectedCategories } });
        } else {
            alert('Please select 3 categories.');
        }
    };


        // Handle category selection logic
        const handleSelect = (category) => {
            if (selectedCategories.includes(category)) {
                setSelectedCategories(selectedCategories.filter(item => item !== category));
            } else if (selectedCategories.length < 3) {
                setSelectedCategories([...selectedCategories, category]);
            }
        };

        

        return (
            <div className="container p-4 min-vh-100 d-flex justify-content-center align-items-center">
                <div className="w-100 p-5 bg-light rounded shadow">
                    {/* Title */}
                    <h1
    style={{
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
        fontSize: '3rem',
        fontWeight: 'bold'
    }}
    className="text-center mb-4"
    >
    Select Your Interest of News
    </h1>

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
                                        border: selectedCategories.includes(category.name)
                                            ? '2px solid #0d6efd'
                                            : 'none',
                                    }}
                                >
                                    {/* Category Image */}
                                    <img
                                        src={category.imgSrc}
                                        alt={category.name}
                                        className="category-image"
                                    />
                                    {/* Title Overlay */}
                                    <div className="category-overlay">
                                        <h2>{category.name}</h2>
                                    </div>
                                    {/* Checkmark for selected items */}
                                    {selectedCategories.includes(category.name) && (
                                        <div className="checkmark">
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
                        className={`btn-submit ${selectedCategories.length === 3 ? 'btn-submit-hover' : ''}`}
                        onClick={handleSubmit}
                        disabled={selectedCategories.length !== 3}
                    >
                        Submit
                    </button>
                </div>
                </div>

                {/* Internal CSS */}
                <style jsx>{`
                    .category-card {
                        position: relative;
                        border-radius: 0.5rem;
                        overflow: hidden;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                        cursor: pointer;
                        transition: transform 0.3s ease;
                    }

                    .category-card:hover {
                        transform: scale(1.05);
                    }

                    .category-image {
                        height: 200px;
                        width: 100%;
                        object-fit: cover;
                        filter: brightness(90%); /* Darken the image */
                    }

                    .category-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for text contrast */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white; /* Text color */
                        font-weight: bold;
                        transition: opacity 0.3s ease;
                    }

                    .checkmark {
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #0d6efd;
                        color: white;
                        border-radius: 50%;
                        padding: 0.7rem;
                        margin: 0.5rem;
                    }

                    .btn-submit {
                        background-color: #0d6efd;
                        color: white;
                        border: none;
                        border-radius: 0.5rem;
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .btn-submit-hover {
                        background-color: #0b56as;
                    }

                    .btn-submit:disabled {
                        background-color: #6c757d; /* Gray color for disabled state */
                        cursor: not-allowed;
                    }
                `}</style>
            </div>
        );
    };

    export default InterestSelection;

import { useState } from 'react';
import Button from './premiumButton'; // Ensure you're importing the correct Button component
import './step.css';
import Popup from './Popup';


export default function Step() {
    const [selectedStep, setSelectedStep] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleStepChange = (id) => {
        setSelectedStep(id);
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const steps = [
        { id: 1, title: "01", content: "Unlock your Child's Brilliance: Personalised programs for their unique mind!", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-1.webp" },
        { id: 2, title: "02", content: "Tailored Learning: Customized curriculum to match your child's pace and interests.", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-2.webp" },
        { id: 3, title: "03", content: "Expert Guidance: Experienced mentors to nurture your child's potential.", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-3.webp" },
        { id: 4, title: "04", content: "Progress Tracking: Regular assessments to monitor your child's growth.", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-4.webp" },
        { id: 5, title: "05", content: "Parental Involvement: Tools to stay connected and involved in your child's learning.", image: "https://www.uptodd.com/images/newWebsite/process/mobile-step-5.webp" },
    ];

    return (
<<<<<<< HEAD
        <div className='how-it-works'>
            <h1>How our Program Works !!</h1>
            <div style={{display: "flex"}}>
=======
        <div>
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e
            <div className="step-container">
                <div className="step-list">
                    {steps.map(step => (
                        <div
                            key={step.id}
<<<<<<< HEAD
                            className={`step-item ${selectedStep === step.id ? 'active-step-item' : 'border-gray-300'} ${selectedStep === step.id ? 'flex' : 'hidden'}`}
                            onClick={() => handleStepChange(step.id)}
                        >
                            <div className='step-header'>
                            <h4 className={`step-title ${selectedStep === step.id ? 'text-red' : 'text-black'}`}>
                    STEP
                </h4>

=======
                            className={`step-item ${selectedStep === step.id ? 'border-green-500' : 'border-gray-300'} ${selectedStep === step.id ? 'flex' : 'hidden'}`}
                            onClick={() => handleStepChange(step.id)}
                        >
                            <div className='step-header'>
                                <h4 className='step-title'>STEP</h4>
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e
                                <h3 className='step-number'>{step.title}</h3>
                            </div>
                            <svg className='step-divider' xmlns="http://www.w3.org/2000/svg" width="1" height="60" viewBox="0 0 1 60" fill="none">
                                <path d="M0.5 0V60" stroke="#002863" strokeDasharray="2 2" />
                            </svg>
                            <div className='step-content'>
                                <p>
                                    {step.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
<<<<<<< HEAD
                <div className="step-image-container col">
=======
                <div className="step-image-container">
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e
                    <div className='step-image-wrapper'>
                        <div className='step-image-inner'>
                            {steps.map((step) => (
                                <img
                                    key={step.id}
                                    src={step.image}
                                    alt={`Step ${step.id}`}
                                    className={`step-image ${selectedStep === step.id ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}
                        </div>
                        <div className='step-indicators'>
                            {steps.map((step) => (
                                <span
                                    key={step.id}
<<<<<<< HEAD
                                    className={`step-indicator ${selectedStep === step.id ? 'bg-blue-500' : 'bg-white-700'}`}
=======
                                    className={`step-indicator ${selectedStep === step.id ? 'bg-green-500' : 'bg-gray-700'}`}
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e
                                    onClick={() => handleStepChange(step.id)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        </div>
<div className='button-center'>
            {/* Correct Button Component */}
            <button
                className="a-btn"
                text="Access this Program"
                onClick={handleOpenPopup} // Ensure you're handling the click event
            > Access Baby's Program </button>
=======

            {/* Correct Button Component */}
            <Button
                text="Access this Program"
                className="access-button"
                onClick={handleOpenPopup} // Ensure you're handling the click event
            />
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e

            {/* Popup Logic */}
            {isPopupOpen && (
                <Popup closePopup={handleOpenPopup} />
            )}
<<<<<<< HEAD
            
</div>
=======
>>>>>>> 743f27834eea04e51330dbcb3c7bc568feb4979e
        </div>
    );
}

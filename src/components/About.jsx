import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, Button, Paper, StepContent, Typography } from '@mui/material';


const steps = [
    {
        label: 'Education and Training',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Skills and Expertise',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Professional Experience',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
    {
        label: 'Achievements',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

function About() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <div
                name='About'
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  '>
                <h1 className='text-2xl font-bold mb-5'>About</h1>
                <p className='flex text-justify'>
                    As a dedicated Software Developer at SafexPay, my role involves transforming innovative concepts into functional digital experiences. With an ongoing Master’s degree in Computer Science from Ramrao Adik Institute of Technology, I am constantly enhancing my skill set, particularly in React.js and API integration.
                    My work revolves around developing seamless interfaces and integrating applications that elevate user engagement. The goal is to leverage my technical acumen, honed through rigorous education and hands-on experience, to contribute to meaningful digital solutions that resonate with users and advance the industry.
                </p>
                <br />
                <Box sx={{ Width: "100%" }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label} >
                                <StepLabel className='text-green-600 font-semibold text-xl'
                                >
                                    <h1 className='text-green-600 font-semibold text-xl '> {step.label}</h1>
                                </StepLabel>
                                <StepContent >
                                    <span >{step.description}</span>
                                    <Box sx={{ mb: 2 }} className='py-2 px-1 justify-around space-x-3'>
                                        <button
                                            variant="contained"
                                            onClick={handleNext}
                                            className='bg-blue-500 hover:bg-blue-700 font-bold text-white rounded px-4 py-2'
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </button>
                                        {index > 0 && <button
                                            onClick={handleBack}
                                            // sx={{ mt: 1, mr: 1 }}
                                            className='bg-blue-500 hover:bg-blue-700 font-bold text-white rounded px-4 py-2'
                                        >
                                            Back
                                        </button>}
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
                            <button onClick={handleReset}
                                className='bg-blue-500 hover:bg-blue-700 font-bold text-white rounded px-4 py-2'
                                sx={{ mt: 1, mr: 1 }}>
                                Repeat
                            </button>
                        </Paper>
                    )}
                </Box>
            </div >


            {/* <div
                name='About'
                className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16  '>
                <h1 className='text-2xl font-bold mb-5'>About</h1>
                <p className='flex text-justify'>
                    As a dedicated Software Developer at SafexPay, my role involves transforming innovative concepts into functional digital experiences. With an ongoing Master’s degree in Computer Science from Ramrao Adik Institute of Technology, I am constantly enhancing my skill set, particularly in React.js and API integration.
                    My work revolves around developing seamless interfaces and integrating applications that elevate user engagement. The goal is to leverage my technical acumen, honed through rigorous education and hands-on experience, to contribute to meaningful digital solutions that resonate with users and advance the industry.
                </p>
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>Education and Training</h1>
                <span>
                    I cannot imagine my days without my best friend.
                    They have become an integral part of my life,
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>
                    Skills and Expertise
                </h1>
                <span>
                    I cannot imagine my days without my best friend.
                    They have become an integral part of my life,
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>
                    Professional Experience
                </h1>
                <span>
                    I cannot imagine my days without my best friend.
                    They have become an integral part of my life,
                </span>
                <br />
                <br />
                <h1 className='text-green-600 font-semibold text-xl'>
                    Achievements and Awards
                </h1>
                <span>
                    I cannot imagine my days without my best friend.
                    They have become an integral part of my life,
                </span>
                <br />
                <br />

            </div> */}
        </>
    )
}

export default About

import React from 'react'
import Information from './Information/Information';
import './PrivacyPolicy.css'
import InformativeFooter from '../InformativeFooter/InformativeFooter';
import InformativeNavbar from '../Navbar/Navbar';
import { Fade } from 'react-reveal';

const PrivacyPolicy = () => {
    return (
        <>
            <InformativeNavbar />
            <div style={{ overflowX: 'hidden' }}>
                <Fade up duration={1000} delay={100}>
                    <div className='p-p_heading-box'>
                        <div className='container'>
                            <span className='p-p_heading'>Privacy Policy for NestoHub Proptech Pvt Ltd</span>
                        </div>
                    </div>
                </Fade>
                <div className='container p-p_container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <Fade up duration={1000} delay={100}>
                                <span className='p-p_span'>
                                NestoHub Proptech Pvt Ltd (herein after referred to as “NestoHub” or “We”) is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and disclose your personal information.
                                </span>
                            </Fade>
                            {/* <Fade up duration={1000} delay={100}>
                                <span className='p-p_span'>
                                    Magicbricks respects the privacy of its users and is committed to protect it in all respects. With a view to offer most enriching and holistic internet experience to its users Magicbricks offers a vast repository of Online Sites and variety of community services. The information about the user as collected by Magicbricks is: (a) information supplied by users and (b) information automatically tracked while navigation
                                </span>
                            </Fade>
                            <Fade up duration={1000} delay={100}>
                                <span className='p-p_span2'>
                                    <span className='p-p_span2'>(Information).</span>
                                    By using Magicbricks website or its services, you consent to collection, storage, use, transfer, share and distribute the personal information you provide (including any changes thereto as provided by you) for any of the services that we offer.
                                </span>
                            </Fade> */}
                        </div>
                    </div>
                </div>
                <Information />
            </div>
            <InformativeFooter />
        </>
    )
}

export default PrivacyPolicy
import React from 'react'
import FirstCard from './FirstCard/FirstCard'
import SecondCard from './SecondCard/SecondCard'
import ThirdCard from './ThirdCard/ThirdCard'
import FourthCard from './FourthCard/FourthCard';
import FifthCard from './FifthCard/FifthCard';

export default function PartnersDetailSidebar() {
    return (
        <>
            <div className='container-fluid partners-container' style={{ overflowX: 'hidden' }}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row' data-aos='fade-left'>
                            <FirstCard />
                            <SecondCard url='/assets/informative/device-new.svg' />
                            <ThirdCard />
                            <FourthCard />
                            <FifthCard />
                            <FourthCard />
                            <ThirdCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
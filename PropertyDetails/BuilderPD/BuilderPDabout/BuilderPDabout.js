import React from 'react'
import './BuilderPDabout.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react'

const BuilderPDabout = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 })
    }, [])
    return (
        <div className='container BuilderPDabout' data-aos='fade-up'>
            <div className='col-lg-12 BuilderPDabout-col'>
                <div className='BuilderPDabout-col_div'>
                    <div>
                        <span className='PropertyDetails-heading BuilderPDabout-col_span_1'>
                            About the Builder
                        </span>
                    </div>
                    <div><Link to='/' className='BuilderPDabout-col_link'>View Details</Link></div>
                </div>
                <hr />
                <div className='BuilderPDabout-col_div-2'>
                    <span className='BuilderPDabout-col_div-2_span'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BuilderPDabout
import React from 'react'
import './ArticleNews.css'
import { Zoom } from 'react-reveal'

const ArticleNews = () => {
    const data = [
        {
            tips: 'Tips to buy your dream home in minutes',
            name: 'Sarah Harding',
            img: '/assets/informative/articleImg4.png',
            date: '14 Nov 2023',
            className: 'article-news_box box-1'
        },
        {
            tips: 'Tips to buy your dream home in minutes',
            name: 'Sarah Harding',
            img: '/assets/informative/articleImg4.png',
            date: '14 Nov 2023',
            className: 'article-news_box box-2'
        },
        {
            tips: 'Tips to buy your dream home in minutes',
            name: 'Sarah Harding',
            img: '/assets/informative/articleImg4.png',
            date: '14 Nov 2023',
            className: 'article-news_box box-3'
        },
    ]
    return (
        <>
            <Zoom duration={1000} delay={100}>
                <div className='container article-news' style={{ overflowX: 'hidden' }}>
                    <div className='article-news_head-box'>
                        <h3 className='article-news_heading'>Articles & News</h3>
                        <span className='article-news_para'>Get the Latest News, Updates and Tips</span>
                    </div>
                    <div className='row article-news_row mt-3 mb-5'>
                        {data.map((item) => {
                            return (
                                <div className='col-lg-4 article-news_col'>
                                    <div className={item.className}>
                                        <div className='article-news_box-4 align-items-end'>
                                            <span className='article-news_span-1'>{item.tips}</span>
                                        </div>
                                        <div className='article-news_box-5 align-items-end'>
                                            <div className=''>
                                                <span className='article-news_span-2'>
                                                    <img src={item.img} alt='article' /> {item.name}
                                                </span>
                                            </div>
                                            <div className='pb-1'>
                                                <span className='article-news_span-2'>{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Zoom>
        </>
    )
}

export default ArticleNews
import React from 'react'
import './Loader.css'
const Loader = () => {
    return (
        <>

            <main style={{marginTop:"3em " }} className='container'>
                <ul className="o-vertical-spacing o-vertical-spacing--l">
                    <li className="blog-post o-media">
                        <div className="o-media__figure">
                            <span className="skeleton-box" style={{ width: 100, height: 80 }} />
                        </div>
                        <div className="o-media__body">
                            <div className="o-vertical-spacing">
                                <h3 className="blog-post__headline">
                                    <span className="skeleton-box" style={{ width: '55%' }} />
                                </h3>
                                <p>
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                    <span className="skeleton-box" style={{ width: '90%' }} />
                                    <span className="skeleton-box" style={{ width: '83%' }} />
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                </p>
                                <div className="blog-post__meta">
                                    <span className="skeleton-box" style={{ width: 70 }} />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="blog-post o-media">
                        <div className="o-media__figure">
                            <span className="skeleton-box" style={{ width: 100, height: 80 }} />
                        </div>
                        <div className="o-media__body">
                            <div className="o-vertical-spacing">
                                <h3 className="blog-post__headline">
                                    <span className="skeleton-box" style={{ width: '55%' }} />
                                </h3>
                                <p>
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                    <span className="skeleton-box" style={{ width: '90%' }} />
                                    <span className="skeleton-box" style={{ width: '83%' }} />
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                </p>
                                <div className="blog-post__meta">
                                    <span className="skeleton-box" style={{ width: 70 }} />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="blog-post o-media">
                        <div className="o-media__figure">
                            <span className="skeleton-box" style={{ width: 100, height: 80 }} />
                        </div>
                        <div className="o-media__body">
                            <div className="o-vertical-spacing">
                                <h3 className="blog-post__headline">
                                    <span className="skeleton-box" style={{ width: '55%' }} />
                                </h3>
                                <p>
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                    <span className="skeleton-box" style={{ width: '90%' }} />
                                    <span className="skeleton-box" style={{ width: '83%' }} />
                                    <span className="skeleton-box" style={{ width: '80%' }} />
                                </p>
                                <div className="blog-post__meta">
                                    <span className="skeleton-box" style={{ width: 70 }} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>

        </>
    )
}

export default Loader

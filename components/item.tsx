import React from 'react';
import Link from 'next/link';

export default function Item({data }: any){
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <Link href={`/live/${data.index}`}>
                <div
                    className="single-timeline-content d-flex wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' }}
                >
                    <div className="timeline-icon">
                        <img src={data.icon} />
                    </div>
                    <div className="timeline-text">
                        <h6>{data.match}</h6>
                        <p>{data.competition}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
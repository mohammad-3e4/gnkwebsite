import React from 'react';

export default function GalleryProps(props) {
    return (
        <div className=" rounded-lg" style={{ backgroundColor: "var(--orange)" }}>
            <img className="h-auto max-w-full duration-200 rounded-lg hover:skew-y-3 " src={props.src} alt="" />
        </div>
    )
}
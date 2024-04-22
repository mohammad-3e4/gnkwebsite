import React from "react";

export default function TCertificate() {
    return (
        <>
            <h2
                style={{ marginBottom: "40px", color: "var(--blue)" }}
                className="text-3xl text-center mt-5 font-bold tracking-tight  sm:text-4xl">TRANSFER <span style={{ color: "var(--orange)", display: "inline-block" }}>CERTIFICATE</span>
            </h2>
            <div className=" p-4 flex justify-center">
                <div className="m-auto  flex justify-center " style={{ width: "90%" }}>

                    <img
                        className=" h-auto w-auto "
                        src="images/Certificate.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

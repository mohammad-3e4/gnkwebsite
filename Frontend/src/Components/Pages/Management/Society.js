import React from "react";

export default function Society() {
  return (
    <div className="lg:mt-20">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--orange)",
        }}
        className="text-3xl mt-5 font-bold tracking-tight  sm:text-4xl"
      >
        SOCIETY
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 h-auto md:h-96 ">
        <div className="  flex items-center justify-center">
          <div>
            <img
              src="/uploads/staff/Chairman.jpg"
              alt="1"
              style={{ width: "200px" }}
            />
            <h2
              style={{ color: "var(--orange)" }}
              className="font-bold text-center"
            >
              S. Charanjit Singh Channa
            </h2>
            <h2 className="text-center">(Chairman)</h2>
          </div>
        </div>

        <div className="  flex items-center justify-center">
          <div>
            <img
              src="/uploads/staff/manager.jpeg"
              alt="2"
              style={{ width: "180px" }}
            />
            <h2
              style={{ color: "var(--orange)" }}
              className="font-bold text-center"
            >
              S. Amritpal Singh
            </h2>
            <h2 className="text-center">(Manager)</h2>
          </div>
        </div>

        <div className="  flex items-center justify-center">
          <div>
            <img
              src="/uploads/staff/assistant_manager.jpeg"
              alt="3"
              style={{ width: "160px" }}
            />
            <h2
              style={{ color: "var(--orange)" }}
              className="font-bold text-center"
            >
              S. Damandeep Singh
            </h2>
            <h2 className="text-center">(Asst. Manager Finance)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

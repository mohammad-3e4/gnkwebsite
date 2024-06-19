import React, { useState, useEffect } from "react";
import { Confirmation } from "../../Confirmation";
import { UploadModal } from "../../UploadModal";
import { getDocuments } from "../../../Actions/documents";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, clearMessage } from "../../../redux/documentsSlice";

function Disclosure() {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState()
  const dispatch = useDispatch();
  const { loading, error, message, documents } = useSelector(
    (state) => state.documents
  );
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getDocuments({ docType: "disclosure", token }));
  }, []);

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        dispatch(clearMessage());
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
    if (error) {
      const timeoutId = setTimeout(() => {
        dispatch(clearErrors());
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [error, message, dispatch]);

  return (
    <div className="flex lg:mt-10">
      <div className=" lg:my-20 m-auto w-full ">
        <div className="flex justify-center w-full items-center gap-10">
          <h2 className="text-3xl my-5 text-center text-blue font-bold tracking-tight sm:text-4xl">
            <span className="text-orange">Disclosure</span>
          </h2>
          {token && (
            <button onClick={() => setShowModal(true)}>
              <div
                className="inline-block  align-baseline border border-orange py-2 px-8 rounded font-bold text-sm text-white bg-orange "
                a
              >
                Upload Disclosure
              </div>
            </button>
          )}
        </div>
        <div className="w-full flex flex-wrap justify-center items-center h-full gap-4">
          {documents?.map((file, index) => (
            <div className="p-10" key={index}>
              <div className=" bg-orange-500">
                <img
                  className="h-60 w-60 aspect-square duration-200"
                  src={`/uploads/Disclosure/${file.file_name}`}
                  alt={`${file.file_name} is not available`}
                />
              </div>
              <div
                class="me-4 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface"
                style={{width: "18rem"}}
              >
                <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight">
                    Special title treatment
                  </h5>
                  <p class="mb-4 text-base">
                  {file.description}
                  </p>
                  <button
                    type="button"
                    onClick={()=>setId(file.id)}
                    class="inline-block rounded bg-orange px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Delete
                  </button>
                </div>
              </div>
        
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <UploadModal docType="Disclosure" isClose={() => setShowModal(false)} />
      )}
      {id && (
        <Confirmation id={id} docType="disclosure" isClose={() => setId(null)} />
      )}

    </div>
  );
}

export default Disclosure;

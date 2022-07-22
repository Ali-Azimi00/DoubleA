/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from "react";
import Typer from "./PiTyper";
//import TypeEffect from "./TypeEffect"
import Arrow from "../About/Arrow";


function Pi() {

    // const [pageOpen, setPageOpen] = useState({ landed: false })

    useEffect(() => {
        // if (pageOpen) {
        //     //console.log("modal working2")
        //     swal2(
        //         <div>
        //             <h1 className="fontOrange">Welcome!</h1>
        //             <div>
        //                 <hr style={{
        //                     color: "black",
        //                     height: "2px",
        //                     width: "440px",
        //                     fontWeight: 'bold',
        //                 }} />
        //             </div>
        //             <div style={{ fontWeight: 'bold' }}>[Begin typing at any time]</div>
        //             <div style={{ fontWeight: 'bold' }}>[Three strikes an you're out]</div>
        //             <div style={{ fontWeight: 'bold' }}>[Press Esc to start over]</div>
        //         </div>
        //     );
        //     setPageOpen((prevState) => {
        //         let pd = { ...prevState };
        //         pd.landed = true;
        //         return pd
        //     })
        // }
    }, [])

    return (
        <>
            <div className="container-fluid p-4 mb-6 bg-dark col-md-auto">
                {/* <TypeEffect /> */}
                <div className="row">
                    <div className="col ">
                        <Typer />

                    </div>

                </div>
            </div>

            <div className="row bg-light">
                {/* <div className="col-6 bg-info">
                </div> */}

                <div className="col-6 centerBtn bg-info">
                    <div className="input-group centerBtn">
                        {/* <div className="col-1">
                            <Arrow />
                        </div> */}
                        <div className="col-12-auto centerBtn">
                            <span
                                type="submit"
                                className="input-group-text btn-warning"
                                id="basic-addon2"
                            >Start Over
                            </span>
                        </div>



                    </div>

                </div>
            </div>

        </>
    );
}

export default Pi
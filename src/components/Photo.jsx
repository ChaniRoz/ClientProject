import React from "react";
import TitlebarImageList from './DrowSingleImage'
import InputImageUpload from './UploudImge';
// import UploadAndDisplayImage from './TryUploud'
const Photo = () => {
    return (<><h1>Photo</h1>
        {/* <UploadAndDisplayImage /> */}
        <InputImageUpload />
        <TitlebarImageList />
    </>)
}
export default Photo
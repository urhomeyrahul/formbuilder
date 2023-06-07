import React, { useEffect } from "react";
import GrapesJS from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import dynamicConfig from './grapejsConfig';
import './app.css'

const GrapesJsMain = () => {
    useEffect(() => {
        loadGrapesJs()
    }, [])
    const loadGrapesJs = async () => {
        const editor = await GrapesJS.init(dynamicConfig())
    }

    return (
        <>
            <div id="gjs">
                <h1> Hello World Component !!</h1>
            </div>
        </>
    );
};

export default GrapesJsMain;


import React from "react";
import { CiVolumeMute, CiVolumeHigh } from "react-icons/ci";

export default function ToggleMusic({ isMuted, toggleMute }) {
    return (
        <button onClick={toggleMute}>
            {isMuted ? <CiVolumeMute /> : <CiVolumeHigh />}
        </button>
    );
}
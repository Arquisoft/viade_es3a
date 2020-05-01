import React from "react";
import Loader from "react-loader-spinner";

export function Loading(props) {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1000,
            backgroundColor: "#3339",
            display: props.loading ? "flex" : "none",
            justifyContent: "center"
        }}>
            <Loader style={{
                alignSelf: "center"
            }} visible={true} type="Circles" height={200} width={200} color="#18EEE9" />
        </div>
    );
}
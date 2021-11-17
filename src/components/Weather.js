import React from "react";

export default function Weather(props) {
    return (
        <div className="info">
            {props.temperature && (
                <p className="info_key">
                    {" "}
                    Temperature :<span className="info_value">
                        {props.temperature}{" "}
                    </span>{" "}
                </p>
            )}
            {props.city && (
                <p className="info_key">
                    {" "}
                    City : <span className="info_value">{props.city}</span>
                </p>
            )}
            {props.country && (
                <p className="info_key">
                    {" "}
                    Country : <span className="info_value"> {props.country}</span>
                </p>
            )}
            {props.humidity && (
                <p className="info_key">
                    {" "}
                    Humidity : <span className="info_value">{props.humidity}</span>
                </p>
            )}
            {props.descriptiopn && (
                <p className="info_key">
                    {" "}
                    Description :{" "}
                    <span className="info_value"> {props.descriptiopn}</span>
                </p>
            )}
            {props.error && <p className="info_key error"> {props.error}</p>}
        </div>
    );
}

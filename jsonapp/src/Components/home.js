import React from 'react'
import JsonViewer from 'react-json-view'

export const Home = (props) => {

    let boxstyle = {
        borderRadius: "25px",
        border: "2px solid #73AD21",
        padding: "20px",
        width: "auto",
        height: "75vh",
        overflow: "auto",
        margin: "10px 10px 10px 10px",
        fontSize: "10px"
    }

    return (
        <>
            <div  style={boxstyle}>
                <JsonViewer src={props.data} displayDataTypes = {false}
                            displayObjectSize={false} iconStyle='square' name='Json'
                            keyColor="white" 
                            theme={{
                                base00: "#282c34",
                                base01: "red",
                                base02: "black",
                                base03: "black",
                                base04: "black",
                                base05: "black",
                                base06: "red",
                                base07: "white",
                                base08: "red",
                                base09: "red",
                                base0A: "blue",
                                base0B: "blue",
                                base0C: "green",
                                base0D: "black",
                                base0E: "black",
                                base0F: "pink"
                            }}
                />
            </div>
        </>
    )
}

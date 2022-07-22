/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import * as React from "react"
import { getArrow } from "perfect-arrows"
import '../styles.css'

const PerfectArrow = () => {
    const p1 = { x: 450, y: 106 }
    const p2 = { x: 900, y: 100 }

    const arrow = getArrow(p1.x, p1.y, p2.x, p2.y, {
        bow: .4,
        stretch: 0.5,
        stretchMin: 0,
        stretchMax: 420,
        padStart: 10,
        padEnd: 20,
        flip: false,
        straights: true,
    })

    const [sx, sy, cx, cy, ex, ey, ae, as, ec] = arrow

    const endAngleAsDegrees = ae * (180 / Math.PI)

    return (
        <svg
            viewBox="0 0 1280 720"
            style={{ width: 700, height: 500 }}
            stroke="#000"
            fill="#000"
            strokeWidth={4}
        >
            <circle cx={sx} cy={sy} r={4} />
            <path d={`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`} fill="none" />
            <polygon
                points="0,-6 12,0, 0,6"
                transform={`translate(${ex},${ey}) rotate(${endAngleAsDegrees})`}
            />
        </svg>
    )
}


export default PerfectArrow
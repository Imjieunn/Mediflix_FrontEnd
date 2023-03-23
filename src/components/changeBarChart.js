import BarChart from "./BarChart";
export default function changeBarChart({ check }) {
    if (check) {
        return (
            <div className='chart'><BarChart num={1} /></div>
        );
    }
    else {
        return (
            <div className='chart'><BarChart num={2} /></div>
        );
    }
}
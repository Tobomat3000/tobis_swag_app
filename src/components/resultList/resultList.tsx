

export default function ResultList({ items }) {

    return (
        <table className={"table-fixed w-full border-collapse border border-slate-500 "}>
            <thead>
            <tr className={""}>
                <th className={"w-1/5 border border-slate-600 text-center"}>Spiel</th>
                <th className={"w-1/5 border border-slate-600 text-center"}>Tobi</th>
                <th className={"w-1/5 border border-slate-600 text-center"}>Michi</th>
                <th className={"w-1/5 border border-slate-600 text-center"}>Hubi</th>
                <th className={"w-1/5 border border-slate-600 text-center"}>Jan</th>
            </tr>
            </thead>
            <tbody className={""}>

            <tr>
                <td className={"w-1/5 border border-slate-600 text-center"}>1</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>3</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>2</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>5</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>0</td>
            </tr>

            <tr>
                <td className={"w-1/5 border border-slate-600 text-center"}>Summe</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>3</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>2</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>5</td>
                <td className={"w-1/5 border border-slate-600 text-center"}>0</td>
            </tr>
            </tbody>
        </table>
    );
}
import { FC } from "react";
import { TItem } from "../App";

type StatsProps = {
	list: TItem[]
}

const Stats: FC<StatsProps> = function({ list }) {

	const packedItems = list.filter(item => item.packed).length;

	const percent = Math.round(packedItems * 100 / list.length);
	
	return (
		<footer className="stats">
			<em>💼 You have {list.length} items on your list, you packed {packedItems}({percent}%)</em>
		</footer>
	);
};

export default Stats;
import { FC } from "react";
import { TItem } from "../App";

type StatsProps = {
	list: TItem[]
}

const Stats: FC<StatsProps> = function({ list }) {

	if(!list.length) {
		return (
			<footer className="stats">
				<em>Start adding items🚀</em>
			</footer>
		);
	}

	const packedItems = list.filter(item => item.packed).length;
	const percent = Math.round(packedItems / list.length * 100);
	
	return (
		<footer className="stats">
			<em>
				{
					percent !== 100 
						? `💼 You have ${list.length} items on your list, you packed ${packedItems}(${percent}%)`
						: `You got everything ready to go✈️`
				}
			</em>
		</footer>
	);
};

export default Stats;
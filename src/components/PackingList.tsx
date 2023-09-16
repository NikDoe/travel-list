import { FC } from "react";
import { TItem } from "../App";
import ListItem from "./ListItem";

type PackingListProps = {
	list: TItem[],
	onToggle: (id: number) => void;
}

const PackingList: FC<PackingListProps> = function(props) {
	const {
		list,
		onToggle
	} = props;

	return (
		<div className="list">
			<ul>
				{
					list.map(
						item => (
							<ListItem 
								key={item.id} 
								itemObject={item} 
								onToggle={onToggle}
							/>
						)
					)
				}
			</ul>
		</div>
	);
};

export default PackingList;
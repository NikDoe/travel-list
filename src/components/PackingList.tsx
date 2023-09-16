import { FC } from "react";
import { TItem } from "../App";
import ListItem from "./ListItem";

type PackingListProps = {
	list: TItem[],
	onToggleItem: (id: number) => void,
	onDeleteItem: (id: number) => void
}

const PackingList: FC<PackingListProps> = function(props) {
	const {
		list,
		onToggleItem,
		onDeleteItem
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
								onToggleItem={onToggleItem}
								onDeleteItem={onDeleteItem}
							/>
						)
					)
				}
			</ul>
		</div>
	);
};

export default PackingList;
import { FC } from "react";
import { TItem } from "../App";
import ListItem from "./ListItem";

type PackingListProps = {
	list: TItem[],
}

const PackingList: FC<PackingListProps> = function({ list }) {

	return (
		<div className="list">
			<ul>
				{
					list.map(
						item => (
							<ListItem 
								key={item.id} 
								itemObject={item} 
							/>
						)
					)
				}
			</ul>
		</div>
	);
};

export default PackingList;
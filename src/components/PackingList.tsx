import { FC, useState } from "react";
import { TItem } from "../App";
import ListItem from "./ListItem";

type PackingListProps = {
	list: TItem[],
	onToggleItem: (id: number) => void,
	onDeleteItem: (id: number) => void,
	onReset: () => void
}

type SortStateType = "input" | "description" | "packed";

const PackingList: FC<PackingListProps> = function(props) {
	const {
		list,
		onToggleItem,
		onDeleteItem,
		onReset
	} = props;

	const [sortBy, setSortBy] = useState<SortStateType | string>("input");

	let sortedList; 

	if(sortBy === "input") sortedList = list;

	if(sortBy === "description") {
		sortedList = list
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}

	if(sortBy === "packed") {
		sortedList = list
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
	};

	const resetButton = (
		<button
			onClick={onReset}
		>
			Reset
		</button>
	);

	const sortInput = (
		<select 
			name="sort"
			value={sortBy}
			onChange={handleSelectChange}
		>
			<option value="input">по умолчанию</option>
			<option value="description">по описанию</option>
			<option value="packed">не упакованные</option>
		</select>
	);

	const actions = (
		<div className="actions">
			{sortInput}
			{resetButton}
		</div>
	);

	return (
		<div className="list">
			<ul>
				{
					sortedList?.map(
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
			{list.length > 1 && actions }
		</div>
	);
};

export default PackingList;
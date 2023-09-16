import { CSSProperties, FC } from "react";
import { TItem } from "../App";

type ListItemProps = {
    itemObject: TItem,
	onToggleItem: (id: number) => void,
	onDeleteItem: (id: number) => void
}
const ListItem: FC<ListItemProps> = function(props) {
	const {
		itemObject,
		onToggleItem,
		onDeleteItem
	} = props;

	const {
		id,
		description,
		quantity,
		packed
	} = itemObject;

	const styleObject: CSSProperties  = {
		textDecoration: `${packed ? "line-through" : "none"}`
	};

	return (
		<li>
			<input 
				type="checkbox"
				checked={packed}
				onChange={() => onToggleItem(id)}
			/>
			<p style={styleObject}>
				{quantity} {description}
			</p>
			<button
				onClick={() => onDeleteItem(id)}
			>
				❌
			</button>
		</li>
	);
};

export default ListItem;
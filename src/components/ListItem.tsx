import { CSSProperties, FC } from "react";
import { TItem } from "../App";

type ListItemProps = {
    itemObject: TItem,
	onToggle: (id: number) => void;
}
const ListItem: FC<ListItemProps> = function(props) {
	const {
		itemObject,
		onToggle
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
			<p style={styleObject}>
				{quantity} {description}
			</p>
			<button onClick={() => onToggle(id)}>❌</button>
		</li>
	);
};

export default ListItem;
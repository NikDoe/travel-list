import { CSSProperties, FC } from "react";
import { TItem } from "../App";

type ListItemProps = {
    itemObject: TItem,
}
const ListItem: FC<ListItemProps> = function({ itemObject }) {
	const {
		description,
		quantity,
		packed
	} = itemObject;

	const styleObject: CSSProperties  = {
		textDecoration: `${packed ? "line-through" : "none"}`
	};

	return (
		<li>
			<p>{quantity}</p>
			<b 
				style={styleObject}
			>
				{description}
			</b>
			<button>❌</button>
		</li>
	);
};

export default ListItem;
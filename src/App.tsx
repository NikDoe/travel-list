import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export type TItem = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean,
}

function App() {
	const [list, setList] = useState<TItem[]>([]);

	const handleAddItem = (item: TItem) => {
		setList(prevItems => [...prevItems, item]);
	};

	const togglePacked = (id: number) => {
		setList(
			prevList => prevList.map(
				(item: TItem) => item.id === id 
					? { ...item, packed: !item.packed } 
					: item
			)
		);
	};

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItem} />
			<PackingList list={list} onToggle={togglePacked} />
			<Stats list={list} />
		</div>
	);
}

export default App;

import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: true },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
];


export type TItem = {
    id: number,
    description: string,
    quantity: number,
    packed: boolean,
}

function App() {
	const [list, setList] = useState<TItem[]>(initialItems);

	return (
		<div className="app">
			<Logo />
			<Form setList={setList} />
			<PackingList list={list} />
			<Stats list={list} />
		</div>
	);
}

export default App;

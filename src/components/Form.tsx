import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { TItem } from "../App";

interface FormData {
	quantity: string;
	description: string;
}

type FormProps = {
	setList: Dispatch<SetStateAction<TItem[]>>
}

const Form: FC<FormProps> = function({ setList }) {
	const initialFormData: FormData = {
		description: "",
		quantity: "1",
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if(formData.description.trim() === "") {
			alert('Пожалуйста, заполните поле item');
			return;
		}

		const newItem: TItem = {
			id: Date.now(),
			packed: false,
			quantity: Number(formData.quantity),
			description: formData.description
		};		

		setList(currList => [...currList, newItem]);
		setFormData(initialFormData);
	};

	const selectNumbers = Array.from({ length: 20 }, (_, index) => index + 1);

	return (
		<form 
			className="add-form"
			onSubmit={handleSubmit}
		>
			<h3>what do you need for your 🤩 trip</h3>
			<select 
				name="quantity"
				value={formData.quantity}
				onChange={handleInputChange}
			>
				{
					selectNumbers.map(
						num => (
							<option 
								key={num}
								value={num}
							>
								{num}
							</option>
						)
					)
				}
			</select>
			<input 
				name="description"
				value={formData.description}
				type="text"
				placeholder="item..."
				onChange={handleInputChange}
			/>
			<button>ADD</button>
		</form>
	);
};

export default Form;
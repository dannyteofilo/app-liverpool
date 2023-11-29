import { RandomsInterface } from "../interfaces/randoms";

export const generateNumberRandom = ({ min, max, total }: RandomsInterface) => {
	const numbersRandom = [];
	for (let i = 0; i < total; i++) {
		numbersRandom.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
	return numbersRandom;
};
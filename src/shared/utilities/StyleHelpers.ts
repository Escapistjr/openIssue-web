import { Falsy } from './Types';

/** Joins only true classes as a one element. */
export const classNames = (...classes: (string | string[] | Falsy)[]) => {
	let classCollection: (string | Falsy)[] = [];
	for (let singleClass of classes.filter(Boolean)) {
		if (singleClass instanceof Array) {
			singleClass.forEach((c) => {
				classCollection.push(c);
			});
		} else {
			classCollection.push(singleClass);
		}
	}
	return classCollection.join(' ');
};

/** Combines the two params together with camelCase. Ex. 'color', 'blue' => colorBlue */
export const variationName = (name: string, value: string | string[]) => {
	let r: string[] = [];

	if (!(value instanceof Array)) value = [value];

	value.forEach((v) => {
		r.push(`${v.charAt(0).toUpperCase()}${v.slice(1)}`);
	});

	return name + r.join('-');
};

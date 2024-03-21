import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ComponentProps<"button"> {
	text: string,
	varient: "outline" | "filled" | "filled_inverted",
	className?: string,
}

export default function Button({ text, varient, className, ...props }: ButtonProps) {

	switch (varient) {
		case "filled":
			return <button className={clsx(`rounded-xl py-2 px-4 mx-2 bg-mybg text-col`, className)} {...props}>{text}</button>
	
		case "outline":
			return <button className={clsx("rounded-xl py-2 px-4 mx-2 border border-neutral-700", className)} {...props}>{text}</button>

		case "filled_inverted":
			return <button className={clsx("rounded-xl py-2 px-4 mx-2 bg-black text-mybg", className)} {...props}>{text}</button>
	}


}

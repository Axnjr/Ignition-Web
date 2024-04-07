import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ComponentProps<"button"> {
	text?: string,
	varient: "outline" | "filled" | "filled_blue" | "with_children" | "normal",
	className?: string,
	children?: React.ReactNode,
}

export default function Button({ text, varient, className, children, ...props }: ButtonProps) {

	switch (varient) {
		case "filled":
			return <button className={clsx("rounded-full py-2 px-4 mx-2 bg-white text-black font-medium", className)} {...props}>{text}</button>
	
		case "outline":
			return <button className={clsx("rounded-full py-2 px-4 mx-2 border border-neutral-700", className)} {...props}>{text}</button>

		case "normal":
			return <button className={clsx("rounded-lg bg-neutral-100 border dark:border-neutral-800 dark:bg-neutral-900 py-1 px-4 mx-2 ", className)} {...props}>{text}</button>

		case "filled_blue":
			return <button className={clsx("rounded-full py-2 px-4 mx-2 bg-mybg text-white font-medium", className)} {...props}>{text}</button>

		case "with_children":
			return <button className={clsx("rounded-full bg-white text-black py-2 px-4 mx-2 font-medium", className)} {...props}>
				{children}
			</button>
	}


}

import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ComponentProps<"button"> {
	text?: string,
	varient: "outline" | "filled" | "plain" | "with_children" | "normal",
	className?: string,
	children?: React.ReactNode,
}

export default function Button({ text, varient, className, children, ...props }: ButtonProps) {

	switch (varient) {
		case "filled":
			return <button className={clsx(`rounded-lg py-2 px-4 mx-2 bg-white text-black font-medium`, className)} {...props}>{text}</button>
	
		case "outline":
			return <button className={clsx("rounded-lg py-2 px-4 mx-2 border border-neutral-700", className)} {...props}>{text}</button>

		case "normal":
			return <button className={clsx("rounded-lg bg-neutral-100 border dark:border-neutral-800 dark:bg-neutral-900 py-1 px-4 mx-2 ", className)} {...props}>{text}</button>

		case "plain":
			return <button className={clsx("mx-2", className)} {...props}>{text}</button>

		case "with_children":
			return <button className={clsx("rounded-xl py-2 px-4 mx-2 border border-neutral-700", className)} {...props}>
				{children}
			</button>
	}


}

export const groups = [
    "Emails",
    "Work Updates",
    "Family Group",
    "Gaming Clan",
    "Social",
    "Work",
    "Personal",
    "Financial",
    "Education",
    "Sports",
    "Entertainment",
    "Lifestyle",
    "Billing Alert",
    "Action Required",
    "News",
    "Weather",
    "Server Events",
    "System Errors"
]

interface Play {
    group: string,
    message: string
}

export const play: Play[] = [
    {
        group: "Emails Feed",
        message: "Sick bro !!"
    },
    {
        group: "Work Updates",
        message: "All tasks completed ahead of schedule."
    },
    {
        group: "Family Group",
        message: "Don't forget grandma's birthday this Sunday!"
    },
    {
        group: "Gaming Clan",
        message: "Raid night moved to 8 PM. Be there or be square."
    },
    {
        group: "Neighborhood Watch",
        message: "Suspicious activity reported near the park. Stay alert."
    },
    {
        group: "Fantasy Football",
        message: "Reminder: Draft day is this Saturday at noon. Don't be late."
    },
]

export const syncCodeBlock = `import { useSync } from "@ignition/react";

export default function MyComp() {
    // data to be synced
    const [state, setState, onExternalChange] = useSync({  
        group: "site_viewers",
        maxClients: 500,
        data: "You can sync anytype of data !"
    });

    return ( 
		<>  {/* Your Component */}  </> 
	)
}`

export const theme = {
	plain: {
		color: "#fff",
		backgroundColor: "#1111124c",
	},
	styles: [
		{
			types: ["prolog"],
			style: {
				color: "#ec5189",
			},
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(50,50,50)",
			},
		},
		{
			types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
			style: {
				color: "#2a6af3",
			},
		},
		{
			types: ["number", "inserted"],
			style: {
				color: "#32cba3",
			},
		},
		{
			types: ["constant"],
			style: {
				color: "#100ff2",
			},
		},
		{
			types: ["attr-name", "variable"],
			style: {
				color: "",
			},
		},
		{
			types: ["deleted", "string", "attr-value", "template-punctuation"],
			style: {
				color: "#E2AAFC",
			},
		},
		{
			types: ["selector"],
			style: {
				color: "",
			},
		},
		{
			// Fix tag color
			types: ["tag"],
			style: {
				color: "rgb(78, 201, 176)",
			},
		},
		{
			// Fix tag color for HTML
			types: ["tag"],
			languages: ["markup"],
			style: {
				color: "rgb(86, 156, 214)",
			},
		},
		{
			types: ["punctuation", "operator"],
			style: {
				color: "rgb(212, 212, 212)",
			},
		},
		{
			// Fix punctuation color for HTML
			types: ["punctuation"],
			languages: ["markup"],
			style: {
				color: "#808080",
			},
		},
		{
			types: ["function"],
			style: {
				color: "#ec5189",
			},
		},
		{
			types: ["class-name"],
			style: {
				color: "rgb(78, 201, 176)",
			},
		},
		{
			types: ["char"],
			style: {
				color: "#100fed",
			},
		},
	],
}


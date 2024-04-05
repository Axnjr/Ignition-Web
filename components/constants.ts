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


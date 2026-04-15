const users = [
    {
        name: "Moore Hensley",
        balance: 2811,
        friends: ["Sharlene Bush"],
        skills: ["lorem", "ipsum", "dolor"]
    },
    {
        name: "Sharlene Bush",
        balance: 3821,
        friends: ["Briana Decker", "Sheree Anthony"],
        skills: ["amet", "commodo", "elit"]
    },
    {
        name: "Elma Head",
        balance: 2278,
        friends: ["Goldie Gentry", "Sheree Anthony"],
        skills: ["adipisicing", "culpa", "non"]
    },
    {
        name: "Carey Barr",
        balance: 3951,
        friends: ["Blackburn Dotson"],
        skills: ["tempor", "nulla", "proident"]
    },
    {
        name: "Blackburn Dotson",
        balance: 1498,
        friends: ["Carey Barr", "Ross Vazquez"],
        skills: ["ex", "veniam", "irure"]
    },
    {
        name: "Sheree Anthony",
        balance: 2764,
        friends: ["Briana Decker", "Goldie Gentry"],
        skills: ["mollit", "anim", "velit"]
    },
    {
        name: "Ross Vazquez",
        balance: 1870,
        friends: ["Blackburn Dotson"],
        skills: ["laborum", "nostrud"]
    }
];
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users));
const getUsersWithFriend = (users, friendName) => {
    return users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));


console.log(getUsersWithFriend(users, 'Goldie Gentry'));



const getNamesSortedByFriendsCount = users => {
    return [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = users => {
    const allSkills = [];

    for (const user of users) {
        for (const skill of user.skills) {
            if (!allSkills.includes(skill)) {
                allSkills.push(skill);
            }
        }
    }


    return allSkills.sort();
};

console.log(getSortedUniqueSkills(users));


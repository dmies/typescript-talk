interface User {
    id: string;
    username: string;
    birthday?: Date;
}

const data = {
    id: '213',
    username: 'bob',
    language: 'typescript'
}

const user: User = data;


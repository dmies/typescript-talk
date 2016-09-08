interface User{
    id: string;
    username: string;
    birthday?: Date;
}

var data = {
    id:'213',
    username:'bob',
    language:'typescript'
}

const user:User = data;

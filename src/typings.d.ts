type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    profilepicture: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

type Message = {
    id: number;
    message: string;
    timestamp: string;
    senderId: number;
    receiverId: number;
}

export {User, Message};
   

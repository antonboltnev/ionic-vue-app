import { defineStore } from "pinia";

export const userStore = defineStore('user', {
    state: () => ({
        userEntity: {}
    }),

    actions: {
        fetchUserFromDB() {
            const mockUser = {
                profile: {
                    name: 'Jon Smith',
                    info: 'Some user personal info',
                    avatar: 'https://docs-demo.ionic.io/assets/madison.jpg',
                    id: 1 //TODO: unique ID after registering user account
                },
                posts: [
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2020.10.21',
                        likes: '22',
                        description: 'Something that user added below',
                        comments: [],
                        id: 1,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: []
                        ,
                        id: 2,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 3,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 4,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 5,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 6,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 7,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 8,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 9,
                    },
                    {
                        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                        date: '2023.10.21',
                        likes: '3',
                        description: 'Something that user added below',
                        comments: [],
                        id: 10,
                    },
                ],
                subscribers: [
                    {
                        profile: {
                            name: 'Sam',
                            info: 'Some user personal info',
                            avatar: 'https://docs-demo.ionic.io/assets/madison.jpg',
                            id: 2 //TODO: unique ID after registering user account
                        },
                        posts: [
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '02/07/2011',
                                likes: '100',
                                description: 'Something that user added below',
                                comments: [],
                                id: 1,
                                userId: 2,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 2,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 3,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 4,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 5,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 6,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/20/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 2,
                                id: 7,
                            },
                        ],
                    },
                    {
                        profile: {
                            name: 'Tom',
                            info: 'Some user personal info',
                            avatar: 'https://docs-demo.ionic.io/assets/madison.jpg',
                            id: 3 //TODO: unique ID after registering user account
                        },
                        posts: [
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 3,
                                id: 1,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '05/10/2023',
                                likes: '6',
                                description: 'Something that user added below 123123',
                                comments: [],
                                userId: 3,
                                id: 7,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/21/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 3,
                                id: 8,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/19/2023',
                                likes: '12',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 3,
                                id: 9,
                            },
                            {
                                photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
                                date: '10/20/2023',
                                likes: '3',
                                description: 'Something that user added below',
                                comments: [],
                                userId: 3,
                                id: 10,
                            },
                        ],
                    }
                ]
            }

            this.userEntity = mockUser
        }
    }
})
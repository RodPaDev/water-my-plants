declare namespace Express {
    interface Request {
        user: {
            email: string,
            password: string
        },
        userInfo: {
            user_id: number,
            username: string,
            first_name:  String,
            last_name:  String,
            profile_pic: String,
        }
    }
}
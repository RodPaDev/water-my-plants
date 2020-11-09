export interface IPlants {
    user_id: number,
    plant_name: string,
    water_frequency_days: number
} 

export interface IWaterLogs {
    plant_id: number,
    date: Date,
}

export interface IUsers {
    email: string,
    password: string,
}

export interface IUserInfo {
    user_id: number,
    username: string,
    first_name:  String,
    last_name:  String,
    profile_pic: String,
}